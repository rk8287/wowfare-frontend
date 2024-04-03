import React, { useState } from "react";
import "./Header.css";
import img1 from "../../Assets/Images/wowfare-blue.svg";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("navBar");

  const showNavbar = () => {
    setActive("navBar activeNavbar");
  };

  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="home-header flex">
        <div className="logoDiv">
          <Link to={""} href="#" className="logo flex">
            <div className="nav-logo">
              <img src={img1} alt="logo" />
            </div>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to={'/myTrip'} href="#" className="navLink">
                My Trips
              </Link>
            </li>

            <li className="navItem">
              <Link to={""} href="#" className="navLink">
                Contact
              </Link>
            </li>

            <button type="submit" className="home-callbtn callBtn">
              <BiSolidPhoneCall className="icon" /> <span>(8330 436-0717)</span>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="navbarIcon" />
          </div>
        </div>

        <div onClick={showNavbar} className="toggleNavbar">
          <PiDotsNineBold className="navbarIcon" />
        </div>
      </header>
    </section>
  );
};

export default Header;
