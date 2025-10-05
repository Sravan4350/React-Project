import { useState, useEffect } from "react";
import axios from "axios";

export const useRestaurents = () => {

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.2438457&lng=80.1706266&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const data = response.data;
      const restaurants = data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
 
      setAllRestaurants(restaurants);
      setListOfRestaurants(restaurants);
      
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    } finally {
      setLoading(false);
    }
  };

  return { allRestaurants, listOfRestaurants, setListOfRestaurants, loading, setLoading };
} 