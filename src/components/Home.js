import { Routes, Route, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Container } from "react-bootstrap";
import Main from "./Main";
import Login from "./Login";
import { useEffect, useState } from "react";

function Home() {
  const [showButton, setShowButton] = useState(false);
  const scrollTo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

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
              <section className="homeSection">
                <div className="item1">
                  <div className="itemContainer">
                    <div className="itemText">
                      <h1 className="contentsTitle">TV로 즐기세요.</h1>
                      <h2 className="contentsSubTitle">
                        스마트 TV, PlayStation, Xbox, Chromecast, Apple TV,
                        블루레이 플레이어 등 다양한 디바이스에서 시청하세요.
                      </h2>
                    </div>
                    <div className="itemCard1">
                      <div className="itemImg">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
                      </div>
                      <div className="introVideo1">
                        <video
                          muted="muted"
                          autoPlay="autoPlay"
                          loop="loop"
                          style={{ width: "100%" }}
                        >
                          <source
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                            type="video/mp4"
                          ></source>
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item2">
                  <div className="itemContainer">
                    <div className="itemImg">
                      <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
                    </div>
                    <div className="itemText2">
                      <h1 className="contentsTitle">
                        즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.
                      </h1>
                      <h2 className="contentsSubTitle">
                        간편하게 저장하고 빈틈없이 즐겨보세요.
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="item1">
                  <div className="itemContainer">
                    <div className="itemText">
                      <h1 className="contentsTitle">
                        다양한 디바이스에서 시청하세요.
                      </h1>
                      <h2 className="contentsSubTitle">
                        각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서
                        무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.
                      </h2>
                    </div>
                    <div className="itemCard2">
                      <div className="itemImg">
                        <img
                          alt="img3"
                          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                        />
                      </div>
                      <div className="introVideo2">
                        <video
                          muted="muted"
                          autoPlay="autoPlay"
                          loop="loop"
                          style={{ width: "100%" }}
                        >
                          <source
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                            type="video/mp4"
                          ></source>
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <footer className="homeFooter">
                <div className="footerContainer">
                  <p className="footerTop">
                    질문이 있으신가요? 문의 전화: 080-001-9587
                  </p>
                  <div className="footerItem">
                    <ul>
                      <li>
                        <a href="https://help.netflix.com/support/412">
                          <span>자주 묻는 질문</span>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="https://help.netflix.com">
                          <span>고객 센터</span>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="/youraccount">
                          <span>계정</span>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="https://help.netflix.com/support/412">
                          <span>미디어 센터</span>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="https://help.netflix.com">
                          <span>투자 정보(IR)</span>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="/youraccount">
                          <span>입사정보</span>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="https://help.netflix.com/support/412">
                          <span>넷플릭스 지원 디바이스</span>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="https://help.netflix.com">
                          <span>이용 약관</span>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="/youraccount">
                          <span>개인정보</span>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="https://help.netflix.com/support/412">
                          <span>쿠키 설정</span>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="https://help.netflix.com">
                          <span>회사 정보</span>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="/youraccount">
                          <span>문의하기</span>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="/youraccount">
                          <span>속도 테스트</span>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="https://help.netflix.com/support/412">
                          <span>법적 고지</span>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="https://help.netflix.com">
                          <span>오직 넷플릭스에서</span>
                        </a>
                      </li>
                    </ul>
                    <div className="footerContainer2">
                      <p>넷플릭스 대한민국</p>
                      <div>
                        넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
                        제2018-서울종로-0426호 전화번호: 080-001-9587
                      </div>
                      <div>대표: 레지널드 숀 톰프슨</div>
                      <div>이메일 주소: korea@netflix.com</div>
                      <div>
                        주소: 대한민국 서울특별시 종로구 우정국로 26,
                        센트로폴리스 A동 20층 우편번호 03161
                      </div>
                      <div>사업자등록번호: 165-87-00119</div>
                      <div>클라우드 호스팅: Amazon Web Services Inc.</div>
                      <div>공정거래위원회 웹사이트</div>
                    </div>
                  </div>
                </div>
              </footer>
              {showButton && (
                <FontAwesomeIcon
                  icon={faCircleUp}
                  className="cicleUp"
                  onClick={scrollTo}
                />
              )}
            </>
          }
        />
        <Route
          path="/main"
          element={<Main scrollTo={scrollTo} showButton={showButton} />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default Home;
