import useRestaurentMenu from "../utils/useRestaurentMenu";
import Shimmer from "../components/ShimmerUI";
import { useParams } from "react-router-dom";
import RestroCategories from "./RestroCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurentMenu(resId);
  const [showItems, setShowItems] = useState(0);

  if (!resInfo) {
    return <Shimmer />;
  }

  const {
    name = "",
    cuisines = [],
    costForTwoMessage = "",
  } = resInfo?.cards[2]?.card?.card?.info || {};

  const menuItems =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) =>
        card.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    ) || [];

  return (
    <div className="min-h-screen px-4 md:px-8 py-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 mt-4 font-serif text-center p-3">
        {name}
      </h1>
      {/* Restaurant Info */}
      <div className="w-50% p-6 mb-6">
        {categories.map((category, index) => (
          <RestroCategories
            index={index}
            showItems={showItems}
            setShowItems={setShowItems}
            key={category?.card?.card?.categoryId}
            category={category?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
