import React from "react";
import Header from "../../HomeComponents/Header/Header";
import Main from "../../HomeComponents/Main/Main";
import Card from "../../HomeComponents/Cards/Card";
import StarSection from "../../Components/StarsSection/StarSection";
import ReviewSection from "../../Components/ReviewsSection/ReviewSection";
import Work from "../../HomeComponents/HowItWork/Work";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <section className="main-section">
        <Main />
      </section>
      <section className="card-section">
        <Card />
      </section>
      <section className="reviewAndStarSection">
        <div className="bothSection">
          {/* <StarSection /> */}
          <ReviewSection />
        </div>
      </section>
      <section className="work-section">
        <Work />
      </section>
    </div>
  );
};

export default Home;
