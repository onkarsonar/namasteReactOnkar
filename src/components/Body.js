import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const[filteredRestaurant,setFilteredRestaurant] = useState([]);
  const [searchText,setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6804639&lng=74.018261&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    
  
    setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  //conditional rendering
  // if(listOfRestaurants==0) {
  //   return <Shimmer/>
  // }
  return listOfRestaurants==0 ? (<Shimmer/> )
  : (
    <div className="body">
      <div className="filter">
        <div className='search'>
          <input type='text' className="search-box" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }}></input>
          <button onClick={()=>{
           const filteredRestaurant =  listOfRestaurants.filter((res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
           setFilteredRestaurant(filteredRestaurant);
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setListOfRestaurants(filteredList);
        }}>To rated restaurant</button>
      </div>
      <div className="res-container">
        {filteredRestaurant?.length > 0 &&
          filteredRestaurant?.map((restaurants) => (
      
          <Link  key={restaurants?.info?.id} to={"/restaurants/"+restaurants?.info?.id}><RestaurantCard resData={restaurants} /></Link>
          )
        )
        }




      </div>
    </div>
  )
}

export default Body;