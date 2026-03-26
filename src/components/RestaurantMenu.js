import useRestaurentMenu from "../utils/useRestaurentMenu";
import Shimmer from "../components/ShimmerUI";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurentMenu(resId);

  if (!resInfo) {
    return <Shimmer />;
  }

  const {
    name = "",
    cuisines = [],
    costForTwoMessage = "",
  } = resInfo?.cards[2]?.card?.card?.info || {};

  const menuItems =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards || [];

  return (
    <div className="bg-gray-50 min-h-screen px-4 md:px-8 py-6">
      
      {/* Restaurant Info */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {name}
        </h1>
        <p className="text-gray-600">
          {cuisines.join(", ")}
        </p>
        <p className="text-gray-500 mt-1">
          💰 {costForTwoMessage}
        </p>
      </div>

      {/* Menu Items */}
      <div className="max-w-4xl mx-auto space-y-4">
        {menuItems.map((item) => {
          const info = item.card.info;
          const price = info.price / 100 || info.defaultPrice / 100;

          return (
            <div
              key={info.id}
              className="bg-white shadow-sm rounded-lg p-4 flex justify-between items-center hover:shadow-md transition"
            >
              
              {/* Item Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {info.name}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  ₹ {price}
                </p>
              </div>

              {/* Add Button */}
              <button className="bg-orange-500 text-white px-4 py-1.5 rounded-lg hover:bg-orange-600 transition">
                Add
              </button>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default RestaurantMenu;