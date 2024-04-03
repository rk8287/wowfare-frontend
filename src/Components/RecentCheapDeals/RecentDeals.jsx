import React from "react";
import "./RecentDeals.css";
import { BsCurrencyDollar } from "react-icons/bs";
import flightimage from "../../Assets/Images/00.png";

const cards = [
  {
    id: 1,
    card_title: "Popular",
    flight_logo: flightimage,
    destication: "NYC - ROM",
    class: "Economy,rt,total",
    flight_price: "950",
  },
  {
    id: 2,
    card_title: "Fastest",
    flight_logo: flightimage,
    destication: "NYC - ROM",
    class: "Economy,rt,total",
    flight_price: "950",
  },
  {
    id: 3,
    card_title: "Best Seller",
    flight_logo: flightimage,
    destication: "NYC - ROM",
    class: "Economy,rt,total",
    flight_price: "950",
  },
];

const RecentDeals = () => {
  return (
    <div className="recentDealsSection">
      <div className="recemtDeal-container">
        <div className="heading">
          <h3>Recent Cheap Flight Deals from New York City to Rome</h3>
        </div>
        <div className="recentCards">
          {cards.map((card) => (
            <div key={card.id} className="recentCard">
              <div className="card-contents">
                <div className="card-title">
                  <h5
                    style={
                      card.id === 1
                        ? { color: "orange" }
                        : card.id === 3
                        ? { color: "red" }
                        : { color: "green" }
                    }
                  >
                    {card.card_title}
                  </h5>
                </div>
                <div className="fromAndPrice">
                  <div className="flight-from">
                    <div className="flight-logo">
                      <img src={card.flight_logo} alt="" />
                    </div>
                    <div className="flight-from-to">
                      <div className="flight-cityname">
                        <h4>{card.destication}</h4>
                        <p>{card.class}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flight-price">
                    <BsCurrencyDollar />
                    <strong>{card.flight_price}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentDeals;
