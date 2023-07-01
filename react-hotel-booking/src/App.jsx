import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import Login from "./containers/Login";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HotelDetails from "./containers/HotelDetails";
import Layout from "./containers/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/hotel-details/:slug"
            element={
              <Layout>
                <HotelDetails />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
