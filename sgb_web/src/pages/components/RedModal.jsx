import React, { useState } from 'react';
import Modal from './Modal';
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
        <div className="modal-img"><img src={teukteuk} alt="teukteuk" width="80" height="80"/></div>
        <main>{props.children} </main>
        <div className="modal-light">
          <br/>
          우리가 흔히 ‘세특’ 이라 부르는 ‘교과별 세부능력 및 특기사항’은 교과 성적에서 나아가
          <span className="modal-bold">각 과목별로 학생 개개인의 특성을 보다 구체적으로 기술하는 영역</span>이야.<br/> 
          표준 가이드라인에 따르면, <span className="modal-bold">교과별로 학습성취 수준, 너의 학습활동 참여도,
          자기주도적 학습에 의한 변화와 성장 정도</span>를 중심으로 작성하는 것이 좋아.<br/>
          <br/>
          ex) 수업 시간에 배운 내용에서 더 나아가 스스로 어떤 주제를 탐구하고 연구한 과정<br/>
          <br/>
          수업에서 이루어진 활동을 단순히 나열하거나, 과목별 수업을 통해 얻은 일차적인 지식을
          단순히 서술하는 것은 지양하는 것이 좋아.<br/>
          아래는 세부능력특기사항에 들어가서는 안되는 내용이야.
          <span className="modal-bold">많이들 혼동하는 내용은 굵게 표시</span>가 되어있으니 특히 더 주의하자!<br/>
          <br/>
          · 교내대회 참여사실과 그 성적 및 수상실적<br/>
          · 각종 공인어학시험 참여 사실과 그 성적 및 수상 실적<br/>
          · 교과･비교과 관련 교외대회 참여 사실과 그 성적 및 수상 실적<br/>
          (학교장의 참가 허락을 받아 참여한 각종 교외대회에서의 수상실적도 기재 불가)<br/>
          · 교외 기관･단체(장)등에게 수상한 교외상(표창장, 감사장, 공로상 등도 기재 불가)<br/>
          · 교내 ･ 외 인증시험 참여 사실이나 그 성적<br/>
          · 모의고사･전국연합학력평가 성적(원점수, 석차, 석차등급, 백분위 등 성적 관련 내용 일체) 및 관련 교내 수상실적<br/>
          · 논문을 학회지 등에 투고 또는 등재하거나 학회 등에서 발표한 사실<br/>
          · 도서출간 사실, 지식재산권(특허, 실용신안, 상표, 디자인 등) 출원 또는 등록 사실<br/>
          · K-MOOC, MOOC, KOCW<br/>
          · 자율탐구활동으로 작성한 연구보고서(소논문) 관련사항 일체는 기재할 수 없으며, 탐구보고서 등으로 편법적 기재 금지

        </div> 
      </Modal>
    </React.Fragment>
  );
}

export default RedModal;