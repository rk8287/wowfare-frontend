import React, { useState } from 'react';
import './FlightDetails.css';
import { FaArrowRight } from "react-icons/fa";

const FlightDetails = ({ flightData }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  
  return (
    <div className='flight-details-main-container'>
      <div className="button-container">
        <button className="flex-button" onClick={() => handleButtonClick(1)}>Flight</button>
        <button className="flex-button" onClick={() => handleButtonClick(2)}>Fare</button>
        <button className="flex-button" onClick={() => handleButtonClick(3)}>Baggage</button>
        <button className="flex-button" onClick={() => handleButtonClick(4)}>Rule</button>
      </div>
      <div className="details-container">
        {selectedButton === 1 && <div>
            <div className="section-flight-info">
              <div className="section-flight-container">
                <div className="icon-log">
                <FaArrowRight/>
                </div>
                <div className="depart">
                  <h6 className='depart'>Depart</h6>
                  <p className='depart'>{`${flightData.origin} - ${flightData.destination}`}</p>
                  
                </div>

              </div>

              <div className="section-flight-container-two">
                
              <div className="flight-no">
                <p className='p-tag' style={{color:'green'}}>{flightData.flightName}</p>
               </div>
               
               <div className="flight-no">
                <p className='p-tag'>{flightData.flightNumber}</p>
               </div>

               <div className="flight-no">
                <p className='p-tag'>{flightData.departureTime}</p>
               </div>

               <div className="flight-no">
                <p className='p-tag'>{flightData.arrivalTime}</p>
               </div>

               <div className="flight-no">
                <p className='p-tag'>{flightData.fareClass}</p>
               </div>
                
              </div>
            </div>
          </div>}
        {selectedButton === 2 && <div className='fare-details-section'>

            <div className="fare-2-details-container">
              <div className="other-fare-detials">
                <p className='fare-p-tag'>Base Fare</p>
                <p className='fare-p-tag'>Taxes and Fees</p>
                <p className='fare-p-tag'>Instant Discount</p>
                <p className='fare-p-tag'>Final Total Fare Per Passenger</p>
                
              </div>


              <div className="other-fare-detials">
                <p>{`$ ${flightData.baseFare}`}</p>
                <p>{`$ ${flightData.totalTax}`}</p>
                <p>{`$ ${flightData.instantDiscount}`}</p>
                <p>{`$ ${flightData.finalTotalFare}`}</p>
                
              </div>
            </div>
          </div>}
        {selectedButton === 3 && <div>Details for Flight 3</div>}
        {selectedButton === 4 && <div>Details for Flight 4</div>}
      </div>
    </div>
  );
};

export default FlightDetails;
