import { IMG_CDN_URL } from "../constant";
const RestaurantCard = (restaurant) => {
  const { id, cloudinaryImageId, name, cuisines, lastMileTravelString } =
    restaurant.restaurant;
  return (
    <div className="p-2 m-2 w-56 shadow-lg bg-pink-50" key={id}>
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
