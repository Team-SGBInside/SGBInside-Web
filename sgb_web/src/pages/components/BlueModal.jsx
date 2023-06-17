import React, { useState } from 'react';
import Modal from './Modal';
import dadok from './img/dadok.png'
import tip_button from './img/tip_button.png';
import './ModalDesign.css';

function BlueModal(props) {
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
        <button style={{backgroundColor: '#EEF2EB'}} class="button-style" onClick={openModal}>
        <img src={tip_button} alt="tip_button" width="230" height="60"/>
        </button> 
      </div>
      <Modal open={modalOpen} close={closeModal}>
        <div class="modal-img"><img src={dadok} alt="dadok" width="80" height="80"/></div>
        <main>{props.children} </main>
        <div class="modal-light">
          <br/><br/>
          독서활동상황에는 ISBN에 등재한 도서에 한해 기재가 가능해.<br/>
          반면, 정기간행물 즉 ISSN에 등재된 도서는 기재할 수 없으니 주의해야해!<br/>
          <br/>
          <span className="modal-bold">2024학년도 대입부터는 독서활동상황이 생활기록부 상에서 사라져.</span> <br/>
          하지만 세부능력 특기사항과 진로 활동 등에 함께 연관지어 기록할 수 있으니 꼼꼼히 기록해두도록 하자.
        </div> 
      </Modal>
    </React.Fragment>
  );
}

export default BlueModal;