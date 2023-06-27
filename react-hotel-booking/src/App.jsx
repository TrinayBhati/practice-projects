import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
