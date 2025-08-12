import React from "react";
import RestroContainer from "./RestroContainer";
import restroData from "./restroData";

const MainContent = () => {
  const restroList = restroData?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  const [filteredRestroList, setFilteredRestroList] = React.useState(restroList);
  
  const onClickFilter = () => {
    const data = restroList.filter(restro => (
      restro?.info?.avgRating >= 4.5
    ))
    setFilteredRestroList(data);
  }

  return (
    <div className="body-component">
      <button className="filter-button">Filter</button>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
        <button className="search-button">Search</button>
        <button onClick={onClickFilter} className="filter-button">
          <img
            className="filter-icon" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGk8qlROXITq5otWgtvhvgm5Y3mfHCo2kaQ&s"
            alt="Search Icon"
          />
        </button>
        <p>Filter Top Rated</p>
      </div>
      <RestroContainer restroList={filteredRestroList} />
    </div>
  );
}
export default MainContent