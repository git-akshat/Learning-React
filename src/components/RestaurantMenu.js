import { useEffect, useState } from "react";
import { menu } from "../utils/mock_data/foodItems";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestuarantMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  const { resName } = useParams();
  console.log(resName);

  useEffect(() => {
    fetchData();

    setMenuItems(menu);
  }, []);

  const fetchData = async () => {
    // const data = await fetch("http://www.test.com/");
    // const json = await data.json();
    // console.log(json);
  };

  if (menuItems.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="res-menu">
      <h1>{resName}</h1>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestuarantMenu;
