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
import ContactPopup from "../../Components/Popup/ContactPopup";
import Search from "../../Pages/Search/Search";

const Main = () => {
  return (
    <section className="homeSection">

      <ContactPopup/>
      <div className="overlay"></div>

      {/* <video src={video} muted loop autoPlay typeof="video/mp4"></video> */}

      <div className="homeContent container">
        <div className="textDiv">
          <h2 data-aos="fade-up" className="homeTitle ">
            FIND CHEAP FLIGHTS AND SAVE
          </h2>

          <span data-aos="fade-up" className="smallText">
            Search and Compare our best deals with over 440+ airlines - <span className="color-span">Book
            now!</span>
          </span>
        </div>
        <div className="search-box-container">
          <Search />
        </div>
      </div>
    </section>
  );
};

export default Main;
