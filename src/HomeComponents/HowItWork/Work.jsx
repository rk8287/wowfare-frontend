import React from "react";
import "./Work.css";

const workCard = [
  {
    id: 1,
    card_image: "",
    card_title: "Quickly get expert assistance",
    card_pera:
      "If you want to book a cheap flight ticket or need answers to any travel-related questions, our customer support team is available to assist you via phone.",
  },
  {
    id: 2,
    card_image: "",
    card_title: "Get flight options to your inbox",
    card_pera:
      "Our Travel Manager will send you customized itineraries with various flight options in just a few minutes. We will work out the best flight for you!",
  },
  {
    id: 3,
    card_image: "",
    card_title: "Book your travel with ease",
    card_pera:
      "Select a flight deal and enjoy a secure payment process. Receive e-tickets via email. The customer care team will help you with any questions.",
  },
];

const Work = () => {
  return (
    <div className="work-container container">
      <div className="work-heading">
        <h2>How it works</h2>
      </div>
      <div className="work-card-container grid">
        {workCard.map((work) => {
          return (
            <div key={work.id} className="content-container">
              <div className="work-card-image">
                <img src={work.card_image} alt="" />
              </div>
              <div className="work-card-content">
                <h5>{work.card_title}</h5>
                <p>{work.card_pera}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
