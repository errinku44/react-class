import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constant";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    getRestraurentInfo();
  }, []);

  async function getRestraurentInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    setRestaurant(json?.data);
  }
  return restaurant;
};

export default useRestaurant;
