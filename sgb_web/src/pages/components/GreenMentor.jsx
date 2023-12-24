import React, { useState } from "react";
import greenform_bg from "./img/greenform_bg.png";
import green_mentor_talk from "./img/green_mentor_talk.png";
import "./GreenMentor.css";
import axios from "axios";
import GreenMentorBanner from "./GreenMentorBanner";
import { getCookie, setCookie } from "../../lib/cookie";
import BackButton from "./BackButton";
import App from "./../../App";

const GreenMentor = () => {
  const sort = "all";
  const [major, setMajor] = useState("");
  const trimmedMajor = major.split(" ").join(""); // 검색어 공백제거
  const [activityList, setActivityList] = useState([]);
  const [bannerClicked, setBannerClicked] = useState(false);

  const parentFunction = (data, activityId) => {
    setBannerClicked(data);

    // GreenMentorBanner를 클릭한 것이 state에 bookean으로 담기면 모달창 출력
    // 모달창 전체
    var modal = document.getElementById("green_mentor_detail_div");
    console.log("modal:", modal);
    if (modal.style.display === "none") {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
    // modal.style.display = "flex";

    // 모달창 닫기 버튼
    // var closeBtn = document.getElementById("green_mentor_detail_closeBtn");
    // console.log("closeBtn:", closeBtn);
    // closeBtn.style.display = "flex";
    showCreativeActivityById(activityId);
  };

  // 모달창 출력 : 대학생 멘토의 창의적 체험활동 개별 조회
  const showCreativeActivityById = async (id) => {
    await axios({
      method: "get",
      url: `http://13.209.110.66:3000/recommend/creative/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
        withCredentials: true,
      },
    })
      .then((result) => {
        console.log("개별 창의적체험활동 조회 성공");
        console.log(result);
        console.log(result.data.data); // 우리가 접근해야 하는 개별 활동 객체
        const activity = result.data.data;
        console.log(activity);
        var modal = document.getElementById("green_mentor_detail_div");
        modal.innerHTML = `
        <div id="flexchild_green">
        <div id="green_modal_title">${major} 합격 멘토의 창의적 체험활동 추천활동 <hr/></div><br/>
        <span id="green_mentor_detail">
        <span id="green_modal_content">📌활동명</span> | ${activity.name} <br/>
        <span id="green_modal_content">💡활동 유형</span> | ${activity.activityType} <br/>
        <span id="green_modal_content">✏️활동 내 역할과 구체적인 활동 내용</span> | ${activity.role}<br/>
        <span id="green_modal_content">📆활동 학기</span> | ${activity.semester}<br/>
        <span id="green_modal_content">🗓️활동일자</span> | ${activity.startDate} ~  ${activity.endDate}<br/>
        <span id="green_modal_content">💭기타 조언 및 활동소감</span> | ${activity.thoughts}<br/>
        </span>
        </div>
        <div id="flexchild_green2">
        </div>
        `;
        var closeButton = document.createElement("button");
        modal.appendChild(closeButton);
        closeButton.id = "green_mentor_detail_closebutton";
        closeButton.addEventListener("click", closeBtnHandler);
        closeButton.innerText = "닫기";
      })
      .catch((error) => {
        console.log("개별 창의적체험활동 조회 실패");
        console.log(error);
      });
  };

  // 모달창 닫기 버튼
  const closeBtnHandler = () => {
    var modal = document.getElementById("green_mentor_detail_div");
    console.log("닫기버튼 눌림");
    modal.style.display = "none";
  };

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
        url: `http://13.209.110.66:3000/recommend/creative?sort=${sort}`,
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
                  parentFunction={parentFunction}
                />
              ))}
          </div>
          <div id="green_mentor_detail_div">
            {/* <span id="green_mentor_detail_closeBtn" onClick={closeBtnHandler}>
              닫기 </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenMentor;
