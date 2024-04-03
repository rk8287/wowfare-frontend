import React from "react";
import "./Card.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
// import { BsClipboard2Check } from "react-icons/bs";

import img1 from "../../Assets/Images/Athens-ATH-Greece.jpg";
import img2 from "../../Assets/Images/Barcelona-BCN-Spain.jpg";
import img3 from "../../Assets/Images/Lisbon-LIS-Portugal.jpg";
import img4 from "../../Assets/Images/London-LON-United_Kingdom.jpg";
import img5 from "../../Assets/Images/Madrid-MAD-Spain.jpg";
import img6 from "../../Assets/Images/Milan-MIL-Italy.jpg";
import img7 from "../../Assets/Images/Paris_PAR-France.jpg";
import img8 from "../../Assets/Images/Rome-ROM-Italy.jpg";
import img9 from "../../Assets/Images/Venice-VCE-Italy.jpg";
import { Link } from "react-router-dom";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Hawa Mahal",
    location: "Jaiput, Rajasthan",
    grade: "CULTURAL",
    price: "RS. 5000",
    description: `The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.`,
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Ganga Arti",
    location: "Varanasi, Uttar Pardesh",
    grade: "Ganga",
    price: "Rs. 00 ",
    description: `"काशी नगरी में गंगा नदी के तट पर हर शाम गंगा आरती का आयोजन होता है । जिसे देखने के लिये दूर - दूर से शैलानी आते हैं। विश्व प्रसिद्ध गंगा आरती आध्यात्मिक , धार्मिक महत्व के कारण पर्यटकों को बहुत लुभाता है। `,
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Golden Temple",
    location: "Amritsar, Punjab",
    grade: "Editorial",
    price: "Rs. 0 ",
    description: `The Golden Temple is spiritually the most significant shrine in Sikhism. It became a centre of the Singh Sabha Movement between 1883 and 1920s, and the Punjabi Suba movement between 1947 and 1966.`,
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Kailash",
    location: "Kailash, Буранг, Нгари, Китай",
    grade: "Temple",
    price: "Rs. 00 ",
    description: `Kailash - the holiest mountain of Tibet. Object of pilgrimage of buddhist, hindu, jains and adepts of bon religion. Home of the Lord Shiva.`,
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Dal Lake",
    location: "Jammu and Kashmir",
    grade: "Market",
    price: "Rs. Andha Paisa ",
    description: `About Floating Vegetable Market in Srinagar, Kashmir On Dal Lake, the Floating Vegetable Market is a unique site to savour in Srinagar.`,
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "DEvprayaga",
    location: "Devprayaga",
    grade: "Holly Temple",
    price: "Rs. 5000",
    description: `Godly Confluence aka Devprayaga - place where Alaknanda and Bhagirathi rives join to from Ganga`,
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Tea Valley",
    location: "Munnar, Kerala",
    grade: "Tour",
    price: "Rs. 8000",
    description: `Munnar is a town in the Western Ghats mountain range in India’s Kerala state. A hill station and former resort for the British Raj elite, it's surrounded by rolling hills dotted with `,
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Budha Statue",
    location: "Gaya, Bihar",
    grade: "Holly Temple",
    price: "Rs. 4000 ",
    description: `Bodh Gaya is a village in the northeast Indian state of Bihar. Considered one of the most important Buddhist pilgrimage sites, it's dominated by the ancient brick Mahabodhi Temple.`,
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Srirangam",
    location: "Srirangam, Tamil Nadu",
    grade: "Temple",
    price: "Rs. 10000",
    description: `Bordered by the Kaveri River, Srirangam is a city island known for being home to the vast Sri Ranganatha Swamy Temple, one of the largest in India with 81 shrines spanning 63 hectares. `,
  },
];

const Card = () => {
  return (
    <section className="mainSection container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Popular Round-trip Flight Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, price, description }) => {
            return (
              <Link to={"/searchedFlight"}>
                <div data-aos="fade-up" key={id} className="singleDestination">
                  <div className="imgDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className="icon" />
                      <span className="name">{location}</span>
                    </span>

                    <div className="priceSec flex">
                      {/* <div className="grade">
                    <span>
                      {grade}
                      <small>+1</small>
                    </span>
                  </div> */}
                      <div className="price">
                        <h5>{price}</h5>
                      </div>
                    </div>

                    {/* <div className="description">
                  <p>{description}</p>
                </div> */}

                    {/* <button className="btn flex">
                  DETAILS <BsClipboard2Check className="icon" />
                </button> */}
                  </div>
                </div>
              </Link>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Card;
