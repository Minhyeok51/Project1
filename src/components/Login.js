import "./login.css";
import { Navbar, Container, Figure } from "react-bootstrap";
import { useEffect, useState ,useRef} from "react";


function Login() {
    const idRef = useRef();
    const pwRef = useRef();
    useEffect(()=>{
      setTimeout(()=>idRef.current.focus(),0)
      return(()=>{
        clearTimeout()
      })
    },[])
    
    let [Id,SetId] = useState('')
    let [Pw,SetPw] = useState('')

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
              ref={idRef}
              className="inputs"
              type="email"
              placeholder="이메일 주소 또는 전화번호"
              onChange={(e)=>{
                SetId(e.target.value)
                console.log(e.target.value)
                
                }}
            ></input>
            <div>아이디를 입려미;ㅏㄴ어리;ㅁ카ㅓ</div>
            <input
              ref={pwRef}
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
            <input type="submit" className="loginInput" value="로그인"/>
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
