import React, { useState } from 'react';
import Modal from './Modal';
import changdong from './img/changdong.png'
import tip_button from './img/tip_button.png'
import './ModalDesign.css';

function GreenModal(props) {
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
        <button style={{backgroundColor: '#EAF7DA'}} type="submit" class="button-style" onClick={openModal}>
        <img src={tip_button} alt="tip_button" width="230" height="60"/>
        </button>
      </div>
      <Modal open={modalOpen} close={closeModal}>
        <div className="modal-img"><img src={changdong} alt="changdong" width="80" height="80"/></div>
        <main>{props.children} </main>
        <div className="modal-light">
        <br/>
        자율활동에는 활동결과 자체보다는 <br/>
        너의 활동과정에서 드러나는 <span className="modal-bold">행동 특성, 참여도, 협력도, 활동실적</span> 등을 적는 것이 좋아.<br/> 
        <br/>네가 맡은 실제적인 역할을 적으면 더 좋겠지.<br/>
        <br/>예시) 정규교육과정 또는 학교교육계획에 의해 실시한 학생 상담활동, 자치법정 등<br/>
        <br/>창의적 체험활동상황에 자율탐구활동 학생활동 산출물(소논문 포함)실적<br/> (제목, 연구 주제 및 참여인원, 소요시간)은 기재할 수 없어.
        <br/>
        </div>
      </Modal>
    </React.Fragment>
  );
}

export default GreenModal;