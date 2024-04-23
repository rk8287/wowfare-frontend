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
import Success from "./Pages/My-Trip/SuccessPage/Success";
import Profile from "./Pages/Profile/Profile";
import UpdateProfile from "./Pages/UpdateProfile/UpdateProfile";
import UpdatePassword from "./Pages/UpdatePassword/UpdatePassword";
import List from "./Pages/List/List";



function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);


  useEffect(() => {
    store.dispatch(loadUser());
   
  }, []);
 

  return (
    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/flights" element={<List />}></Route>
        <Route path="/searchedFlight/:id" element={<SearchedFligh />}></Route>
        <Route path="/myTrip" element={<Mytrip />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/account" element={isAuthenticated ? <Profile />:<Navigate to="/" /> }></Route>
        <Route path="/admin/newProduct" element={isAuthenticated ? <CreateProduct /> : <Navigate to="/account" />}  />

        <Route path="/me/update" element={isAuthenticated ? <UpdateProfile /> : <Navigate to="/" />} />
        <Route path="/password/update" element={isAuthenticated ? <UpdatePassword /> : <Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
