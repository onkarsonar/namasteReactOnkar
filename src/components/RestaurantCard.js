import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-300 hover:bg-gray-400">
        <img className="rounded-lg" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo }</h4>
        <h4>{resData?.info?.sla?.deliveryTime} Minutes</h4>
      </div>
    );
  }

  
  export default RestaurantCard;
