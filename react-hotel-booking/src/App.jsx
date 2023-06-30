import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import Login from "./containers/Login";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HotelDetails from "./containers/HotelDetails";
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hotel-details/:slug" element={<HotelDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
