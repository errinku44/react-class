import { restaurantList } from "../constant";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const filterData = (searchText, restaurants) => {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  return filterData;
};

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestraunts();
  }, []);

  async function getRestraunts() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json.data?.cards[2]?.data?.data?.cards);
  }
  return !filteredRestaurants.length ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">

        {filteredRestaurants.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant.data}/>;
        })}
      </div>
    </>
  );
};

export default Body;
