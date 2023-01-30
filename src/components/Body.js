import { restaurantList } from "../constant";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

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
  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🦖🦖Offline, Please check your internet connection.</h1>;
  }
  return !filteredRestaurants.length ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-2">
        <input
          type="text"
          className="h-10 rounded-md"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-purple-900 text-white rounded-md"
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
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restraurent/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard restaurant={restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
