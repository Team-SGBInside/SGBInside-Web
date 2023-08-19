import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../lib/cookie";
import './MyPageEdit.css';

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
    if (confirm("변경된 수정사항을 저장하시겠습니까?") == true) {
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
      {/* <button className="edit-back" onClick={handleBack}>←</button> */}
      <div className="edit-body">
      <br/><span classNmae="edit-title">창의적체험활동 수정하기 ✏️</span>
      <hr className="edit-divider" /> <br/>
      <span className="edit-label">활동명 {" "}</span>
      <input
        className="edit-input"
        type="text"
        name="name"
        value={nme}
        onChange={handleNme}
      />{" "}
      <span className="edit-label-small">*필수</span>
      <br />
      <span className="edit-label">시작일자 {" "}</span>
      <input
        className="edit-input"
        type="date"
        name="startDate"
        value={stDate}
        onChange={handleStDate}
      />{" "}
      <span className="edit-label-small">*필수</span>
      <br />
      <span className="edit-label">종료일자 {" "}</span>
      <input
        className="edit-input"
        type="date"
        name="endDate"
        value={edDate}
        onChange={handleEdDate}
      />{" "}
      <span className="edit-label-small">*필수</span>
      <br />
      <span className="edit-label">활동학기 {" "}</span>
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
      <span className="edit-label">활동유형 {" "}</span>
      <select
        className="edit-input"
        type="text"
        name="activityType"
        value={actType}
        onChange={handleActType}
      >
            <option value="self">자율활동</option>
            <option value="club">동아리활동</option>
            <option value="career">진로활동</option>
            <option value="volunteer">봉사활동</option>
      </select>{" "}
      <span className="edit-label-small">*필수</span>
      <br /><br/>
      <span className="edit-label">활동 내 역할 및 구체적 활동내용 {" "}</span><br/>
      <textarea 
      type="text" 
      className="edit-textarea" 
      name="role" 
      value={rle} 
      onChange={handleRle} 
      /> <br/>
      <span className="edit-label-small">*필수</span>
      <br /><br/>
      <span className="edit-label">활동 소감 {" "}</span><br/>
      <textarea
        className="edit-textarea"
        type="text"
        name="thoughts"
        value={thghts}
        onChange={handleThghts}
      />
      <br/><br/>
      <input className="edit-button" type="submit" value="  수정 완료  " onClick={handleSubmit} />
      <br/><br/>
      </div>
    </>
  );
}

export default GreenMyPageEdit;
