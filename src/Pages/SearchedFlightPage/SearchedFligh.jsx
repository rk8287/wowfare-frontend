import React from "react";
import "./SearchedFligh.css";
import MainForm from "../../Components/MainFormSection/MainForm";

import Header from "../../Components/Header/Header";
import RecentDeals from "../../Components/RecentCheapDeals/RecentDeals";
import StepSection from "../../Components/StepsSection/StepSection";
import ReviewSection from "../../Components/ReviewsSection/ReviewSection";
import Popup from "../../Components/Popup/Popup";

const SearchedFligh = () => {
  return (
    <div className="searchedFlight">
      <Popup />
      <div className="searchedFlightContainer">
        {/* <img className="mainImage" src={mainImage} alt="" /> */}
        <Header />
        <MainForm />
      </div>
      <div className="recentCheapDealsSection">
        <RecentDeals />
      </div>
      <div className="stepSection">
        <StepSection />
      </div>
      <div className="reviewAndStarSection">
        <div className="bothSection">
          {/* <StarSection /> */}
          <ReviewSection />
        </div>
      </div>
    </div>
  );
};

export default SearchedFligh;
