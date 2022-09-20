import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

app.js
import { Routes, Route,  useNavigate } from "react-router-dom";
import {
  Navbar,
  Container,
  Figure

} from "react-bootstrap";
import Contents from "./Contents";

function Home({setShowMore}){
    let navigate = useNavigate();
    return(
      <div className="header">
      <div>
        {/* <img src="img/background.jpg" className="background"></img> 
            background-image를 사용해야 linear-gradient먹힌다*/}
        <Navbar bg="none">
          <Container>
            <Navbar.Brand href="/" id="logo">
              MOVIE
            </Navbar.Brand>
            <button className="login">로그인</button>
          </Container>
        </Navbar>
        </div>
        <div className="section" >
          <h1>반갑습니다.</h1>
          <h2>
            영화와 시리즈를 <br />
            무제한으로.
          </h2>
          <h3>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</h3>
          <button className="btn" onClick={()=>{
            setShowMore(false)
            navigate("/main")
          }}>둘러보기 ></button>
        </div>
        <Routes>
          <Route path="/main" element={<Contents/>}></Route>
        </Routes>
        </div>
    )
  }

  export default Home;
  



Contents.js
  import { Figure,Navbar,Container,Nav } from "react-bootstrap";

function Contents(){
  let navStyle={
    color:"white"
  }
    return(
      <div className="contents">
        <Navbar bg="none">
          <Container>
            <Navbar.Brand href="/" id="logo">
              MOVIE
            </Navbar.Brand>
            <Nav
      // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      
      <Nav.Item>
        <Nav.Link style={navStyle} eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={navStyle} eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={navStyle} eventKey="disabled" disabled>Disabled</Nav.Link>
      </Nav.Item>
    </Nav>
          </Container>
        </Navbar>
        <div className="content_i">현재 상영중인 영화 정보</div>
        <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="holder.js/171x180"
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
      </div>
    )
  }

  export default Contents;