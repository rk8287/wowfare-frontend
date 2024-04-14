import React, { useEffect, useState } from "react";
import "./Card.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Action/productAction";
import { clearErrors } from "../../Action/userAction";



const Card = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 200000]);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);

  const dispatch = useDispatch();
  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);


  const {keyword} = useParams()


  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, error]);

  return (
    <section className="mainSection container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Popular Round-trip Flight Destinations
        </h3>
      </div>

      <div className="secContent grid">
      {products.map((product) => (
  <Link key={product.id} to={`/searchedFlight/${product._id}`}>
    <div data-aos="fade-up" className="singleDestination">
      <div className="imgDiv">
        {product.images && product.images.length > 0 && (
          <img src={product.images[0].url} alt={product.destTitle} />
        )}
      </div>
      <div className="cardInfo">
        <h4 className="destTitle">{product.name}</h4>
        <span className="continent flex">
          <HiOutlineLocationMarker className="icon" />
          <span className="name">{product.location}</span>
        </span>
        <div className="priceSec flex">
          <div className="price">
            <h5> $ {product.price}</h5>
          </div>
        </div>
      </div>
    </div>
  </Link>
))}

      </div>
    </section>
  );
};

export default Card;
