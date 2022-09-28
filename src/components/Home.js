import { Routes, Route, useNavigate } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import Main from "./Main";
import Login from "./Login";
import { useEffect, useState } from "react";

function Home() {

  const [showButton, setShowButton] = useState(false);
  const scrollTo=()=>{
    window.scrollTo({top:0, behavior:"smooth"})
  }
  useEffect(() => {
    const handleShowButton = () => {
        if (window.scrollY > 300) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }

    window.addEventListener("scroll", handleShowButton)
    return () => {
        window.removeEventListener("scroll", handleShowButton)
    }
}, [])

  let navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
            <header className="homeHeader">
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
            </header>
            <section className="homeContents">
              <div className="item1">
                <div className="itemContainer">
                  <div className="itemText">
                  <h1 className="contentsTitle">TV로 즐기세요.</h1>
                  <h2 className="contentsSubTitle">스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</h2>
                  </div>
                  <div className="itemImg">
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png">
                    {/* <video> */}
                      {/* <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></source> */}
                    {/* </video> */}
                  </img>
                  </div>
                  </div>
              </div>
            </section>
            <footer className="homeFooter"></footer>
            <div>&copy; asdsadsadsad</div>
            </>
          }
        />
        <Route path="/main" element={<Main scrollTo={scrollTo} showButton={showButton}/>}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

    </div>
  );
}

export default Home;
