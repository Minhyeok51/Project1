import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTicket,
  faMagnifyingGlass,
  faCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import MovieSlider from "./MovieSlider";
import "../App.css";
import {
  action,
  adventure,
  comedy,
  crime,
  horror,
  thriller,
  sf,
  drama,
  fantasy,
  mystery,
  war,
  family,
} from "./scrollfunc";

function Main({ scrollTo, showButton }) {
  let navStyle = {
    color: "white",
    padding: "20px",
    paddingTop: "20px",
    textAlign: "right",
    fontSize: "40px",
    position: "relative",
  };

  return (
    <div className="mainContents">
      <Navbar variant="dark" expand="lg" className="mainNavbar">
        <Container>
          <Navbar.Brand href="/" id="logo">
            NETFLIX
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="영화"
                menuVariant="dark"
                style={{
                  paddingLeft: "10px",
                  fontSize: "20px",
                  marginTop: "20px",
                }}
              >
                <NavDropdown.Item onClick={action}>액션</NavDropdown.Item>
                <NavDropdown.Item onClick={adventure}>모험</NavDropdown.Item>
                <NavDropdown.Item onClick={comedy}>코미디</NavDropdown.Item>
                <NavDropdown.Item onClick={crime}>범죄</NavDropdown.Item>
                <NavDropdown.Item onClick={horror}>공포</NavDropdown.Item>
                <NavDropdown.Item onClick={thriller}>스릴러</NavDropdown.Item>
                <NavDropdown.Item onClick={sf}>SF</NavDropdown.Item>
                <NavDropdown.Item onClick={drama}>드라마</NavDropdown.Item>
                <NavDropdown.Item onClick={family}>가족</NavDropdown.Item>
                <NavDropdown.Item onClick={fantasy}>판타지</NavDropdown.Item>
                <NavDropdown.Item onClick={mystery}>미스터리</NavDropdown.Item>
                <NavDropdown.Item onClick={war}>전쟁</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <div>
            <FontAwesomeIcon
              icon={faTicket}
              href="https://www.cgv.co.kr/"
              target={"_blank"}
              style={navStyle}
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} style={navStyle} />
          </div>
        </Container>
      </Navbar>

      <div className="mainText1">액션</div>
      <MovieSlider genre_id="28"></MovieSlider>
      <div className="mainText1">모험</div>
      <MovieSlider genre_id="12"></MovieSlider>
      <div className="mainText1">코미디</div>
      <MovieSlider genre_id="35"></MovieSlider>
      <div className="mainText1">범죄</div>
      <MovieSlider genre_id="80"></MovieSlider>
      <div className="mainText1">공포</div>
      <MovieSlider genre_id="27"></MovieSlider>
      <div className="mainText1">스릴러</div>
      <MovieSlider genre_id="53"></MovieSlider>
      <div className="mainText1">SF</div>
      <MovieSlider genre_id="878"></MovieSlider>
      <div className="mainText1">드라마</div>
      <MovieSlider genre_id="18"></MovieSlider>
      <div className="mainText1">가족</div>
      <MovieSlider genre_id="10751"></MovieSlider>
      <div className="mainText1">판타지</div>
      <MovieSlider genre_id="14"></MovieSlider>
      <div className="mainText1">미스터리</div>
      <MovieSlider genre_id="9648"></MovieSlider>
      <div className="mainText1">전쟁</div>
      <MovieSlider genre_id="10752"></MovieSlider>
      {showButton && (
        <FontAwesomeIcon
          icon={faCircleUp}
          className="cicleUp"
          onClick={scrollTo}
        />
      )}
    </div>
  );
}
export default Main;
