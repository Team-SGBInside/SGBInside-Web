import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../lib/cookie";

function GreenMyPageEdit({
  activityId,
  name,
  startDate,
  endDate,
  semester,
  activityType,
  role,
  thoughts,
}) {
  const navigator = useNavigate();
  const [actId, setActId] = useState(activityId);
  const [nme, setNme] = useState(name);
  const [stDate, setStDate] = useState(startDate);
  const [edDate, setEdDate] = useState(endDate);
  const [smester, setSmester] = useState(semester);
  const [actType, setActType] = useState(activityType);
  const [rle, setRle] = useState(role);
  const [thghts, setThghts] = useState(thoughts);

  const handleNme = (e) => {
    setNme(e.target.value);
  };
  const handleStDate = (e) => {
    setStDate(e.target.value);
  };
  const handleEdDate = (e) => {
    setEdDate(e.target.value);
  };
  const handleSmester = (e) => {
    setSmester(e.target.value);
  };
  const handleActType = (e) => {
    setActType(e.target.value);
  };
  const handleRle = (e) => {
    setRle(e.target.value);
  };
  const handleThghts = (e) => {
    setThghts(e.target.value);
  };
  const handleSubmit = () => {
    // alert에서 확인을 누를 경우에 POST
    if (confirm("정말로 작성하신대로 저장하시겠습니까?") == true) {
      axios
        .post(
          `http://3.37.215.18:3000/mypage/creative/${actId}`,
          {
            name: nme,
            activityType: actType,
            startDate: stDate,
            endDate: edDate,
            semester: smester,
            role: rle,
            thoughts: thghts,
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
      마이페이지 창의적 체험활동 수정
      <br />
      활동명: <input
        type="text"
        name="name"
        value={nme}
        onChange={handleNme}
      />{" "}
      *필수
      <br />
      시작일자:{" "}
      <input
        type="text"
        name="startDate"
        value={stDate}
        onChange={handleStDate}
      />{" "}
      *필수(예: 2023-01-01)
      <br />
      종료일자:{" "}
      <input
        type="text"
        name="endDate"
        value={edDate}
        onChange={handleEdDate}
      />{" "}
      *필수(예: 2023-03-12)
      <br />
      활동학기:{" "}
      <input
        type="text"
        name="semester"
        value={smester}
        onChange={handleSmester}
      />{" "}
      *필수(예: 1-1)
      <br />
      활동유형:{" "}
      <input
        type="text"
        name="activityType"
        value={actType}
        onChange={handleActType}
      />{" "}
      *필수(자율활동, 진로활동, 봉사활동, 동아리활동 중 택1)
      <br />
      활동 내 역할 및 구체적 활동내용:{" "}
      <input type="text" name="role" value={rle} onChange={handleRle} /> *필수
      <br />
      활동 소감:{" "}
      <input
        type="text"
        name="thoughts"
        value={thghts}
        onChange={handleThghts}
      />
      <br />
      <input type="submit" value="저장" onClick={handleSubmit} />
    </>
  );
}

export default GreenMyPageEdit;
