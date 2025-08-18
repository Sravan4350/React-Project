import { useState, useEffect } from "react";
import RestroContainer from "./RestroContainer";
import Shimmer from "./ShimmerUI";

const MainContent = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.2438457&lng=80.1706266&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
 
      setAllRestaurants(restaurants);
      setListOfRestaurants(restaurants);
      
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    } finally {
      setLoading(false);
    }
  };

  const onClickFilter = () => {
    const data = allRestaurants.filter(
      (restro) => restro?.info?.avgRating > 4
    );
    setListOfRestaurants(data);
  };

  const onChangeInputValue = (event) => {
    setSearchText(event.target.value);
  }

  const onClickSearch = () => {
    const data = allRestaurants.filter((restro) => (
      restro?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    ))
    setListOfRestaurants(data);
  }

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="body-component">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchText}
          onChange={onChangeInputValue}
        />
        <button onClick={onClickSearch} className="search-button">
          Search
        </button>
        <button onClick={onClickFilter} className="filter-button">
          <img
            className="filter-icon" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGk8qlROXITq5otWgtvhvgm5Y3mfHCo2kaQ&s"
            alt="Search Icon"
          />
        </button>
        <p>Filter Top Rated</p>
      </div>
      <RestroContainer restroList={listOfRestaurants} />
    </div>
  );
};

export default MainContent;
