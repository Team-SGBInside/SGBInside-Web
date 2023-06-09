import React from 'react';
import './Modal.css';
import { Link } from 'react-router-dom';

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}</main>
            <footer>
              <div class="button-wrap">
                  {/* <Link to = "/mypage">
                    <button className="mypage">
                      마이페이지 이동
                    </button> 
                  </Link> */}
                  &nbsp;
                  <button className="close" onClick={close}>
                    뒤로가기
                  </button>
              </div>    
            </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;