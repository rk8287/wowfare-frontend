import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SearchedFligh from "./Pages/SearchedFlightPage/SearchedFligh";
import Footer from "./Components/FooterSection/Footer";
import Home from "./Pages/HomePage/Home";
import Mytrip from "./Pages/My-Trip/Mytrip";
import { useEffect } from "react";
import { loadUser } from "./Action/userAction";
import store from './store';
import CreateProduct from "./Components/Admin/CreateProduct";
import { useSelector } from "react-redux";



function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);


  useEffect(() => {
    store.dispatch(loadUser());
   
  }, []);
 

  return (
    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/searchedFlight/:id" element={<SearchedFligh />}></Route>
        <Route path="/myTrip" element={<Mytrip />}></Route>
        <Route path="/admin/newProduct" element={isAuthenticated ? <CreateProduct /> : <Navigate to="/account" />}  />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
