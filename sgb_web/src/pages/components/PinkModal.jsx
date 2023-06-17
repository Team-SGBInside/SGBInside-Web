import React, { useState } from 'react';
import Modal from './Modal';
import awardy from './img/awardy.png'
import tip_button from './img/tip_button.png';
import './ModalDesign.css';

function PinkModal(props) {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <div class="button-position">
        <button style={{backgroundColor: '#FDE2E6'}} class="button-style" onClick={openModal}>
        <img src={tip_button} alt="tip_button" width="230" height="60"/>
        </button> 
      </div>
      <Modal open={modalOpen} close={closeModal}>
        <div class="modal-img"><img src={awardy} alt="awardy" width="80" height="80"/></div>
        <main>{props.children} </main>
        <div className="modal-light">
          수상경력에는 무슨내용을 적을까?<br/>
          <br/><span className="modal-bold">교내상만을 기재하며, 수상 사실은 수상경력 영역 이외에는 어떠한 항목에도 입력하지 않아.</span><br/>
          <br/>수상경력은 다음과 같이 세가지로 구분되고, 입력 방식은 아래 형식을 따르게 돼.<br/>
          &nbsp;·교과우수상(수상과목)<br/>
          &nbsp;·표창장(부문)<br/>
          &nbsp;·대회(참가부문) - 참가부문이 있는 경우만 입력<br/>
        </div> 
      </Modal>
    </React.Fragment>
  );
}

export default PinkModal;