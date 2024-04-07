import React from "react";
import "./Main.css";
import ContactPopup from "../../Components/Popup/ContactPopup";
import Search from "../../Pages/Search/Search";
import OtherDetails from "../Header/other/OtherDetails";
import { Link } from "react-router-dom";

const Main = () => {
  return (
<>
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
      Search and Compare our best deals with over 440+ airlines - <Link to={'/searchedFlight'} className="color-span">Book
      now!</Link>
    </span>
  </div>
  <div className="search-box-container">
    <Search />
  </div>
</div>
</section>

<section>
  <div className="details-div">
    <OtherDetails/>
  </div>
</section>
</>

    

  );
};

export default Main;
