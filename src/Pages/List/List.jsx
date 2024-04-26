import React, { useState } from "react";
import "./list.css";
import { useLocation } from "react-router-dom";
import SearchItem from "./SearchItem";
import Loader from "../Loader";
import NotFound from "../Not Found/NotFound";

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
                  <span className="lsOptionText">NON-STOP</span>
                  <input
                    type="checkbox"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">1-STOP</span>
                  <input
                    type="checkbox"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">2 + STOP</span>
                  <input
                    type="checkbox"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Airlines</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput-L"
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              <Loader/>
            ) : searchResult.length === 0 ? (
              <NotFound/>
            ) : (
              searchResult.map((item) => (
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
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
