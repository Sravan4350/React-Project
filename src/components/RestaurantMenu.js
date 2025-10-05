import useRestaurentMenu  from "../utils/useRestaurentMenu";
import Shimmer from "../components/ShimmerUI";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  // useParams is a hook that allows us to access the parameters of the current route.
  const {resId} = useParams()
  
  // Custom hook to fetch restaurant menu data based on the restaurant ID (resId).
  const resInfo = useRestaurentMenu(resId);

  if (!resInfo) {
    return <Shimmer />;
  }

  const {name = "", cuisines = [], costForTwoMessage = ""} = resInfo?.cards[2]?.card?.card?.info || {};
  const menuItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards || [];
  console.log(menuItems);
  

  return (<div className="restaurant-menu">
    <h1>{name}</h1>
    <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
    {menuItems.map((item) => (
      <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
    ))}
  </div>)
}

export default RestaurantMenu;