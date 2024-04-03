import React from "react";
import "./Header.css";
import img1 from "../../Assets/Images/logo.svg";
import { BiSolidPhoneCall } from "react-icons/bi";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container mt-3">
        <div className="nav-logo">
          <img src={img1} alt="logo" />
        </div>
        <div className="phoneNumber">
          <p>
            FREE PHONE <br /> ONLY DEALS 24/7
          </p>
          <button type="submit" className="callBtn">
            <BiSolidPhoneCall className="icon" /> <span>(8330 436-0717)</span>
          </button>
          <button type="submit" className="onlyCallBtn">
            <BiSolidPhoneCall className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
