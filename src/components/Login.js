import "./login.css";
import { Navbar, Container, Figure } from "react-bootstrap";
import { useEffect, useState ,useRef} from "react";
import { useNavigate } from "react-router-dom";
import { authService,firebaseInstance } from "fbase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  let navigate = useNavigate()
  
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } 
    await authService.signInWithPopup(provider);
  };

    const idRef = useRef();
    //자동으로 id창 포커스
    useEffect(()=>{
      setTimeout(()=>idRef.current.focus(),0)
      return(()=>{
        clearTimeout()
      })
    },[])
    
    const onChange = (event) => {
      // console.log(event.target.name);
      const {
        target: { name, value },
      } = event;
      console.log(name);
      console.log(value);
      if (name === "email") {
        setEmail(value);
      } else if (name === "password") {
        setPassword(value);
      }
    };
    const onSubmit = async (event) => {
      event.preventDefault();
      try {
        let data;
        if (newAccount) {
          // creat account
          data = await authService.createUserWithEmailAndPassword(
            email,
            password
          );
        } else {
          // login
          data = await authService.signInWithEmailAndPassword(email, password);
        }
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
      navigate('/main')
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);


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
              // ref={idRef}
              name="email"
              className="inputs"
              type="email"
              value={email}
              placeholder="이메일 주소 또는 전화번호"
              onChange={onChange}
            ></input>
            <div></div>
            <input
              name="password"
              className="inputs"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={onChange}
            ></input>
            <br />
            {/* <div>sd</div> */}
            <input type="submit" className="loginInput" value="로그인"/>
          </form>
          <button name="google" onClick={onSocialClick} className="loginGoogle">
          구글 로그인<FontAwesomeIcon icon={faGoogle} />
        </button>
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
