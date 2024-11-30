import { LOGO_URL, RES_URL } from "../utils/constants";

const RestuarantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-image"
        src={"" + RES_URL + "/" + resData.cloudinaryImageId}
      />
      <h3>{resData?.name}</h3>
      <h3>{resData?.cuisines?.join(", ")}</h3>
      <h3>{resData?.costForTwo}</h3>
      <h3>{resData?.avgRating}</h3>
    </div>
  );
};

export default RestuarantCard;
