import React from "react";
import "./StepSection.css";
import stepImage from "../../Assets/Images/arrows-1.svg";

const StepSection = () => {
  return (
    <div className="stepSection-container">
      <div className="step-container">
        <div className="step-content">
          <p className="step-num">Step 1</p>
          <p className="step-title">Get quick help with an expert</p>
          <p className="step-peragraph">
            Let us know where you’re going by explaining everything via phone.
            You can also do everything via email for your convenience.
          </p>
        </div>
        <div className="step-arrow">
          <img src={stepImage} alt="" />
        </div>
        <div className="step-content">
          <p className="step-num">Step 2</p>
          <p className="step-title">Receive options via email</p>
          <p className="step-peragraph">
            Get expert itineraries within minutes in your inbox. You can adjust
            any layover or pick airline. Your Travel Manager will do it for you.
          </p>
        </div>
        <div className="step-arrow">
          <img src={stepImage} alt="" />
        </div>
        <div className="step-content">
          <p className="step-num">Step 3</p>
          <p className="step-title">Choose Offer and travel</p>
          <p className="step-peragraph">
            Pay securely online, make any adjustments, receive your e-tickets
            via email and you are ready to fly!
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepSection;
