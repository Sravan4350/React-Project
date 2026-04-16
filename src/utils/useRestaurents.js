import { useState, useEffect } from "react";
import axios from "axios";
import { ALL_RESTRO_URL } from "./constants";
import restroData from "../components/restroData";
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
      const response = await axios.get(ALL_RESTRO_URL);
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