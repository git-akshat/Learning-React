import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";
import { useEffect, useState } from "react";
import Schimmer from "./Schimmer";

const Body = () => {
  // rest hook
  // state object
  const [listofRest, setRestList] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  const [searchText, setSearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/lia?lat=21.99740&lon=79.00110"
    // );

    // const json = await data.json();

    // console.log(json);
    setRestList(resData);
    setFilteredRest(resData);
  };

  if (listofRest.length === 0) {
    return <Schimmer />;
  }

  //   let [listofRest] = resData;
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-text"
          value={searchText}
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            setFilteredRest(
              listofRest.filter((rest) =>
                String(rest.info.name).toLowerCase().includes(searchText)
              )
            );
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          value="filter"
          onClick={() => {
            setFilteredRest(
              listofRest.filter((rest) => rest.info.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRest.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
