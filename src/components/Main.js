import {
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import MovieSlider from "./MovieSlider";
import "../App.css";

function Main() {
  let navStyle = {
    color: "white",
    padding: "20px",
    paddingTop: "50px",
    textAlign: "right",
    fontSize: "30px",
    position: "relative",
  };

  return (
    <div className="mainContents">
              <Navbar>
                {/* bg="light" expand="lg" */}
                <Container>
                  <Navbar.Brand href="/" id="logo">
                    NETFLIX
                  </Navbar.Brand>
                  {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                      {/* className="me-auto" */}
                      <Nav.Link
                        href="https://www.cgv.co.kr/"
                        target={"_blank"}
                        style={navStyle}
                      >
                        <FontAwesomeIcon icon={faTicket} />
                      </Nav.Link>
                      <Nav.Link href="#link" style={navStyle}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
 
              <div className="mainText1">액션</div>
              <MovieSlider genre_id='28'></MovieSlider>
              <div className="mainText1">모험</div>
              <MovieSlider genre_id='12'></MovieSlider>
              <div className="mainText1">코미디</div>
              <MovieSlider genre_id='35'></MovieSlider>
              <div className="mainText1">범죄</div>
              <MovieSlider genre_id='80'></MovieSlider>
              <div className="mainText1">공포</div>
              <MovieSlider genre_id='27'></MovieSlider>
              <div className="mainText1">스릴러</div>
              <MovieSlider genre_id='53'></MovieSlider>
              <div className="mainText1">SF</div>
              <MovieSlider genre_id='878'></MovieSlider>
              <div className="mainText1">드라마</div>
              <MovieSlider genre_id='18'></MovieSlider>
    </div>
  );
}
export default Main;
