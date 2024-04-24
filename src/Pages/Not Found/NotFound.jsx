import React from 'react';
import './NotFound.css';

import { FaPlaneCircleExclamation } from "react-icons/fa6";

const notFound = require('../../Assets/Images/asian-man-looking-plane-error-404-flash-message-empty-state-ui-design-page-found-popup-cartoon-image-vector-flat-illustration-concept-white-background_151150-16914.avif');

const NotFound = () => {
  return (
    <div className='main-notFound-container'>
      <div className="not-found-container">
        <div className='image-main-container'>
          <img className="animated-image" src={notFound} alt="" />
          <strong className='strong'>Flight Not Found! <FaPlaneCircleExclamation className='plane-icon'/></strong>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
