import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import greenform_bg from "./img/greenform_bg.png";
import green_mentor_talk from "./img/green_mentor_talk.png";
import "./GreenMentor.css";
import axios from "axios";
import GreenMentorBanner from "./GreenMentorBanner";
import { getCookie, setCookie } from "../../lib/cookie";
import { useNavigate } from "react-router-dom";

const GreenMentorDetail = () => {
  const { id } = useParams();
  console.log(id);
  // 조회한 개별 창체 활동을 activity라는 state에 저장
  const [activity, setActivity] = useState({});

  // 대학생 멘토의 창의적 체험활동 개별 조회
  const showCreativeActivityById = async (id) => {
    await axios({
      method: "get",
      url: `http://3.37.215.18:3000/recommend/creative/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    })
      .then((result) => {
        console.log("개별 창의적체험활동 조회 성공");
        console.log(result);
        console.log(result.data.data); // 우리가 접근해야 하는 개별 활동 객체
        setActivity(result.data.data);
      })
      .catch((error) => {
        console.log("개별 창의적체험활동 조회 실패");
        console.log(error);
      });
  };
  useEffect(() => {
    showCreativeActivityById(id);
  }, []);
  return (
    <div className="greenmentor">
      <div className="greenmentor_bg">
        <img src={greenform_bg} alt="greenform_bg" width="1200" height="1310" />
        <div className="greenmentor_content">
          "학과이름" 합격 멘토의 창의적 체험활동 추천활동 <br />
          <br />
          활동 유형: {activity.activityType} <br />
          {activity.name} | {activity.startDate} ~ {activity.endDate} <br />
          {activity.name}({activity.startDate} ~ {activity.endDate}) <br />
          <br />
          활동 내 역할과 구체적인 활동 내용: {activity.role} <br />
          활동 학기: {activity.semester} <br />
          활동 시작일자: {activity.startDate} <br />
          활동 종료일자: {activity.endDate} <br />
          기타 조언 및 활동소감: {activity.thoughts} <br />
        </div>
      </div>
    </div>
  );
};

export default GreenMentorDetail;
