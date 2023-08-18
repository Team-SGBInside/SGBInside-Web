import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../lib/cookie";

function RedMyPageEdit({
  activityId,
  subjectName,
  subjectContent,
  mainActivity,
  startDate,
  endDate,
  activitySemester,
  activityContentDetail,
  subjectFurtherStudy,
}) {
  const navigator = useNavigate();
  const [actId, setActId] = useState(activityId);
  const [subNme, setSubNme] = useState(subjectName);
  const [subCont, setSubCont] = useState(subjectContent);
  const [smester, setSmester] = useState(activitySemester);
  const [stDate, setStDate] = useState(startDate);
  const [edDate, setEdDate] = useState(endDate);
  const [mainAct, setMainAct] = useState(mainActivity);
  const [actDetail, setActDetail] = useState(activityContentDetail);
  const [further, setFurther] = useState(subjectFurtherStudy);

  const handleSubNme = (e) => {
    setSubNme(e.target.value);
  };
  const handleSubCont = (e) => {
    setSubCont(e.target.value);
  };
  const handleSmester = (e) => {
    setSmester(e.target.value);
  };
  const handleStDate = (e) => {
    setStDate(e.target.value);
  };
  const handleEdDate = (e) => {
    setEdDate(e.target.value);
  };
  const handleMainAct = (e) => {
    setMainAct(e.target.value);
  };
  const handleActDetail = (e) => {
    setActDetail(e.target.value);
  };
  const handleFurther = (e) => {
    setFurther(e.target.value);
  };
  const handleSubmit = () => {
    // alert에서 확인을 누를 경우에 POST
    if (confirm("정말로 작성하신대로 저장하시겠습니까?") == true) {
      axios
        .post(
          `http://3.37.215.18:3000/mypage/subject/${actId}`,
          {
            subjectName: subNme,
            subjectContent: subCont,
            mainActivity: mainAct,
            startDate: stDate,
            endDate: edDate,
            activitySemester: smester,
            activityContentDetail: actDetail,
            subjectFurtherStudy: further,
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
      마이페이지 세부능력 특기사항 수정
      <br />
      과목명:{" "}
      <input
        type="text"
        name="subName"
        value={subNme}
        onChange={handleSubNme}
      />{" "}
      *필수
      <br />
      과목에서 배운 내용:{" "}
      <input
        type="text"
        name="subContent"
        value={subCont}
        onChange={handleSubCont}
      />{" "}
      *필수
      <br />
      기억에 남은 활동 내용:{" "}
      <input
        type="text"
        name="mainActivity"
        value={mainAct}
        onChange={handleMainAct}
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
      자세한 활동 내용:{" "}
      <input
        type="text"
        name="actContentDetail"
        value={actDetail}
        onChange={handleActDetail}
      />{" "}
      *필수
      <br />
      과목을 통해 배우고 성장한 점, 더 공부한 영역:{" "}
      <input
        type="text"
        name="subjectFurtherStudy"
        value={further}
        onChange={handleFurther}
      />{" "}
      <br />
      <input type="submit" value="저장" onClick={handleSubmit} />
    </>
  );
}

export default RedMyPageEdit;
