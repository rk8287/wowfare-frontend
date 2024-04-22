import React, { useState } from 'react';
import './Search.css';
import Loader from '../Loader';
import { HiLocationMarker, HiOutlineUserGroup } from 'react-icons/hi';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [isOneWay, setIsOneWay] = useState(true);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [numInfants, setNumInfants] = useState(0);
  const [showPassengerOption, setShowPassengerOption] = useState(false);
  const [loading, setLoading] = useState(false);
  const [leavingFrom, setLeavingFrom] = useState('');
  const [goingTo, setGoingTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returningDate, setReturningDate] = useState('');
  const [searchResult, setSearchResults] = useState('');

  const navigate = useNavigate();

  const handleToggleFlightType = (value) => {
    setIsOneWay(value === 'round-trip');
  };

  const handleToggleShowPassenger = () => {
    setShowPassengerOption(!showPassengerOption);
  };

  const handlePassengerChange = (type, increment) => {
    switch (type) {
      case 'adults':
        setNumAdults(Math.max(numAdults + increment, 0));
        break;
      case 'children':
        setNumChildren(Math.max(numChildren + increment, 0));
        break;
      case 'infants':
        setNumInfants(Math.max(numInfants + increment, 0));
        break;
      default:
        break;
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when starting the request
    navigate('/flights', {
      state: { leavingFrom, departureDate, goingTo, options: { numAdults, numChildren, numInfants } },
    });

    try {
      const response = await axios.post('/api/proxy/availability', {
        user_id: 'raunak_testAPI',
        user_password: 'raunakTest@2024',
        access: 'Test',
        ip_address: '223.225.56.102',
        requiredCurrency: 'USD',
        journeyType: isOneWay ? 'OneWay' : 'RoundTrip',
        OriginDestinationInfo: [
          {
            departureDate: departureDate,
            airportOriginCode: leavingFrom,
            airportDestinationCode: goingTo,
          },
        ],
        class: 'Economy',
        adults: numAdults,
        childs: numChildren,
        infants: numInfants,
      });

      setSearchResults(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false when request completes (success or error)
    }
  };

  const preventDefaultAction = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="way-of-flight">
        <div className="round-trip">
          <button className={!isOneWay ? 'active' : ''} onClick={() => handleToggleFlightType('round-trip')}>
            Round trip
          </button>
          <button className={isOneWay ? 'active' : ''} onClick={() => handleToggleFlightType('one-way')}>
            One way
          </button>
        </div>
      </div>
      <form className="formDiv" onSubmit={handleSearch}>
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="column-input">
            <div className="input-field departure-input">
              <HiLocationMarker className="icon" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Leaving From"
                value={leavingFrom}
                onChange={(e) => setLeavingFrom(e.target.value)}
              />
            </div>
            <div className="input-field destination-input">
              <HiOutlineUserGroup className="icon" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Going to"
                value={goingTo}
                onChange={(e) => setGoingTo(e.target.value)}
              />
            </div>
            <div className="input-field departure-date-input">
              <FaCalendarAlt className="icon" />
              <input
                type="date"
                name=""
                id=""
                placeholder="Departing"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </div>

            {isOneWay ? (
              <div className="input-field returning-date-input">
                <FaCalendarAlt className="icon" />
                <input
                  type="date"
                  name=""
                  id=""
                  placeholder="Returning"
                  value={returningDate}
                  onChange={(e) => setReturningDate(e.target.value)}
                />
              </div>
            ) : (
              ''
            )}
          </div>

          <div className="column-search">
            <div onClick={handleToggleShowPassenger} className="input-field passenger-input">
              <FaUser className="icon" />
              <input type="" name="" id="" placeholder="Passenger" />
            </div>
            <div className="searchBtn">
              <button onClick={handleSearch} type="submit">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="fligh-class-dropdown">
          <select className="dropdown-flight-class" aria-label="Default select example">
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
                    handlePassengerChange('adults', -1);
                  }}
                >
                  -
                </button>
                <span>{numAdults}</span>
                <button
                  onClick={(e) => {
                    preventDefaultAction(e);
                    handlePassengerChange('adults', 1);
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
                    handlePassengerChange('children', -1);
                  }}
                >
                  -
                </button>
                <span>{numChildren}</span>
                <button
                  onClick={(e) => {
                    preventDefaultAction(e);
                    handlePassengerChange('children', 1);
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
                    handlePassengerChange('infants', -1);
                  }}
                >
                  -
                </button>
                <span>{numInfants}</span>
                <button
                  onClick={(e) => {
                    preventDefaultAction(e);
                    handlePassengerChange('infants', 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
      {loading && <div><Loader/></div>}
    </>
  );
};

export default Search;
