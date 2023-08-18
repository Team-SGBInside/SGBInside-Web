import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../lib/cookie";
import './MyPageEdit.css';

function BlueMypageEdit({
  activityId,
  semester,
  endDate,
  titleAuthor,
  relatedSubject,
  thoughts,
  quote1,
  quote2,
  quote3,
  quote4,
  quote5,
}) {
  const navigator = useNavigate();
  const [actId, setActId] = useState(activityId);
  const [smester, setSmester] = useState(semester);
  const [eDate, setEDate] = useState(endDate);
  const [titleAuth, setTitleAuth] = useState(titleAuthor);
  const [relSubj, setRelSub] = useState(relatedSubject);
  const [thghts, setThghts] = useState(thoughts);
  const [q1, setQ1] = useState(
    quote1 !== undefined || quote1 !== null ? quote1 : ""
  );
  const [q2, setQ2] = useState(
    quote2 !== undefined || quote2 !== null ? quote2 : ""
  );
  const [q3, setQ3] = useState(
    quote3 !== undefined || quote3 !== null ? quote3 : ""
  );
  const [q4, setQ4] = useState(
    quote4 !== undefined || quote4 !== null ? quote4 : ""
  );
  const [q5, setQ5] = useState(
    quote5 !== undefined || quote5 !== null ? quote5 : ""
  );

  const handleSmester = (e) => {
    setSmester(e.target.value);
  };
  const handleEdate = (e) => {
    setEDate(e.target.value);
  };
  const handleTitleAuthor = (e) => {
    setTitleAuth((titleAuth) => e.target.value);
  };
  const handleRelSubj = (e) => {
    setRelSub(e.target.value);
  };
  const handleThghts = (e) => {
    setThghts(e.target.value);
  };
  const handleQ1 = (e) => {
    setQ1(e.target.value);
  };
  const handleQ2 = (e) => {
    setQ2(e.target.value);
  };
  const handleQ3 = (e) => {
    setQ3(e.target.value);
  };
  const handleQ4 = (e) => {
    setQ4(e.target.value);
  };
  const handleQ5 = (e) => {
    setQ5(e.target.value);
  };

  const handleSubmit = () => {
    // alert에서 확인을 누를 경우에 POST
    if (confirm("변경된 수정사항을 저장하시겠습니까?") == true) {
      axios
        .post(
          `http://3.37.215.18:3000/mypage/book/${actId}`,
          {
            titleAuthor: titleAuth,
            endDate: eDate,
            semester: smester,
            thoughts: thghts,
            relatedSubject: relSubj,
            quote1: q1,
            quote2: q2,
            quote3: q3,
            quote4: q4,
            quote5: q5,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getCookie("accessToken")}`,
              withCredentials: true,
            },
          }
        )
        .then((response) => {
          alert("저장되었습니다.");
          console.log("edit response: ", response);
          location.reload();
          navigator(-1); // 뒤로가기
        })
        .catch((error) => {
          alert("수정에 실패했습니다.");
          console.log(error);
          // 새로고침(필수값을 주지않았다던가 하는 등 api 통신요건을 만족시키지 못한 경우)
          location.reload();
        });
    } else {
      return; // alert에서 취소를 누를 경우
    }
  };

  return (
    <>
      <div className="edit-body2">
      <br/><br/>
      <span className="edit-label">책이름(저자) {" "}</span>
      <input
        className="edit-input"
        type="text"
        name="titleAuthor"
        value={titleAuth}
        onChange={handleTitleAuthor}
      />{" "}
      <span className="edit-label-small">*필수</span>
      <br />
      <span className="edit-label">독서 완료 일자 {" "}</span>
      <input
        className="edit-input"
        type="date"
        name="endDate"
        value={eDate}
        onChange={handleEdate}
      />{" "}
      <span className="edit-label-small">*필수</span>
      <br />
      <span className="edit-label">독서 학기 {" "}</span>
      <select
        className="edit-input"
        type="text"
        name="semester"
        value={smester}
        onChange={handleSmester}
      >
      <option value="1-1">1학년 1학기</option>
      <option value="1-2">1학년 2학기</option>
      <option value="2-1">2학년 1학기</option>
      <option value="2-2">2학년 2학기</option>
      <option value="3-1">3학년 1학기</option>
      <option value="3-2">3학년 2학기</option>
      </select>{" "}
      <span className="edit-label-small">*필수</span>
      <br/><br/>
      <span className="edit-label">독서 계기 및 감상 {" "}</span><br/>
      <textarea
        className="edit-textarea"
        type="text"
        name="thoughts"
        value={thghts}
        onChange={handleThghts}
      />{" "}
      <span className="edit-label-small">*필수</span>
      <br />
      <span className="edit-label">연계 과목 및 영역 {" "}</span>
      <input
        className="edit-input"
        type="text"
        name="relSubj"
        value={relSubj}
        onChange={handleRelSubj}
      />{" "}
      <span className="edit-label-small">*필수(없으면 '없음')</span> <br /><br />
      <span className="edit-label">인상깊었던 구절 1 {" "}</span>
      <input className="edit-input" type="text" name="quote1" value={q1} onChange={handleQ1} style={{ width: "80%",  height: "5%" }}  /> <br /><br />
      <span className="edit-label">인상깊었던 구절 2 {" "}</span>
      <input className="edit-input" type="text" name="quote2" value={q2} onChange={handleQ2} style={{ width: "80%",  height: "5%" }} /> <br /><br />
      <span className="edit-label">인상깊었던 구절 3 {" "}</span>
      <input className="edit-input" type="text" name="quote3" value={q3} onChange={handleQ3} style={{ width: "80%",  height: "5%" }} /> <br /><br />
      <span className="edit-label">인상깊었던 구절 4 {" "}</span>
      <input className="edit-input" type="text" name="quote4" value={q4} onChange={handleQ4} style={{ width: "80%",  height: "5%" }} /> <br /><br />
      <span className="edit-label">인상깊었던 구절 5 {" "}</span>
      <input className="edit-input" type="text" name="quote5" value={q5} onChange={handleQ5} style={{ width: "80%",  height: "5%" }} /> <br /><br />
      <br /><br/>
      <input className="edit-button" type="submit" value="  수정 완료  " onClick={handleSubmit} />
      <br /><br/>
      </div>
    </>
  );
}

export default BlueMypageEdit;
