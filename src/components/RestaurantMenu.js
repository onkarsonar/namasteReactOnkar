import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            MENU_API+resId
        );
        const json = await data.json();
        setResInfo(json.data);  // Set the fetched data
    };
    if(resInfo===null) return <Shimmer/>;
    // Destructure 'name' only if the necessary data exists
    const name = resInfo?.cards[2]?.card?.card?.info?.name || "Restaurant Name"; // Default value if 'name' is undefined
    const cuisines = resInfo?.cards[2]?.card?.card?.info?.cuisines || "No Cuisines";
    // const clou
const cloudinaryImageId = resInfo?.cards[2]?.card?.card?.info?.cloudinaryImageId || "";
const cost = resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage || "--";
const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards;
    // console.log(itemCards);  // Log 'name' to check if it's fetched properly

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
