import React, { useRef } from "react";
import BlueModal from "./BlueModal";
import blueform_bg from "./img/blueform_bg.png";
import blue_alert from "./img/blue_alert.png";
import blue_save from "./img/blue_save.png";
import blue_recom from "./img/blue_recom.png";
import "./BlueForm.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { getCookie, setCookie } from "../../lib/cookie";

function BlueForm() {
  const blueNameRef = useRef();
  const blueDateRef = useRef();
  const blueSemesterRef = useRef();
  const blueThoughtRef = useRef();
  const blueSubjectRef = useRef();
  const blueQuote1Ref = useRef();
  const blueQuote2Ref = useRef();
  const blueQuote3Ref = useRef();
  const blueQuote4Ref = useRef();
  const blueQuote5Ref = useRef();

  const handleMember = async () => {
    console.log("clicked");
    try {
      const response = await axios.post(
        "http://3.37.215.18:3000/activity/book",
        {
          writerId: 9,
          titleAuthor: blueNameRef.current.value,
          endDate: blueDateRef.current.value,
          semester: blueSemesterRef.current.value,
          thoughts: blueThoughtRef.current.value,
          relatedSubject: blueSubjectRef.current.value,
          quote1: blueQuote1Ref.current.value,
          quote2: blueQuote2Ref.current.value,
          quote3: blueQuote3Ref.current.value,
          quote4: blueQuote4Ref.current.value,
          quote5: blueQuote5Ref.current.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("accessToken")}`,
            withCredentials: true,
          },
        }
      );
      console.log(response);
      window.alert("성공적으로 기록되었습니다. 기록한 내용은 '마이페이지'에서 확인 가능합니다."); //성공페이지로 라우팅
    } catch (error) {
      console.log(error);
      window.alert("기록에 실패했습니다. 필수입력란을 전부 기입해주세요."); //실패페이지로 라우팅
    }
  };
  return (
    <div className="blueform">
      <div className="blueform_bg">
        <img src={blueform_bg} alt="blueform_bg" width="1200" height="1450" />
        <div className="blueform_content">
          <img src={blue_alert} alt="blue_alert" width="604" height="120" />
          <br />
          <br />
          <div className="blue_recom">
            <Link to="/blueRecom">
              <img src={blue_recom} alt="blue_recom" width="300" height="100" />
            </Link>
          </div>
          {/* 도서이름 */}
          <label className="blue-label">
            책이름과 저자를 기록해줘. ISBN 등재 도서만 기재 가능해 :){" "}
          </label>
          <br />
          <input
            className="blue_name_input"
            type="text"
            placeholder="ex) 데미안(헤르만 헤세)"
            ref={blueNameRef}
          />
          <br />
          <br />
          {/* 독서날짜 */}
          <label className="green-label">읽은 날짜도 함께 기록하자.</label>
          <br />
          <input className="blue_date_input" type="date" ref={blueDateRef} />
          <br />
          {/* 수상학기 */}
          <select
            className="blue_semester_select"
            name="blueSemester"
            ref={blueSemesterRef}
          >
            <option value="1-1">1학년 1학기</option>
            <option value="1-2">1학년 2학기</option>
            <option value="2-1">2학년 1학기</option>
            <option value="2-2">2학년 2학기</option>
            <option value="3-1">3학년 1학기</option>
            <option value="3-2">3학년 2학기</option>
          </select>
          <br />
          <br />
          {/* 독후감상 */}
          <label className="blue-label">
            책을 읽게 된 계기와 감상 등을 자유롭게 남겨보자!{" "}
          </label>
          <textarea
            className="blue_activity_text"
            placeholder="ex) 헤르만 헤세가 생각하는 '삶'은 자기 자신에게로 이르는 길이었다. 끊임없이 나를 마주하고 탐구하는 것. 아이러니하게도 싱클레어의 삶은 완벽하게 고독해지므로써 혼자가 아니게 되었다. "
            ref={blueThoughtRef}
          ></textarea>
          <br />
          <br />
          {/* 연계과목 */}
          <label className="blue-label">
            연계되는 과목이나 영역을 알려줘. 분류가 없다면 ‘없음’ 으로 적어줘.{" "}
          </label>
          <br />
          <input
            className="blue_subject_input"
            type="text"
            placeholder="ex) 문학"
            ref={blueSubjectRef}
          />
          <br />
          <br />
          {/* 책 구절(선택) */}
          <label className="blue-label">
            특히 인상깊거나 기억하고 싶은 구절이 있었을까? 적어둔다면 기억에 더
            오래남을거야! (선택){" "}
          </label>
          <input
            className="blue_thought_text"
            placeholder="책 구절 입력 .."
            ref={blueQuote1Ref}
          />
          <br />
          <input
            className="blue_thought_text"
            placeholder="책 구절 입력 .."
            ref={blueQuote2Ref}
          />
          <br />
          <input
            className="blue_thought_text"
            placeholder="책 구절 입력 .."
            ref={blueQuote3Ref}
          />
          <br />
          <input
            className="blue_thought_text"
            placeholder="책 구절 입력 .."
            ref={blueQuote4Ref}
          />
          <br />
          <input
            className="blue_thought_text"
            placeholder="책 구절 입력 .."
            ref={blueQuote5Ref}
          />
          <br />
          <br />
          <br />
          <div className="blue_button">
            <BlueModal />
            <div className="tip_button">
              <button
                style={{ backgroundColor: "#EEF2EB" }}
                onClick={handleMember}
              >
                <img src={blue_save} alt="blue_save" width="230" height="60" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueForm;
