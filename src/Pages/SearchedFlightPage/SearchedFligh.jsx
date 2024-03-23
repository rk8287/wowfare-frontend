import React from "react";
import "./SearchedFligh.css";
import MainForm from "../../Components/MainFormSection/MainForm";
import mainImage from "../../Assets/Images/deeplink-bg.jpg";
import Header from "../../Components/Header/Header";
import RecentDeals from "../../Components/RecentCheapDeals/RecentDeals";

const SearchedFligh = () => {
  return (
    <div className="searchedFlight">
      <div className="searchedFlightContainer">
      {/* <img className="mainImage" src={mainImage} alt="" /> */}
        <Header />
        <MainForm />
      </div>
      <div className="recentCheapDealsSection">
        <RecentDeals />
      </div>
    </div>
  );
};

export default SearchedFligh;
