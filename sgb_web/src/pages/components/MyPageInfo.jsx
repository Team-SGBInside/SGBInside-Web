import React, { useState } from "react";
import axios from "axios";
import GreenMentorBanner from "./GreenMentorBanner";
import PinkMentorBanner from "./PinkMentorBanner";
import "./MyPageInfo.css";
import InfoBox from "./img/InfoBox.png";
import menu_whole from "./img/menu_whole.png";
import menu_green from "./img/menu_green.png";
import menu_red from "./img/menu_red.png";
import menu_pink from "./img/menu_pink.png";
import menu_blue from "./img/menu_blue.png";
import mypage_green from "./img/mypage_green.png";
import mypage_red from "./img/mypage_red.png";
import mypage_pink from "./img/mypage_pink.png";
import mypage_blue from "./img/mypage_blue.png";
import mypage_blue2 from "./img/mypage_blue2.png";
import mypage_green2 from "./img/mypage_green2.png";
import { Link } from "react-router-dom";
import { getCookie, setCookie } from "../../lib/cookie";
import RedMypageBanner from "./RedMypageBanner";
import BlueMypageBanner from "./BlueMypageBanner";
import GreenMypageBanner from "./GreenMypageBanner";

const getUserInfo = async () => {
  // const userId = await getCookie("userId");
  // const token = await getCookie("accessToken");
  // console.log("userId: ", userId);
  // console.log("token: ", token);
  const sortQuery = "all";
  const semseterQuery = "all";
  const response = await axios.get(
    `http://3.37.215.18:3000/mypage?sort=${sortQuery}&semester=${semseterQuery}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
        withCredentials: true,
      },
    }
  );
  const result = response.data.data;
  const age = result.age;
  const grade = result.grade;
  const school = result.school;
  const isTeen = result.isTeen;
  const name = result.name;
  const userId = result.userId;
  const totalActivitycount = result.totalActivity.activityCount;

  // 활동 유형별 배열 내부 객체에 활동 유형 구별가능하도록 sort key 추가
  let allBookActivity = result.totalActivity.allBookActivity;
  allBookActivity.map((item) => {
    item.sort = "book";
  });

  let allPrizeActivity = result.totalActivity.allPrizeActivity;
  allPrizeActivity.map((item) => {
    item.sort = "prize";
  });

  let allSubjectDetailedActivity =
    result.totalActivity.allSubjectDetailedActivity;
  allSubjectDetailedActivity.map((item) => {
    item.sort = "subject";
  });

  let allCreativeActivity = result.totalActivity.allcreativeActivity;
  allCreativeActivity.map((item) => {
    item.sort = "creative";
  });

  // 전체 활동 통합, 배열 내 인덱스 번호에 따른 uniqId로 id key 부여
  let allActivity = [
    ...allBookActivity,
    ...allPrizeActivity,
    ...allSubjectDetailedActivity,
    ...allCreativeActivity,
  ];

  allActivity.map((item, index) => {
    let uniqId = parseInt(index);
    item.id = uniqId;
  });

  console.log("allActivity: ", allActivity);
  // console.log("newAllActivity: ", newAllActivity);
  // 순차적으로 response를 찍어보는 코드인데, 필요에 따라 취사선택하세요
  console.log("response:", response);
  console.log("response.data: ", response.data);
  console.log("response.data.data: ", response.data.data);

  // 객체 내에 객체(totalActivity)가 담기지 않도록 totalAcitivity 안 요소를 꺼내 data로 재구성
  const data = {
    age,
    grade,
    school,
    isTeen,
    name,
    totalActivitycount,
    allActivity,
    userId,
  };
  console.log("data: ", data);
  return data;
};
// userInfo 변수에는 getUserInfo의 호출 결과가 담김(async함수이기 때문에 await문 사용)
// -> return되는 것은 data이고,
// data 안에는 age, grade, 기타등등이 있음
const userInfo = await getUserInfo();

const MyPageInfo = () => {
  const [bannerClicked, setBannerClicked] = useState(false);
  const parentFunction = (data, activityId) => {
    setBannerClicked(data);

    // GreenMentorBanner를 클릭한 것이 state에 bookean으로 담기면 모달창 출력
    // 모달창 전체
    var modal = document.getElementById("mypage_detail_div");
    console.log("modal:", modal);
    modal.style.display = "flex";

    // 모달창 닫기 버튼
    // var closeBtn = document.getElementById("green_mentor_detail_closeBtn");
    // console.log("closeBtn:", closeBtn);
    // closeBtn.style.display = "flex";
    // showCreativeActivityById(activityId);
  };
  return (
    <>
      <div className="mypage">
        <div className="infobox">
          <img src={InfoBox} alt="infobox" width="600" height="200" />
          <div className="infobox_content">
            <span className="info_big">{userInfo.name}</span>님, 원하는 건
            뭐든지 이루어질거에요!
            <br />
            <span className="info_small">
              {userInfo.school} {userInfo.grade}학년/ {userInfo.age}세
            </span>
          </div>
        </div>
        <br />
      </div>
      <br />
      <div className="mypage2">
        <div className="infobox2">
          <div className="total_inside">
            <span className="info_big">{userInfo.totalActivitycount}</span>개의
            생기부 인사이드
          </div>
          <br />
          <div className="semester_menu">
            <div className="semester">
              <select className="semester_select">
                <option>1-1&nbsp;&nbsp;</option>
                <option>1-2&nbsp;&nbsp;</option>
                <option>2-1&nbsp;&nbsp;</option>
                <option>2-2&nbsp;&nbsp;</option>
                <option>3-1&nbsp;&nbsp;</option>
                <option>3-2&nbsp;&nbsp;</option>
              </select>
            </div>
            <div className="menu_btn">
              <img src={menu_whole} alt="whole" width="80" height="40" />

              <img src={menu_green} alt="green" width="80" height="40" />

              <img src={menu_red} alt="red" width="80" height="40" />

              <img src={menu_pink} alt="pink" width="80" height="40" />

              <img src={menu_blue} alt="blue" width="80" height="40" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="mypage3">
        <div className="activity_list">
          {userInfo.allActivity &&
            userInfo.allActivity.map((item) => {
              if (item.sort === "creative") {
                return (
                  <GreenMypageBanner
                    activityId={item.activityId}
                    name={item.name}
                    activityType="창체활동"
                    writerSchoolMajor={item.writerSchoolMajor}
                    writerGrade={item.writerGrade}
                    parentFunction={parentFunction}
                  />
                );
              }
              if (item.sort === "subject") {
                return (
                  <RedMypageBanner
                    activityId={item.activityId}
                    mainActivity={item.mainActivity}
                    sort="세부능력"
                    startDate={item.startDate}
                    endDate={item.endDate}
                    parentFunction={parentFunction}
                  />
                );
              }

              if (item.sort === "prize") {
                return (
                  <PinkMentorBanner
                    activityId={item.activityId}
                    name={item.name}
                    type="수상경력"
                    writerSchoolMajor={item.writerSchoolMajor}
                    writerGrade={item.writerGrade}
                    parentFunction={parentFunction}
                  />
                );
              }

              if (item.sort === "book") {
                return (
                  <BlueMypageBanner
                    activityId={item.activityId}
                    titleAuthor={item.titleAuthor}
                    sort="독서활동"
                    endDate={item.endDate}
                    // writerGrade={item.writerGrade}
                    parentFunction={parentFunction}
                  />
                );
              }
            })}
        </div>
        <div id="mypage_detail_div"></div>
      </div>
    </>
  );
};

export default MyPageInfo;
