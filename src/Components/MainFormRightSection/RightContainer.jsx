import React from "react";
import "./RightContainer.css";
import { BiSolidPhoneCall } from "react-icons/bi";

const RightContainer = () => {
  return (
    <div className="right-container-content">
      <div className="upper-content mb-3">
        <div className="callUsNow">
          <div className="callUsNowContent">
            <h3>Call Us Now</h3>
            <h4>to get more details</h4>
          </div>
          <div className="phoneNumberBtn">
            <a href="/">
              <BiSolidPhoneCall className="icon" /> <span>(8330 436-0717)</span>
            </a>
          </div>
        </div>

        <div className="contectUsContent mt-3">
          <div className="verticalLine">
            <div className="line"></div>
          </div>
          <div className="contentInPera">
            <p>Or fill out the form and our agent will contact you</p>
          </div>
          <div className="verticalLine">
            <div className="line"></div>
          </div>
        </div>
      </div>

      <div className="contactUsHeading">
        <h3>Or fill out the form and our agent will contact you</h3>
      </div>

      <form action="">
        <div className="dropdown-content">
          <div className="dropdown-contents">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Round-Trip
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                // aria-expanded="false"
              >
                1 Traveler
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Economy
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="search-form mt-3">
          <div className="search-form_row">
            <div className="location-blocks">
              <div className="form-group location-from">
                <span>From</span>
                <input type="text" placeholder="City or Airport" />
              </div>
              <div className="form-group location-to">
                <span>To</span>
                <input type="text" placeholder="City or Airport" />
              </div>
            </div>
            <div className="search-from-period">
              <div className="form-group">
                <span>Departure</span>
                <input type="date" name="" id="" />
              </div>
              <div className="form-group">
                <span>Return</span>
                <input type="date" name="" id="" />
              </div>
            </div>
          </div>
        </div>

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
          <button type="submit">Claim Your Discount</button>
        </div>

        <div className="termsAndCondition mt-3">
          <p>
            <strong>100% Safe. No purchase required.</strong> I agree to provide
            my phone number and to be contacted by clicking “Get a Free Quote”.
            Your <a href="/">privacy</a> is respected.{" "}
            <a href="/">Terms of Service</a>.
          </p>
        </div>
      </form>
    </div>
  );
};

export default RightContainer;
