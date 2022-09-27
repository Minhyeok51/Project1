import "./login.css";
import { Navbar, Container, Figure } from "react-bootstrap";
import { useEffect, useState ,useRef} from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate()
    const idRef = useRef();
    const pwRef = useRef();
    useEffect(()=>{
      setTimeout(()=>idRef.current.focus(),0)
      return(()=>{
        clearTimeout()
      })
    },[])
    
    let [id,SetId] = useState('')
    let [pw,SetPw] = useState('')

    const onChange=((e)=>{
      const {target:{value,name}}=e;
      if(name==="id"){
        SetId(value)
      }else if(name==="pw"){
        SetPw(value)
      }
    })
    const onSubmit = (e)=>{
      e.preventDefault();
      SetId("")
      SetPw("")
      navigate("/main")

    }
  return (
    <div className="loginBody">
      <Navbar bg="none">
        <Container>
          <Navbar.Brand href="/" id="logo">
            NETFLIX
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="loginContainer">
        <div className="loginFormMain">
          <h1 className="loginText">로그인</h1>
          <form onSubmit={onSubmit}>
            <input
              ref={idRef}
              name="id"
              className="inputs"
              type="email"
              value={id}
              placeholder="이메일 주소 또는 전화번호"
              onChange={onChange}
            ></input>
            <div>아이디를 입려미;ㅏㄴ어리;ㅁ카ㅓ</div>
            <input
              ref={pwRef}
              name="pw"
              className="inputs"
              type="password"
              placeholder="비밀번호"
              value={pw}
              onChange={onChange}
            ></input>
            <br />
            <div>sd</div>
            <input type="submit" className="loginInput" value="로그인"/>
          </form>
          <span>
            <input type="checkbox" id="check1"></input>
            <label htmlFor="check1"></label>
            <span className="loginInfoSave">로그인 정보 저장</span>
            <a style={{textDecoration:"none", fontSize:"14px" , color:"#b3b3b3"}} href="https://www.netflix.com/kr/LoginHelp">도움이 필요하신가요?</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
