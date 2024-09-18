import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6804639&lng=74.018261&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    

    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  //conditional rendering
  // if(listOfRestaurants==0) {
  //   return <Shimmer/>
  // }
  return listOfRestaurants==0 ? (<Shimmer/> )
  : (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setListOfRestaurants(filteredList);
        }}>To rated restaurant</button>
      </div>
      <div className="res-container">
        {listOfRestaurants?.length > 0 &&
          listOfRestaurants?.map((restaurants) => (
      
            <RestaurantCard key={restaurants?.info?.id} resData={restaurants} />
          )
        )
        }




      </div>
    </div>
  )
}

export default Body;