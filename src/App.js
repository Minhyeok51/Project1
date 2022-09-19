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
    <div className="App">
      <Navbar bg="black">
        <Container>
          <Navbar.Brand href="/" id="logo"><h2>Movie</h2></Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
