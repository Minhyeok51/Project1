import { Routes, Route, useNavigate } from "react-router-dom";
import { Navbar, Container, Figure } from "react-bootstrap";
import Main from "./Main";

function Home() {
  let navigate = useNavigate();
  return (
    <div className="header">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div>
                {/* <img src="img/background.jpg" className="background"></img> 
            background-image를 사용해야 linear-gradient먹힌다*/}
                <Navbar bg="none">
                  <Container>
                    <Navbar.Brand href="/" id="logo">
                      Movie
                    </Navbar.Brand>
                    <button className="login">로그인</button>
                  </Container>
                </Navbar>
              </div>
              <div className="section">
                <h1>반갑습니다.</h1>
                <h2>
                  영화와 시리즈를 <br />
                  무제한으로.
                </h2>
                <h3>
                  다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
                </h3>
                <button
                  className="btn"
                  onClick={() => {
                    
                    navigate("/main");
                  }}
                >
                  둘러보기 >
                </button>
              </div>
            </div>
          }
        />
        <Route path="/main" element={<Main/>}></Route>
      </Routes>
    </div>
  );
}

export default Home;
