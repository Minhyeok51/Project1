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
    <>
      <div className="homeHeader">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div>
                  <Navbar bg="none">
                    <Container>
                      <Navbar.Brand href="/" id="logo">
                        Movie
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
                <div className="homeSection">
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
            }
          />
          <Route path="/main" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
      <div className="homeFooter">
        &copy; asdsadsadsad
        <button onClick={onClick}>버튼을 클릭해보세요</button>
        {show && (
          <Modal>
            <ModalChild
              title="안내"
              description="모달은 이렇게 띄울 거예요"
              onOk={onOk}
            />
          </Modal>
        )}
      </div>
      <div id="modal"></div>
    </>
  );
}

export default Home;
