import { useState, useEffect } from "react";
import axios from "axios";

export const useRestaurents = () => {

  // We are maintaining two states here:
  // 1. allRestaurants: This will hold the complete list of restaurants fetched from the API. It remains unchanged and serves as our source of truth.
  // 2. listOfRestaurants: This is the state that we will use to display the restaurants on the UI. It can be filtered based on user actions (like search or filter by rating) without affecting the original data in allRestaurants.
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