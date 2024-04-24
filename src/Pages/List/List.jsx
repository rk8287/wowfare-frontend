import React, { useState } from "react";
import "./list.css";
import { useLocation } from "react-router-dom";
import SearchItem from "./SearchItem";

const List = ({ loading }) => {
  const location = useLocation();

  const [dates, setDates] = useState(location.state.departureDate);
  const [destination, setDestination] = useState(location.state.goingTo);
  const [origin, setOrigin] = useState(location.state.leavingFrom);
  const [adult, setAdult] = useState(location.state.numAdults);
  const [searchResult, setSearchResult] = useState(location.state.searchResult);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  return (
    <div>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Origin</label>
              <input placeholder={origin} type="text" />
            </div>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span>{dates}</span>
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Min price</span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Max price</span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Class</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {searchResult.map((item) => (
                  <SearchItem
                    key={item.FareItinerary.ResultIndex}
                    item={item.FareItinerary}
                    totalFare={
                      item.FareItinerary.AirItineraryFareInfo.ItinTotalFares.TotalFare.Amount
                    }
                    totalStops={
                      item.FareItinerary.OriginDestinationOptions[0].TotalStops
                    }
                    validatingAirlineCode={
                      item.FareItinerary.ValidatingAirlineCode
                    }
                    origin={origin}
                    destination={destination}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
