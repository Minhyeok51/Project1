import { Routes, Route, useNavigate } from "react-router-dom";
import { Navbar, Container, Figure } from "react-bootstrap";
import Main from "./Main";
import Login from "./Login";
import { useState } from "react";
import Modal, { ModalChild } from "./Modal";
function Home() {
  let navigate = useNavigate();

  const [show, setShow] = useState(false);
  const onOk = () => setShow(false);
  const onClick = () => setShow(true);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
            <div className="homeHeader">
              <div>
                <Navbar bg="none">
                  <Container>
                    <Navbar.Brand href="/" id="logo">
                      NETFLIX
                    </Navbar.Brand>
                    <button
                      className="login"
                      onClick={() => {
                        navigate("/login");
                      }}
                      // handleClick

                      // console.log(modal)
                      // modal == true? <Modal/> : <Home/>
                    >
                      로그인
                    </button>
                  </Container>
                </Navbar>
              </div>
              <div className="homeText">
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
                  둘러보기
                </button>
              </div>
              
            </div>
            <div className="homeContents">gi</div>
            <footer className="homeFooter"></footer>
            <div>&copy; asdsadsadsad</div>
            </>
          }
        />
        <Route path="/main" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

      {/* 이거 여기에 없음 모달창 안열림 */}
    </div>
  );
}

export default Home;
