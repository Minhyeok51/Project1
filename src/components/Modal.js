import { createPortal } from "react-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons"

const Dimmend = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: rgba(0, 0, 0, 0.8);
  z-index:50;
`;

const ModalContainer = styled.div`
  width: 600px;
  height : 800px;
  padding: 8px;
  color:white;
  border-radius: 8px;
  background: #111;
  // box-shadow: 100px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-align: left;
  cursor: default;

  & > .icon {
    width: 15px;
    padding: 7px;
    color:white;
    border: 1px solid white;
    outline: none;
    cursor: pointer;
    // background-color: rgba(0,0,0,.75);
    border-radius: 30px;
    position:fixed;
    z-index:10;
  }
`;

export const ModalChild = ({ overview,imgPath,title, onOk ,date}) => {
  return (
    <Dimmend>
      <ModalContainer>
        <FontAwesomeIcon className="icon" icon={faXmark} onClick={onOk} />
        <img style={{position:"relative", textAlign:"center", verticalAlign:"middle",focus:"color:red"}} width={580} height={400} src={"https://image.tmdb.org/t/p/original" + imgPath }/>
        <h3>{title}</h3>
        <p>{overview}</p>
        <p>개봉일:{date}일</p>
      </ModalContainer>
    </Dimmend>
  );
};

const Modal = ({ children }) =>
  createPortal(children, document.querySelector("#modal"));

export default Modal;
