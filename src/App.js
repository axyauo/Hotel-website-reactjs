import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Body from "./Components/Body/Body";
import ArchieRegency from "./Components/Hotels/ArchieRegency/ArchieRegency";
import RadissonBlue from "./Components/Hotels/RadissonBlue/RadissonBlue";
import Candisol from "./Components/Hotels/Candisol/Candisol";
import Login from "./Components/Body/Login/Login";
import CreateAccount from "./Components/Body/CreateAccount/CreateAccount";
import BookingHotel from "./Components/Body/BookingHotel/BookingHotel";
import ScrollToTop from "./Components/Body/ScrollToTop/ScrollToTop";
import TheHungryBirds from "./Components/Hotels/TheHungryBirds/TheHungryBirds";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/ArchieRegency" element={<ArchieRegency />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/BookingHotel" element={<BookingHotel />} />
        <Route path="/RadissonBlue" element={<RadissonBlue />} />
        <Route path="/Candisol" element={<Candisol />} />
        <Route path="/TheHungryBirds" element={<TheHungryBirds />} />
      </Routes>
    </div>
  );
}

export default App;
