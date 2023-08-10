import React, { useState } from "react";
import greenform_bg from "./img/greenform_bg.png";
import green_mentor_talk from "./img/green_mentor_talk.png";
import "./GreenMentor.css";
import axios from "axios";
import GreenMentorBanner from "./GreenMentorBanner";
import { getCookie, setCookie } from "../../lib/cookie";

const GreenMentor = () => {
  const sort = "all";
  const [major, setMajor] = useState("");
  const trimmedMajor = major.split(" ").join(""); // 검색어 공백제거
  const [activityList, setActivityList] = useState([]);

  const handleMajor = (e) => {
    e.preventDefault();
    setMajor(e.target.value);
  };

  const onKeySubmitSearch = async (e) => {
    if (e.key === "Enter") {
      if (!major || trimmedMajor === "") {
        alert("검색어를 입력해주세요");
        return;
      }
      await axios({
        method: "post",
        url: `http://3.37.215.18:3000/recommend/creative?sort=${sort}`,
        data: {
          major: major,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      })
        .then((result) => {
          console.log("요청성공");
          console.log(result);
          console.log(result.data.data); // 전체 창체 활동 배열
          setActivityList(result.data.data);
          if (result.data.data.length === 0) {
            alert(
              "해당 학과에 재학중인 멘토의 창의적 체험활동을 조회하지 못했습니다.\n\n다른 학과명으로 조회해볼까요?\n\n생기부 인사이드는 더 많은 멘토들과의 만남을\n계획중이니 조금만 기다려주세요!"
            );
          }
        })
        .catch((error) => {
          alert("멘토 창의적체험활동 조회 실패");
          console.log("멘토 창의적체험활동 조회 실패");
          console.log(error);
        });
      // await getMajorInfo();
    }
  };

  return (
    <div className="greenmentor">
      <div className="greenmentor_bg">
        <img src={greenform_bg} alt="greenform_bg" width="1200" height="1310" />
        <div className="greenmentor_content">
          <div className="green_mentor_talk">
            <img
              src={green_mentor_talk}
              alt="green_mentor_talk"
              width="555"
              height="135"
            />
          </div>
          <br />
          <br />
          <div className="search_div_green">
            <input
              type="search"
              placeholder="검색어를 입력 하세요..."
              name="query"
              className="search_input_green"
              onChange={handleMajor}
              onKeyPress={onKeySubmitSearch}
            />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="green_mentor_banner_div">
            {/* 꼭 [{}, {}, {}]  이런 배열 내 0번 인덱스에 먼저 접근하고, 내부의 객체 여러개에 접근하기*/}
            {activityList[0] &&
              activityList[0].map((item) => (
                // GMB 컴포넌트의 props로 배열 내 객체들의 key의 value값들을 보냄
                <GreenMentorBanner
                  activityId={item.activityId}
                  name={item.name}
                  activityType={item.activityType}
                  writerSchoolMajor={item.writerSchoolMajor}
                  writerGrade={item.writerGrade}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenMentor;
