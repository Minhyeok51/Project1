import { Routes, Route, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
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
                    {/* <video> 
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></source> 
                    </video> */}
                  </img>
                  </div>
                  </div>
              </div>
            </section>
            <footer className="homeFooter">
              <div className="footerContainer">
                <p className="footerTop">질문이 있으신가요? 문의 전화:  080-001-9587</p>
                <div className="footerItem">
                <ul>
                  <li><a href="https://help.netflix.com/support/412"><span>자주 묻는 질문</span></a></li>
                </ul>
                <ul>
                  <li><a href="https://help.netflix.com"><span>고객 센터</span></a></li>
                </ul>
                <ul>
                  <li><a href="/youraccount"><span>계정</span></a></li>
                </ul>
                <ul>
                  <li><a href="https://help.netflix.com/support/412"><span>미디어 센터</span></a></li>
                </ul>
                <ul>
                  <li><a href="https://help.netflix.com"><span>투자 정보(IR)</span></a></li>
                </ul>
                <ul>
                  <li><a href="/youraccount"><span>입사정보</span></a></li>
                </ul>
                <ul>
                  <li><a href="https://help.netflix.com/support/412"><span>넷플릭스 지원 디바이스</span></a></li>
                </ul>
                <ul>
                  <li><a href="https://help.netflix.com"><span>이용 약관</span></a></li>
                </ul>
                <ul>
                  <li><a href="/youraccount"><span>개인정보</span></a></li>
                </ul>
                <ul>
                  <li><a href="https://help.netflix.com/support/412"><span>쿠키 설정</span></a></li>
                </ul>
                <ul>
                  <li><a href="https://help.netflix.com"><span>회사 정보</span></a></li>
                </ul>
                <ul>
                  <li><a href="/youraccount"><span>문의하기</span></a></li>
                </ul>
                <ul>
                  <li><a href="/youraccount"><span>속도 테스트</span></a></li>
                </ul>
                <ul>
                  <li><a href="https://help.netflix.com/support/412"><span>법적 고지</span></a></li>
                </ul>
                <ul>
                  <li><a href="https://help.netflix.com"><span>오직 넷플릭스에서</span></a></li>
                </ul>
                <div className="footerContainer2">
                <p >넷플릭스 대한민국</p>
                <div >넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587</div>
                <div>대표: 레지널드 숀 톰프슨</div>
                <div>이메일 주소: korea@netflix.com</div>
                <div>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</div>
                <div>사업자등록번호: 165-87-00119</div>
                <div>클라우드 호스팅: Amazon Web Services Inc.</div>
                <div>공정거래위원회 웹사이트</div>
                </div>
                </div>
                
              </div>
            </footer>
            {showButton && <FontAwesomeIcon icon={faCircleUp} className="cicleUp" onClick={scrollTo}/>}
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
