import React, { useEffect, useState } from "react";
import { AiOutlineAppstoreAdd, AiOutlineFileText, AiOutlineDollarCircle, AiOutlineEdit } from 'react-icons/ai';
import { FaLocationDot } from "react-icons/fa6";
import './CreateProduct.css'
import { createProduct } from "../../Action/productAction";
import { useDispatch, useSelector} from "react-redux";
import Loader from "../../Components/../Pages/Loader";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NEW_PRODUCT_RESET } from "../../Constant/productConstant";
import { useNavigate } from "react-router-dom";
import { CLEAR_ERROR } from "../../Constant/userConstant";




const CreateProduct = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState(0);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { loading, error, success } = useSelector((state) => state.newProduct);

  const categories = [
    "New York City",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    
  ];
  


  useEffect(() => {
    if (error) {
        toast.error(error);
      dispatch({type: CLEAR_ERROR});
    }

    if (success) {
        toast.success("Product Created Successfully");
        navigate("/menu");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, error, navigate, success]);
  

  const createProductSubmitHandler = (e) => {
    e.preventDefault();
   
    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("location", location);
    myForm.set("category", category);
   

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createProduct(myForm));

  };
  

  const createProductImagesChange = (e) => {

    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
   
      
      <>
     {loading ? <Loader/> : (

<div className="dashboard">
        
<div className="newProductContainer">
  <form
    className="createProductForm"
    encType="multipart/form-data"
    onSubmit={createProductSubmitHandler}
  >
    <h1>Create Product</h1>

    <div>
      <AiOutlineEdit />
      <input
        type="text"
        placeholder="Country"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div>
      <AiOutlineDollarCircle />
      <input
        type="number"
        placeholder="Price"
        required
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>

    <div>
      <FaLocationDot />
      <input
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      ></input>
    </div>

    <div>
      <AiOutlineAppstoreAdd />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">Choose Category</option>
        {categories.map((cate) => (
          <option key={cate} value={cate}>
            {cate}
          </option>
        ))}
      </select>
    </div>


    <div id="createProductFormFile">
      <input
        type="file"
        name="avatar"
        accept="image/*"
        onChange={createProductImagesChange}
        multiple
      />
    </div>

    <div id="createProductFormImage">
      {imagesPreview.map((image, index) => (
        <img key={index} src={image} alt="Product Preview" />
      ))}
    </div>

    <button
      id="createProductBtn"
      type="submit"
    >
      Create
    </button>
  </form>
</div>
</div>
     )}
      </>
    
  );
};

export default CreateProduct;


