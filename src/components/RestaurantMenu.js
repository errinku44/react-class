import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  const [restrauntMenu, setRestraurentMenu] = useState(null);

  useEffect(() => {
    getRestraurentInfo();
  }, []);

  async function getRestraurentInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=28.5355161&lng=77.3910265&menuId="+id
    );
    const json = await data.json();
    setRestraurentMenu(json?.data);
  }

  return !restrauntMenu ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt Id: {id}</h1>
        <h1>{restrauntMenu?.name}</h1>
        <img src={IMG_CDN_URL + restrauntMenu.cloudinaryImageId} />
        <h3>{restrauntMenu?.area}</h3>
        <h3>{restrauntMenu?.city}</h3>
        <h3>{restrauntMenu?.avgRating}</h3>
        <h3>{restrauntMenu?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restrauntMenu?.menu?.items).map((e) => (
            <li>{e.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
