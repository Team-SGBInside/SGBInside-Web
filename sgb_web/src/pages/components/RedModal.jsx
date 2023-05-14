import React, { useState } from 'react';
import Modal from './Modal';
import './RedModal.css';
import teukteuk from './img/teukteuk.png'
import red_save from './img/red_save.png'

function RedModal(props) {
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
        <button style={{backgroundColor: '#FCE7DE'}} type="submit" class="button-style" onClick={openModal}>
        <img src={red_save} alt="red_save" width="230" height="60"/>
        </button> 
      </div>
      <Modal open={modalOpen} close={closeModal}>
        <div class="modal-img"><img src={teukteuk} alt="teukteuk" width="80" height="80"/></div>
        <main>{props.children} </main>
        <div class="modal-bold">저장 완료!</div><br/>
        <div class="modal-light">저장한 내용은 마이페이지에서 확인 할 수 있어!<br/>앞으로도 이렇게 제때제때 기록하는 습관을 들여보자 :) </div> 
        <div class="modal-red">*입력되지 않은 필수 폼이 있을 시, 내용이 저장되지 않습니다.</div>
      </Modal>
    </React.Fragment>
  );
}

export default RedModal;