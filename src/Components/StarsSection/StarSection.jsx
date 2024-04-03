import React from "react";
import "./StarSection.css";
import image1 from '../../Assets/Images/reviews-logo-1.svg'
import image2 from '../../Assets/Images/reviews-logo-2.svg'
import image3 from '../../Assets/Images/reviews-logo-3.svg'

const StarSection = () => {
  return (
    <div className="starSection-container">
      <h2>81K+ of happy trips with WowFare</h2>
      <div className="starReviews">
        <figure>
          <img src={image1} alt="" />
        </figure>
        <div className="verticalLine">
          <div className="line"></div>
        </div>
        <figure>
          <img src={image2} alt="" />
        </figure>
        <div className="verticalLine">
          <div className="line"></div>
        </div>
        <figure>
          <img src={image3} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default StarSection;
