import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../lib/cookie";
import "./MyPageEdit.css";

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
    if (confirm("변경된 수정사항을 저장하시겠습니까?") == true) {
      axios
        .post(
          `http://13.209.110.66:3000/mypage/subject/${actId}`,
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
      {/* <button className="edit-back">←</button> */}
      <div className="edit-body">
        <br />
        <span classNmae="edit-title">세부능력 및 특기사항 수정하기 ✏️</span>
        <hr className="edit-divider" /> <br />
        <span className="edit-label">과목명 </span>
        <input
          className="edit-input"
          type="text"
          name="subName"
          value={subNme}
          onChange={handleSubNme}
        />{" "}
        <span className="edit-label-small">*필수</span>
        <br />
        <span className="edit-label">과목에서 배운 내용 </span>
        <input
          className="edit-input"
          type="text"
          name="subContent"
          value={subCont}
          onChange={handleSubCont}
        />{" "}
        <span className="edit-label-small">*필수</span>
        <br />
        <span className="edit-label">기억에 남는 활동 </span>
        <input
          className="edit-input"
          type="text"
          name="mainActivity"
          value={mainAct}
          onChange={handleMainAct}
        />{" "}
        <span className="edit-label-small">*필수</span>
        <br />
        <span className="edit-label">시작 일자 </span>
        <input
          className="edit-input"
          type="date"
          name="startDate"
          value={stDate}
          onChange={handleStDate}
        />{" "}
        <span className="edit-label-small">*필수</span>
        <br />
        <span className="edit-label">종료 일자 </span>
        <input
          className="edit-input"
          type="date"
          name="endDate"
          value={edDate}
          onChange={handleEdDate}
        />{" "}
        <span className="edit-label-small">*필수</span>
        <br />
        <span className="edit-label">활동학기 </span>
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
        <br />
        <br />
        <span className="edit-label">자세한 활동 내용 </span>
        <br />
        <textarea
          className="edit-textarea"
          type="text"
          name="actContentDetail"
          value={actDetail}
          onChange={handleActDetail}
        />{" "}
        <br />
        <span className="edit-label-small">*필수</span>
        <br />
        <span className="edit-label">
          과목을 통해 배우고 성장한 점, 더 공부한 영역{" "}
        </span>
        <br />
        <textarea
          className="edit-textarea"
          type="text"
          name="subjectFurtherStudy"
          value={further}
          onChange={handleFurther}
        />{" "}
        <br />
        <br />
        <input
          className="edit-button"
          type="submit"
          value="  수정 완료  "
          onClick={handleSubmit}
        />
        <br />
        <br />
      </div>
    </>
  );
}

export default RedMyPageEdit;
