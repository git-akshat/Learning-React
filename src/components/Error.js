import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error">
      <h1>Oops! something went wrong</h1>
      <h3>
        {error.status}:{error.data}
      </h3>
    </div>
  );
};

export default Error;
