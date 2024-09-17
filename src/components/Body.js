import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6804639&lng=74.018261&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    // console.log(json.data.cards[2]);
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

    setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }

  return (
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