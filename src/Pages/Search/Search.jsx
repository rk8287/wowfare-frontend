import React, { useState } from "react";
import { HiLocationMarker, HiOutlineUserGroup } from "react-icons/hi";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import './Search.css'

const Search = () => {
  const [isOneWay, setIsOneWay] = useState(true);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [numInfants, setNumInfants] = useState(0);
  const [showPassengerOption, setShowPassengerOption] = useState(false);

  const handleToggleFlightType = (value) => {
    setIsOneWay(value === "one-way");
  };

  const handleToggleShowPassenger = () => {
    setShowPassengerOption(!showPassengerOption);
  };

  const handlePassengerChange = (type, increment) => {
    switch (type) {
      case "adults":
        setNumAdults(Math.max(numAdults + increment, 0));
        break;
      case "children":
        setNumChildren(Math.max(numChildren + increment, 0));
        break;
      case "infants":
        setNumInfants(Math.max(numInfants + increment, 0));
        break;
      default:
        break;
    }
  };

  const preventDefaultAction = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="way-of-flight">
        <div className="round-trip">
          <button
            className={!isOneWay ? "active" : ""}
            onClick={() => handleToggleFlightType("round-trip")}
          >
            Round trip
          </button>
          <button
            className={isOneWay ? "active" : ""}
            onClick={() => handleToggleFlightType("one-way")}
          >
            One way
          </button>
        </div>
      </div>
      <form className="formDiv" action="">
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="column-input">
            <div className="input-field departure-input">
              <HiLocationMarker className="icon" />
              <input type="text" name="" id="" placeholder="Leaving From" />
            </div>
            <div className="input-field destination-input">
              <HiOutlineUserGroup className="icon" />
              <input type="text" name="" id="" placeholder="Going to" />
            </div>
            <div className="input-field departure-date-input">
              <FaCalendarAlt className="icon" />
              <input type="date" name="" id="" placeholder="Departing" />
            </div>

            {isOneWay ? (
              <div className="input-field returning-date-input">
                <FaCalendarAlt className="icon" />
                <input type="date" name="" id="" placeholder="Returning" />
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="column-search">
            <div
              onClick={handleToggleShowPassenger}
              className="input-field passenger-input"
            >
              <FaUser className="icon" />
              <input type="" name="" id="" placeholder="Passenger" />
            </div>
            <div className="searchBtn">
              <button type="submit">Search</button>
            </div>
          </div>
        </div>

        <div className="fligh-class-dropdown">
          <select
            class="dropdown-flight-class"
            aria-label="Default select example"
          >
            <option selected>Economy</option>
            <option value="1">Premium Economy</option>
            <option value="2">Business</option>
            <option value="3">First</option>
          </select>
        </div>

        {showPassengerOption && (
          <div className="passenger-options">
            <div className="passenger-type">
              <label>Adults:</label>
              <div className="addOrSubBtn">
                <button
                  onClick={(e) => {
                    preventDefaultAction(e);
                    handlePassengerChange("adults", -1);
                  }}
                >
                  -
                </button>
                <span>{numAdults}</span>
                <button
                  onClick={(e) => {
                    preventDefaultAction(e);
                    handlePassengerChange("adults", 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="passenger-type">
              <label>Children:</label>
              <div className="addOrSubBtn">
                <button
                  onClick={(e) => {
                    preventDefaultAction(e);
                    handlePassengerChange("children", -1);
                  }}
                >
                  -
                </button>
                <span>{numChildren}</span>
                <button
                  onClick={(e) => {
                    preventDefaultAction(e);
                    handlePassengerChange("children", 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="passenger-type">
              <label>Infants:</label>
              <div className="addOrSubBtn">
                <button
                  onClick={(e) => {
                    preventDefaultAction(e);
                    handlePassengerChange("infants", -1);
                  }}
                >
                  -
                </button>
                <span>{numInfants}</span>
                <button
                  onClick={(e) => {
                    preventDefaultAction(e);
                    handlePassengerChange("infants", 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </>
  );
};

export default Search;
