import RestaurantCard, {withVegLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const[filteredRestaurant,setFilteredRestaurant] = useState([]);
  const [searchText,setSearchText] = useState('');
const RestaurantCardVeg = withVegLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6804639&lng=74.018261&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    
  const apiDataPath = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(apiDataPath);
    setFilteredRestaurant(apiDataPath);
  }

const onlineStatus = useOnlineStatus();

if(onlineStatus===false) {
  return <h1>Looks Like you are offline, please check your internet connection</h1>
}
  //conditional rendering
  // if(listOfRestaurants==0) {
  //   return <Shimmer/>
  // }
  return listOfRestaurants==0 ? (<Shimmer/> )
  : (
    <div className="body">
      <div className="filter flex">
        <div className='search m-4 p-4'>
          <input type='text' className="border border-solid border-black" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }}></input>
          <button className="px-4 py-1 bg-green-400 m-4 rounded-lg" onClick={()=>{
           const filteredRestaurant =  listOfRestaurants.filter((res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
           setFilteredRestaurant(filteredRestaurant);
          }}>Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
        <button className="px-4 py-1 bg-gray-400" onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setListOfRestaurants(filteredList);
        }}>To rated restaurant</button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.length > 0 &&
          filteredRestaurant?.map((restaurants) => (
      
          <Link  key={restaurants?.info?.id} to={"/restaurants/"+restaurants?.info?.id}>
            {
              restaurants?.info?.veg ? (<RestaurantCardVeg resData={restaurants}/>) : (<RestaurantCard resData={restaurants} />)
            }
            </Link>
          )
        )
        }




      </div>
    </div>
  )
}

export default Body;