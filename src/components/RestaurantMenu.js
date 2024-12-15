import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(resInfo===null) return <Shimmer/>;
    // Destructure 'name' only if the necessary data exists
    const name = resInfo?.cards[2]?.card?.card?.info?.name || "Restaurant Name"; // Default value if 'name' is undefined
    const cuisines = resInfo?.cards[2]?.card?.card?.info?.cuisines || "No Cuisines";
    // const clou
const cloudinaryImageId = resInfo?.cards[2]?.card?.card?.info?.cloudinaryImageId || "";
const cost = resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage || "--";
const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards;

    // console.log(itemCards);  // Log 'name' to check if it's fetched properly
const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
console.log(categories);
    return  (
        <div className="menu">
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{cost}</h3>
            <h2>Menu - </h2>
            <ul>
                {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.defaultPrice/100 || item.card.info.price/100}</li>)}
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li> */}
             
            </ul>
        </div>
    );
};

export default RestaurantMenu;
