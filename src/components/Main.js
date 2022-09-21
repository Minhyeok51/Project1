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
  // let [movies, setMovies] = useState([
  //   {id: "001",urlPath: "img/movie_image1.jpg"},
  //   {id: "002",urlPath: "img/movie_image2.jpg"},
  //   {id: "003",urlPath: "img/movie_image3.jpg"},
  //   {id: "004",urlPath: "img/movie_image4.jpg"},
  //   {id: "005",urlPath: "img/movie_image5.jpg"},
  //   {id: "006",urlPath: "img/movie_image6.jpg"},
  //   {id: "007",urlPath: "img/movie_image7.jpg"},
  //   {id: "008",urlPath: "img/movie_image8.jpg"},
  //   {id: "009",urlPath: "img/movie_image9.jpg"},
  //   {id: "010",urlPath: "img/movie_image10.jpg"},
  //   {id: "011",urlPath: "img/movie_image11.jpg"},
  //   {id: "012",urlPath: "img/movie_image12.jpg"},
  // ]);
  return (
    <div className="contents">
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
      <div className="content_i">현재 상영중인 영화 정보</div>

      {/* <Figure className="content_i">
        {movies.map((data, i) => {
          return (
            <Figure.Image
              className="content_i"
              width={171}
              height={180}
              src={movies[i].urlPath}
              alt="movie"
              id={movies[i].id}
            />
          )})}
          </Figure>  */}
          <MovieSlider></MovieSlider>
         
    </div>
  );
}
//맵으로 그려주는 부분을 컴포넌트화 해서 React-slick이용하여 슬라이드 형태로 만들기
export default Main;
