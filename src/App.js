import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchedFligh from "./Pages/SearchedFlightPage/SearchedFligh";
import Footer from "./Components/FooterSection/Footer";
import Home from "./Pages/HomePage/Home";
import Mytrip from "./Pages/My-Trip/Mytrip";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/searchedFlight" element={<SearchedFligh />}></Route>
        <Route path="/myTrip" element={<Mytrip />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
