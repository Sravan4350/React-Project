import { useState } from "react";
import RestroContainer from "./RestroContainer";
import Shimmer from "./ShimmerUI";
import { useRestaurents } from "../utils/useRestaurents";
import userStatusOnline from "../utils/useStatusOnline";

const MainContent = () => {
  
  // Custom Hook to Fetch Restaurants
  const { allRestaurants, listOfRestaurants, setListOfRestaurants, loading } = useRestaurents();

  const [searchText, setSearchText] = useState("");

  const onClickFilter = () => {
    const data = allRestaurants.filter(
      (restro) => restro?.info?.avgRating > 4
    );
    setListOfRestaurants(data);
  };

  const onChangeInputValue = (event) => {
    setSearchText(event.target.value);
  };

  const onClickSearch = () => {
    const data = allRestaurants.filter((restro) =>
      restro?.info?.name
        ?.toLowerCase()
        ?.includes(searchText.toLowerCase())
    );
    setListOfRestaurants(data);
  };

  const onlineStatus = userStatusOnline();

  // Offline UI
  if (!onlineStatus) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          You're Offline 🔴
        </h2>
        <p className="text-gray-600 mb-4">
          Please check your internet connection and try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="bg-gray-50 min-h-screen px-4 md:px-8 py-6">
      
      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        
        {/* Search Box */}
        <div className="flex gap-2 md:w-1/2 shadow-sm">
          <input
            type="text"
            className="gap-2 w-full border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={onChangeInputValue}
          />
          <button
            onClick={onClickSearch}
            className="bg-orange-500 text-white px-6 rounded-r-lg hover:bg-orange-600 transition"
          >
            Search
          </button>
        </div>

        {/* Filter Button */}
        <button
          onClick={onClickFilter}
          className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition"
        >
          <img
            className="w-5 h-5"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGk8qlROXITq5otWgtvhvgm5Y3mfHCo2kaQ&s"
            alt="Filter"
          />
          <span className="text-gray-700 font-medium">
            Top Rated
          </span>
        </button>

      </div>

      {/* Restaurant List */}
      <RestroContainer restroList={listOfRestaurants} />
    </div>
  );
};

export default MainContent;