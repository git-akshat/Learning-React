import React from "react";
import ReactDOM from "react-dom/client";

const RestuarantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-image"
        src="https://img.freepik.com/premium-vector/logo-food-company-that-says-sun-sun-sunflower_917213-253424.jpg"
      />
      <h3>{props.name}</h3>
      <h3>{props.cuisine.join(", ")}</h3>
      <h3>{}</h3>
      <h3>{}</h3>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/logo-food-company-that-says-sun-sun-sunflower_917213-253424.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const data = {
  name: "Meghna Foods",
  cuisine: ["Biryani", "Dessert"],
};

const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div className="res-container">
        <RestuarantCard {...data} />
        <RestuarantCard {...data} />
        <RestuarantCard {...data} />
        <RestuarantCard {...data} />
        <RestuarantCard {...data} />
        <RestuarantCard {...data} />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);