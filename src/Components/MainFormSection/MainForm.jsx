import React from "react";
import "./MainForm.css";
import LeftContainer from "../MainFormLeftSection/LeftContainer";
import RightContainer from "../MainFormRightSection/RightContainer";

const MainForm = () => {


  
  return (
    <div className="mainFormSection">
      <div className="mainForm-container">
        <LeftContainer />
        <RightContainer />
      </div>
    </div>
  );
};

export default MainForm;
