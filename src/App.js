import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Contents from "./components/Contents";

function App() {
  
  let [showMore, setShowMore] = useState(true);

  return (
    <div>
      {showMore == true ? <Home setShowMore={setShowMore} />: <Contents/>}
    </div>
  );
}

export default App;
