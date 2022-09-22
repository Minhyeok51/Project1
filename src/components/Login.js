import "./login.css";
import { Navbar, Container, Figure } from "react-bootstrap";
import { useState } from "react";


function Login() {

    let [Id,SetId] = useState("")
    let [Pw,SetPw] = useState("")

  return (
    <div className="loginBody">
      <Navbar bg="none">
        <Container>
          <Navbar.Brand href="/" id="logo">
            Movie
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="loginContainer">
        <div className="loginFormMain">
          <h1 className="loginText">로그인</h1>
          <form>
            <input
              className="inputs"
              type="email"
              placeholder="이메일 주소 또는 전화번호"
              onChange={(e)=>{
                SetId(e.target.value)
                console.log(e)
                
                }}
            ></input>
            <div>아이디를 입려미;ㅏㄴ어리;ㅁ카ㅓ</div>
            <input
              className="inputs"
              type="password"
              placeholder="비밀번호"
              id="password"
              onChange={(e)=>{
                SetPw(e.target.value)
                console.log(e.target.value)
              }}
            ></input>
            <br />
            <div>sd</div>
            <button
              className="loginbtn"
              onClick={(e) => {
                console.log(e)
                e.preventDefault();
              }}
            >
              로그인
            </button>
          </form>
          <span>
            <input type="checkbox" id="check1"></input>
            <label htmlFor="check1"></label>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
