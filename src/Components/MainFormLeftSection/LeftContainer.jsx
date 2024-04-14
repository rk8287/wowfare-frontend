import React, { useEffect, useState } from "react";
import stars from "../../Assets/Images/svg.star.svg";
import crossArrow from "../../Assets/Images/cross-arrow.svg";
import bedge from "../../Assets/Images/online-offer-bedge.svg";
import { IoTimeOutline } from "react-icons/io5";
import callback from "../../Assets/Images/callback.svg";
import booknow from "../../Assets/Images/booknow.svg";
import farelock from "../../Assets/Images/farelock.svg";
import lowestfare from "../../Assets/Images/lowestfare.svg";
import confidence from "../../Assets/Images/confidence.svg";
import assistance from "../../Assets/Images/assistance.svg";
import phonering from "../../Assets/Images/phonering.svg";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../Action/productAction";
import Loader from "../../Pages/Loader";

const LeftContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product, loading, error } = useSelector((state) => state.productDetails);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    dispatch(getProductDetails(id));

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
            .then(response => response.json())
            .then(data => setUserLocation(data.city))
            .catch(error => console.error("Error fetching location:", error));
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="left-container">
          <div className="left-container-content">
            <div className="top-content">
              <div className="priceExpiry">
                <p>
                  <IoTimeOutline className="icon" />
                  <span>Price expires in 2 days!</span>
                </p>
              </div>
              <div className="cityname-heading">
                <h1>
                  <span>{userLocation || product.location}</span>{" "}
                  <img src={crossArrow} alt="" />{" "}
                  <span>{product.location}</span>
                </h1>
              </div>
           <div className="exclusiveOfferORPriceSection">
             <div className="exclusiveOffer">
               <div className="exclusiveOfferContainer">
                 <div className="onlineOffer">
                   <p>
                     <img src={bedge} alt="" />
                     <span>Exclusive Online Offer</span>
                   </p>
                 </div>
                 <div className="callOnlyDeal">
                   <p>Choose from 400+ Airlines Call Only Deal!</p>
                 </div>
               </div>
             </div>
             <div className="verticalLine">
               <div className="line"></div>
             </div>
             <div className="onlinePrice">
               <div className="onlinePriceContainer">
                 <div className="oldPrice">
                   <p>
                     Online Price <span>$ 958</span>
                   </p>
                 </div>
                 <div className="newPrice">
                   <div className="amount">
                     <h1>
                       <strong>${product.price}</strong>
                     </h1>
                   </div>
                   <div className="star">*</div>
                   <div className="economyClass">
                     <p>Economy Class, Round-Trip , Total</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div className="mid-content">
           <div className="upper-line">
             <div className="line"></div>
           </div>
           <div className="middle-contents">
             <div className="grid">
               <div className="grid-content">
                 <div className="img">
                   <img src={callback} alt="" />
                 </div>
                 <div className="grid-contents">
                   <p className="heading">Callback</p>
                   <p className="peragraph">Instant free call</p>
                 </div>
               </div>
               <div className="grid-content">
                 <div className="img">
                   <img src={booknow} alt="" />
                 </div>
                 <div className="grid-contents">
                   <p className="heading">Book Now</p>
                   <p className="peragraph">Pay later</p>
                 </div>
               </div>
               <div className="grid-content">
                 <div className="img">
                   <img src={farelock} alt="" />
                 </div>
                 <div className="grid-contents">
                   <p className="heading">Fare Lock</p>
                   <p className="peragraph">24h offer lock</p>
                 </div>
               </div>
               <div className="grid-content">
                 <div className="img">
                   <img src={lowestfare} alt="" />
                 </div>
                 <div className="grid-contents">
                   <p className="heading">Lowest Fare</p>
                   <p className="peragraph">Gurantee</p>
                 </div>
               </div>
               <div className="grid-content">
                 <div className="img">
                   <img src={confidence} alt="" />
                 </div>
                 <div className="grid-contents">
                   <p className="heading">Confidence</p>
                   <p className="peragraph">Safe booking</p>
                 </div>
               </div>
               <div className="grid-content">
                 <div className="img">
                   <img src={assistance} alt="" />
                 </div>
                 <div className="grid-contents">
                   <p className="heading">24/7 Assistance</p>
                   <p className="peragraph">Live Agents</p>
                 </div>
               </div>
             </div>
           </div>
           <div className="lower-line">
             <div className="line"></div>
           </div>
         </div>
         <div className="end-content">
           <div className="phoneringimg">
             <img src={phonering} alt="" />
           </div>
           <p>
             NEED INSTANT HELP? Our agents are available 24/7 for free advice
           </p>
         </div>
       </div>
       <div className="rated-stars mt-4">
         <span>
           Rated <b>4.7 </b>
           <img src={stars} alt="stars" />
           based on <b>7K+</b> happy traveler reviews!
         </span>
       </div>
     </div>
     )}
    </>
  );
};

export default LeftContainer;
