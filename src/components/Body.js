import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mock_data/restuarantLists";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  // rest hook
  // state object
  const [listofRest, setRestList] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  const [searchText, setSearchtext] = useState("");

  useEffect(() => {
    fetchData();

    setRestList(resData);
    setFilteredRest(resData);
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/lia?lat=21.99740&lon=79.00110"
    // );
    // const json = await data.json();
    // console.log(json);
  };

  if (listofRest.length === 0) {
    return <Shimmer />;
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
          <Link to={"/restaurant/" + restaurant.info.name}>
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant.info}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
