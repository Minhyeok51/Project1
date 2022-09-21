import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import MovieSlider from "./components/MovieSlider"

function App() {
  

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
