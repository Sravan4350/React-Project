import { useState,useEffect} from "react";
import { MENU_URL } from "./constants";
import axios from "axios";

const useRestaurentMenu = (resId) => {

  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu()
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await axios.get(MENU_URL + resId);
      const data = response.data.data;
      
      setResInfo(data);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    }
  }    
  return resInfo;
}
export default useRestaurentMenu;