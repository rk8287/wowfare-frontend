import { Link } from "react-router-dom";
import "./searchItem.css";

import { IoAirplaneSharp } from "react-icons/io5";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.image} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} m from center</span>
        <span className="siTaxiOp"> 24 HOURS FREE CANCELLATION</span>
       <div className="flexbox">
       <span className="siSubtitle">{item.origin}</span>
       <span className="hr-tag"><hr className="hr" /></span>
        <span className="siSubtitle-icon"> <IoAirplaneSharp/></span>
        <span className="siSubtitle">{item.destination}</span>
       </div>
        <span className="siFeatures">{item.desc}</span>
        <div className="flexbox-two">
        <span className="siCancelOp">{item.departureTime} </span>
        <span className="siCancelSto">{item.stops} Stop </span>
        <span className="siCancelOp">{item.arrivalTime} </span>
        </div>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">${item.price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/flight/${item.id}`}>
            <button className="siCheckButton">Flight Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
