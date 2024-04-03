import React, { useState, useEffect } from "react";
import "./Popup.css"; // Import your popup styles here
import popupImage from "../../Assets/Images/exit-popup-image.jpg";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Function to show the popup after a delay
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPopup(true);

      //   document.body.style.overflow = "hidden";
    }, 5000); // Change 5000 to the desired delay time in milliseconds
    // Clear the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
      //   document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className={`popup ${showPopup ? "show" : ""}`}>
      <div className="popup-content">
        <div className="image-container">
          <img src={popupImage} alt="Popup" />
        </div>
        <div className="content-container">
          <span className="popup-close" onClick={() => setShowPopup(false)}>
            &times;
          </span>
          <div className="content">
            <div className="popup-upper-content">
              <div className="">
                <p>Wait, before you go..</p>
              </div>
              <div className="save-extra-heading">
                <h2>
                  Save extra <span>$25 OFF</span> on your purchase!
                </h2>
              </div>
              <div className="enter-your-phone">
                <p>
                  Enter your phone and share your promo code with our agent to
                  receive the extra discound!
                </p>
              </div>
              <div className="promo-code">
                <p>Your Code: </p> <span>WOWSAVE25</span>
              </div>
            </div>
            <div className="popup-lower-content">
              <form action="">
                <div className="personal-details-field mt-3">
                  <div className="nameAndEmail">
                    <div className="input-field email-field">
                      <input type="text" placeholder="Enter Your Email" />
                    </div>
                    <div className="input-field name-field">
                      <input type="text" placeholder="Enter Your Name" />
                    </div>
                  </div>
                  <div className="number-field">
                    <div className="number-input-field">
                      <div class="input-number-field input-group">
                        <input
                          type="number"
                          id="flightNumber"
                          name="flightNumber"
                          placeholder="82871-46841"
                        />
                      </div>
                      <div className="verticalLine">
                        <div className="line"></div>
                      </div>
                      <div class="input-select-field input-group">
                        <select id="cityCode" name="cityCode">
                          <option value="NYC">
                            <div className="flag">flag</div>
                            <div className="code">+1</div>
                          </option>
                          <option value="LAX">+91</option>
                          <option value="CHI">+86</option>
                          <option value="SFO">+33</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="getFreeQuoteBtn mt-3">
                  <button type="submit">Get a Free Quote</button>
                </div>

                <div className="termsAndCondition mt-3">
                  <p>
                    <strong>100% Safe. No purchase required.</strong> I agree to
                    provide my phone number and to be contacted by clicking “Get
                    a Free Quote”. Your <a href="/">privacy</a> is respected.{" "}
                    <a href="/">Terms of Service</a>.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
