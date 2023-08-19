import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../lib/cookie";
import './MyPageEdit.css';

function PinkMypageEdit({
  activityId,
  semester,
  date,
  name,
  prize,
  role,
  thoughts,
  type,
}) {
  const navigator = useNavigate();
  const [actId, setActId] = useState(activityId);
  const [smester, setSmester] = useState(semester);
  const [prizeDate, setPrizeDate] = useState(date);
  const [prizeName, setPrizeName] = useState(name);
  const [prizeRank, setPrizeRank] = useState(prize);
  const [prizeRole, setPrizeRole] = useState(role);
  const [prizeThoughts, setPrizeThoughts] = useState(thoughts);
  const [contestType, setContestType] = useState(type);

  const handleSmester = (e) => {
    setSmester(e.target.value);
  };
  const handlePrizeDate = (e) => {
    setPrizeDate(e.target.value);
  };
  const handlePrizeName = (e) => {
    setPrizeName(e.target.value);
  };
  const handlePrizeRank = (e) => {
    setPrizeRank(e.target.value);
  };
  const handlePrizeRole = (e) => {
    setPrizeRole(e.target.value);
  };
  const handlePrizeThoughts = (e) => {
    setPrizeThoughts(e.target.value);
  };
  const handleContestType = (e) => {
    setContestType(e.target.value);
  };
  const handleSubmit = () => {
    // alert에서 확인을 누를 경우에 POST
    if (confirm("변경된 수정사항을 저장하시겠습니까?") == true) {
      axios
        .post(
          `http://3.37.215.18:3000/mypage/prize/${actId}`,
          {
            name: prizeName,
            prize: prizeRank,
            date: prizeDate,
            semester: smester,
            role: prizeRole,
            thoughts: prizeThoughts,
            type: contestType,
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
      <div className="edit-body">
      <br/><span classNmae="edit-title">수상경력 수정하기 ✏️</span>
      <hr className="edit-divider" /> <br/>
      <span className="edit-label">수상명 {" "}</span>
      <input
        className="edit-input"
        type="text"
        name="prizeName"
        value={prizeName}
        onChange={handlePrizeName}
      />{" "}
      <span className="edit-label-small">*필수 - 교과우수상(수상과목), 표창장(부문), 대회(참가부문)</span>
      <br />
      <span className="edit-label">수상 등급 {" "}</span>
      <input
        className="edit-input"
        type="text"
        name="prizeRank"
        value={prizeRank}
        onChange={handlePrizeRank}
      />{" "}
      <br />
      <span className="edit-label">수상 유형 {" "}</span>
      <select
        className="edit-input"
        type="text"
        name="contestType"
        value={contestType}
        onChange={handleContestType}
      >
        <option value="교과우수상">교과우수상</option>
        <option value="표창장">표창장</option>
        <option value="교내대회">교내대회</option>
      </select>{" "}
      <span className="edit-label-small">*필수</span>
      <br />
      <span className="edit-label">수상 날짜 {" "}</span>
      <input
        className="edit-input"
        type="date"
        name="prizeDate"
        value={prizeDate}
        onChange={handlePrizeDate}
      />{" "}
      <span className="edit-label-small">*필수</span>
      <br />
      <span className="edit-label">수상 학기 {" "}</span>
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
      <br /><br/>
      <span className="edit-label">수상 대회에서 특히 노력하거나 활약한 부분 {" "}</span><br/>
      <textarea
        className="edit-textarea"
        type="text"
        name="prizeRole"
        value={prizeRole}
        onChange={handlePrizeRole}
      />{" "}<br />
      <span className="edit-label-small">*필수</span>
      <br /><br />
      <span className="edit-label">수상 소감 {" "}</span><br/>
      <textarea
        className="edit-textarea"     
        name="prizeThoughts"
        value={prizeThoughts}
        onChange={handlePrizeThoughts}
      />{" "}
      <br /><br/>
      <input className="edit-button" type="submit" value="  수정 완료  " onClick={handleSubmit} />
      <br /><br/>
      </div>
    </>
  );
}

export default PinkMypageEdit;
