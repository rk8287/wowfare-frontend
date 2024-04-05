import React, { useState, useEffect } from "react";
import popupImage from "../../Assets/Images/consultant-promo-2.png";
import './ContactPop.css'

const ContactPopup = () => {

    const [showPopup, setShowPopup] = useState(false);


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowPopup(true);


        }, 5000);
        return () => {

            clearTimeout(timeoutId);

        };
    }, []);

    return (
        <div className={`popups ${showPopup ? "show" : ""}`}>
            <div className="popups-content">
            <span className="popups-close" onClick={() => setShowPopup(false)}>
            &times;
          </span>
                <div className="popups-image-container">
                    <img className="popups-img" src={popupImage} alt="" />
                </div>

                <div className="popups-text-container">
                    <p className="popups-p-tag">Looking for last-minute deals? Just give us a call to get phone-only deals!</p>
                    <p className="popups-second-p-tag">Call us at <span className="color-span">1-845-664-6165</span> and get assistance 24/7.</p>
                </div>
            </div>
            
        </div>
    )
}

export default ContactPopup