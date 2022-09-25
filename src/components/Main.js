import { Figure, Navbar, Container, Nav, Card,Carousel } from "react-bootstrap";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTicket,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import MovieSlider from "./MovieSlider"
import "../App.css";

function Main() {

  let navStyle = {
    color: "white",
    padding: "20px",
    paddingTop:"50px",
    textAlign:"right",
    fontSize: "30px",
    position:"relative"
  };
  
  return (
    <div className="mainContents">
      <Navbar>
        {/* bg="light" expand="lg" */}
        <Container>
          <Navbar.Brand href="/" id="logo">
            Movie
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              {/* className="me-auto" */}
              <Nav.Link href="https://www.cgv.co.kr/" target={"_blank"} style={navStyle}>
              <FontAwesomeIcon icon={faTicket}/>
              </Nav.Link>
              <Nav.Link href="#link" style={navStyle}>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="mainText1">상영중인 영화 정보</div>

      
          <MovieSlider></MovieSlider>
         
    </div>
  );
}
export default Main;
