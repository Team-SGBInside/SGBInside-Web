import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../lib/cookie";

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
    if (confirm("정말로 작성하신대로 저장하시겠습니까?") == true) {
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

          // navigator(-1); // 뒤로가기
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
      마이페이지 수상경력 수정
      <br />
      수상명:{" "}
      <input
        type="text"
        name="prizeName"
        value={prizeName}
        onChange={handlePrizeName}
      />{" "}
      *필수(교과우수상(수상과목), 표창장(부문), 대회(참가부문) - 참가부문이 있는
      경우만 입력. 예: 정보통신대회(정보검색부문))
      <br />
      수상 등급:{" "}
      <input
        type="text"
        name="prizeRank"
        value={prizeRank}
        onChange={handlePrizeRank}
      />{" "}
      <br />
      수상 유형:{" "}
      <input
        type="text"
        name="contestType"
        value={contestType}
        onChange={handleContestType}
      />{" "}
      *필수(교과우수상, 표창장, 교내대회 중 택 1)
      <br />
      수상 날짜:{" "}
      <input
        type="text"
        name="prizeDate"
        value={prizeDate}
        onChange={handlePrizeDate}
      />{" "}
      *필수(예: 2023-01-01)
      <br />
      수상 학기:{" "}
      <input
        type="text"
        name="semester"
        value={smester}
        onChange={handleSmester}
      />{" "}
      *필수(예: 1-1)
      <br />
      수상 대회에서 특히 노력하거나 활약한 부분:{" "}
      <input
        type="text"
        name="prizeRole"
        value={prizeRole}
        onChange={handlePrizeRole}
      />{" "}
      *필수
      <br />
      활동 소감:{" "}
      <input
        type="text"
        name="prizeThoughts"
        value={prizeThoughts}
        onChange={handlePrizeThoughts}
      />{" "}
      <br />
      <input type="submit" value="저장" onClick={handleSubmit} />
    </>
  );
}

export default PinkMypageEdit;
