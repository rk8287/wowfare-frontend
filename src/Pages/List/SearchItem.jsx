import React from "react";
import { Link } from "react-router-dom";
import { IoAirplaneSharp } from "react-icons/io5";
import "./searchItem.css";

const SearchItem = ({ item, totalFare, totalStops, validatingAirlineCode, origin, destination }) => {
  const lastOriginDestinationOption = item.OriginDestinationOptions[item.OriginDestinationOptions.length - 1];
  const arrivalDateTime = lastOriginDestinationOption?.OriginDestinationOption[1]?.FlightSegment.ArrivalDateTime;
  const departureDateTime = lastOriginDestinationOption?.OriginDestinationOption[0]?.FlightSegment.DepartureDateTime;
  const flightNumber = lastOriginDestinationOption?.OriginDestinationOption[0]?.FlightSegment.OperatingAirline.FlightNumber;
  const flightName = lastOriginDestinationOption?.OriginDestinationOption[0]?.FlightSegment.OperatingAirline.Name;

  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
  };

  const formattedArrivalTime = formatTime(arrivalDateTime);
  const formattedDepartureTime = formatTime(departureDateTime);

  return (
    <div className="searchItem">
      <img src={'https://logos-world.net/wp-content/uploads/2023/01/Singapore-Airlines-Logo.png'} alt="Loading.." className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{`${flightName} (${validatingAirlineCode})`}</h1>
        <span className="siDistance">{`Flight No : ${flightNumber}`}</span>
        <span className="siTaxiOp">24 HOURS FREE CANCELLATION</span>
        <div className="flexbox">
          <span className="siSubtitle" style={{ textTransform: "uppercase" }}>{origin}</span>
          <span className="hr-tag"><hr className="hr" /></span>
          <span className="siSubtitle-icon"> <IoAirplaneSharp /></span>
          <span className="siSubtitle" style={{ textTransform: "uppercase" }}>{destination}</span>
        </div>
        <span className="siFeatures">{item.desc}</span>
        <div className="flexbox-two">
          <span className="siCancelOp">{formattedDepartureTime}</span>
          <span className="siCancelSto">{totalStops} Stop</span>
          <span className="siCancelOp">{formattedArrivalTime}</span>
        </div>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siDetailTexts">
          <span className="siPrice">${totalFare}</span>
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
