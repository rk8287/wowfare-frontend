import React from 'react'
import './OtherDetails.css'


const travelImg = require('../../../Assets/Images/Travel_protection.png')
const travelImg2 = require('../../../Assets/Images/Baggage_protection.png')
const travelImg3 = require('../../../Assets/Images/Frame.png')

const OtherDetails = () => {
  return (
    <div className='other-main-container'>

        <div className="other-container">
            <div className="other-icon">
                <img src={travelImg} alt="" />
            </div>
            <div className="other-heading">
                <strong>Travel Protection</strong>
            </div>

            <div className="other-details">
                <p>We safeguard not only your travel investment and belongings but, most crucially, you.</p>
            </div>
        </div> 

        <span className='line-span'>|</span>

        <div className="other-container">
            <div className="other-icon">
                <img src={travelImg2} alt="" />
            </div>
            <div className="other-heading">
                <strong>Special Baggage Protection</strong>
            </div>

            <div className="other-details">
                <p>Enhance your trip with our Baggage Protection: quickly retrieve delayed bags or receive a full refund.</p>
            </div>
        </div> 

        <span className='line-span'>|</span>


        <div className="other-container">
            <div className="other-icon">
                <img src={travelImg3} alt="" />
            </div>
            <div className="other-heading">
                <strong>Customer Support (24/7)</strong>
            </div>

            <div className="other-details">
                <p>For prompt assistance, reach out to us via email at info@EasyFlyTrips.com.</p>
            </div>
        </div> 
    </div>
  )
}

export default OtherDetails