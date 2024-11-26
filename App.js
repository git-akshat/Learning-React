import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Namaste React"
);

// JSX
const jsxHeading = <h1>Namaste JSX</h1>;

// React Functional Component
const HeadingComponent = () => {
    return <h1>This is a react functional component</h1>
}

const HeadingComponent2 = () => <h1>This is also a react functional component</h1>

const HeadingComponent3 = () => (
  <div id="container">
    {heading}
    {jsxHeading}
    {HeadingComponent}
    <h1>This is also a react functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent3 />);