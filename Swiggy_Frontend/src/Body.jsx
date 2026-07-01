import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurantslist, setrestaurantslist] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5010576&lng=73.81050789999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      const resData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setrestaurantslist(resData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    //to make cards of list of restaurants
    <div className="flex flex-wrap gap-4 justify-center">
      {restaurantslist.map((x) => {
        return <RestaurantCard key={x?.info?.id} props={x?.info} />;
      })}
    </div>
  );
};

export default Body;