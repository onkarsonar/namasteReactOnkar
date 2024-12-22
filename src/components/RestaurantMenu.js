import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const name = resInfo?.cards[2]?.card?.card?.info?.name || "Restaurant Name";
    const cuisines = resInfo?.cards[2]?.card?.card?.info?.cuisines || ["No Cuisines"];
    const cost = resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage || "--";

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="text-center">
            <h1 className="font-bold my-8 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}</p>
            <h3>{cost}</h3>
            {categories.map((category, index) => (
                // Explicitly return the component in map()
                <RestaurantCategory key={index} data={category?.card?.card} />
            ))}
        </div>
    );
};

export default RestaurantMenu;


