import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Spinner,
} from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar bg="none" >
        <Container>
          <Navbar.Brand href="/" id="logo">
            MOVIE
          </Navbar.Brand>
        </Container>
        <img src="img/background.jpg" className="background"></img>
      </Navbar><br/><br/><br/><br/><br/><br/><br/>
      <div className="section" >
        
        <h1>반갑습니다.</h1>
        <h2>
          영화와 시리즈를 <br />
          무제한으로.
        </h2>
        <h3>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</h3>
        <button id="start">시작하기 ></button>
      </div>
    </div>
  );
}

export default App;
