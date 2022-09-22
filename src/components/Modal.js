import ReactModal from 'react-modal';


const MyModal = ({isOpen}) => {
    return (
      <ReactModal isOpen={isOpen} style={{position:"absolute"}}>
        <div>모달 입니다.</div>
      </ReactModal>
    );
  };

  export default MyModal;