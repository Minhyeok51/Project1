import { Figure, Navbar, Container, Nav, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
function Contents() {
  let navStyle = {
    color: "white",
    zIndex: "10",
    paddingTop: "20px",
  };
  let [movies, setMovies] = useState([
    {id: "001",urlPath: "img/movie_image1.jpg"},
    {id: "002",urlPath: "img/movie_image2.jpg"},
    {id: "003",urlPath: "img/movie_image3.jpg"},
    {id: "004",urlPath: "img/movie_image4.jpg"},
    {id: "005",urlPath: "img/movie_image5.jpg"},
    {id: "006",urlPath: "img/movie_image6.jpg"},
    {id: "007",urlPath: "img/movie_image7.jpg"},
    {id: "008",urlPath: "img/movie_image8.jpg"},
    {id: "009",urlPath: "img/movie_image9.jpg"},
    {id: "010",urlPath: "img/movie_image10.jpg"},
    {id: "011",urlPath: "img/movie_image11.jpg"},
    {id: "012",urlPath: "img/movie_image12.jpg"},
  ]);

  return (
    <div className="contents">
      <Navbar>
        {/* bg="light" expand="lg" */}
        <Container>
          <Navbar.Brand href="/" id="logo">
            Movie
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              {/* className="me-auto" */}
              <Nav.Link href="#home" style={navStyle}>
                Home
              </Nav.Link>
              <Nav.Link href="#link" style={navStyle}>
                Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="content_i">현재 상영중인 영화 정보</div>
      <Figure className="content_i">
        {movies.map((data, i) => {
          return (
            <Figure.Image
              className="content_i"
              width={171}
              height={180}
              src={movies[i].urlPath}
              id={movies[i].id}
            />
          );
        })}
      </Figure>
    </div>
  );
}

export default Contents;
