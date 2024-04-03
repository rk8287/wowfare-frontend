import React from "react";
import "./ReviewSection.css";
import user1 from "../../Assets/Images/user-1.png";
import user2 from "../../Assets/Images/user-2.png";
import user3 from "../../Assets/Images/user-3.png";
import user4 from "../../Assets/Images/user-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: user1,
    stars: 5,
    review:
      "I received a call in less than a minute from when I searched for my flight. Stewart was very friendly and helpful and listened to my flight requirements. I received such a great price as my own search resulted in hundreds more. I will be using Stewart’s services in the future. Thanks for making things easy.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: user2,
    stars: 4,
    review:
      "I received a call in less than a minute from when I searched for my flight. Stewart was very friendly and helpful and listened to my flight requirements. I received such a great price as my own search resulted in hundreds more. I will be using Stewart’s services in the future. Thanks for making things easy.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    image: user3,
    stars: 3,
    review:
      "I received a call in less than a minute from when I searched for my flight. Stewart was very friendly and helpful and listened to my flight requirements. I received such a great price as my own search resulted in hundreds more. I will be using Stewart’s services in the future. Thanks for making things easy.",
  },
  {
    id: 4,
    name: "Bob Williams",
    image: user4,
    stars: 4,
    review:
      "I received a call in less than a minute from when I searched for my flight. Stewart was very friendly and helpful and listened to my flight requirements. I received such a great price as my own search resulted in hundreds more. I will be using Stewart’s services in the future. Thanks for making things easy.",
  },
  // Add more testimonials as needed
];

const ReviewSection = () => {
  return (
    <div className="reviewSection-container">
      <h2 style={{marginBlock: "2rem"}}>Reviews</h2>
      <div className="carousel-container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          breakpoints={{
            800: {
              slidesPerView: 2,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide>
              <div key={testimonial.id} className="carousel-group">
                <div className="upper-carousel-content">
                  <div className="reviewerImage">
                    <img
                      src={testimonial.image}
                      alt=""
                      width={50}
                      height={50}
                      className="rounded"
                    />
                  </div>
                  <div className="nameAndStart">
                    <div className="reviewerName">{testimonial.name}</div>
                    <div className="stars">
                      {[...Array(testimonial.stars)].map((_, index) => (
                        <span key={index} className="star">
                          &#9733;
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lower-carousel-content">
                  <p>{testimonial.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSection;
