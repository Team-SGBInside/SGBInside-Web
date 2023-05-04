import React, { useState } from 'react';
import Modal from './components/Modal';
import './GreenModal.css';

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
        <button type="submit" class="button-style" onClick={openModal}>&nbsp;&nbsp;저장하기&nbsp;&nbsp;</button>
      </div>
      <Modal open={modalOpen} close={closeModal}>
        <main> {props.children} </main>저장되었습니다.
      </Modal>
    </React.Fragment>
  );
}

export default GreenModal;