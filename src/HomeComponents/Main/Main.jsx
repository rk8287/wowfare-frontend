import React from "react";
import "./Main.css";
// import video from "../../Assets/video1.mp4";
import { GrLocation } from "react-icons/gr";
import { HiLocationMarker, HiOutlineUserGroup } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

const Main = () => {
  return (
    <section className="homeSection">
      <div className="overlay"></div>

      {/* <video src={video} muted loop autoPlay typeof="video/mp4"></video> */}

      <div className="homeContent container">
        <div className="textDiv">
          <h2 data-aos="fade-up" className="homeTitle ">
            FIND CHEAP FLIGHTS AND SAVE
          </h2>

          <span data-aos="fade-up" className="smallText">
            Search and Compare our best deals with over 440+ airlines - Book
            now!
          </span>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="column-input">
            <div className="input-field departure-input">
              <HiLocationMarker className="icon" />
              <input type="text" name="" id="" placeholder="Leaving From" />
            </div>
            <div className="input-field destination-input">
              <HiOutlineUserGroup className="icon" />
              <input type="text" name="" id="" placeholder="Going to" />
            </div>
            <div className="input-field departure-date-input">
              <FaCalendarAlt className="icon" />
              <input type="date" name="" id="" placeholder="Departing" />
            </div>
            <div className="input-field returning-date-input">
              <FaCalendarAlt className="icon" />
              <input type="date" name="" id="" placeholder="Returning" />
            </div>
          </div>

          <div className="column-search">
            <div className="input-field returning-date-input">
              {/* <FaCalendarAlt className="icon" /> */}
              <input type="text" name="" id="" placeholder="Returning" />
            </div>
            <div className="searchBtn">
              <button type="submit">Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
