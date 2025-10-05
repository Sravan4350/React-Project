import { useState, lazy} from "react";
// Axios is a library used to make HTTP requests from the browser or Node.js. It provides a simple and easy-to-use API for sending asynchronous requests to REST endpoints and handling responses. Axios supports features like request and response interceptors, automatic JSON data transformation, request cancellation, and more.
import RestroContainer from "./RestroContainer";
import Shimmer from "./ShimmerUI";
import { useRestaurents } from "../utils/useRestaurents";
import userStatusOnline from "../utils/useStatusOnline";

const MainContent = () => {

  const {allRestaurants, listOfRestaurants, setListOfRestaurants, loading} = useRestaurents()
  const [searchText, setSearchText] = useState("");

  const onClickFilter = () => {
    const data = allRestaurants.filter((restro) => restro?.info?.avgRating > 4);
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

  const onlineStatus = userStatusOnline();

  // If offline: do not display the main content. Show an offline message with a retry action.
  if (onlineStatus === false) {
    return (
      <div style={{padding:32, textAlign:"center"}}>
        <h2>You're offline</h2>
        <p>Looks like you are disconnected. The app cannot load content without an internet connection.</p>
        <div style={{marginTop:16}}>
          <button
            onClick={() => window.location.reload()}
            style={{padding:"8px 16px", cursor:"pointer"}}
            aria-label="Retry connection"
          >
            Retry
          </button>
        </div>
      </div>
    );
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
            fetchPriority="high"
            loading="eager"
          />
        </button>
        <p>Filter Top Rated</p>
      </div>
      <RestroContainer restroList={listOfRestaurants} />
    </div>
  );
};

export default MainContent;
