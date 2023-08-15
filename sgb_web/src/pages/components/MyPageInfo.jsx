import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyPageInfo.css";
import InfoBox from "./img/InfoBox.png";
import menu_whole from "./img/menu_whole.png";
import menu_green from "./img/menu_green.png";
import menu_red from "./img/menu_red.png";
import menu_pink from "./img/menu_pink.png";
import menu_blue from "./img/menu_blue.png";
import green_clicked from "./img/green_clicked.png";
import red_clicked from "./img/red_clicked.png";
import pink_clicked from "./img/pink_clicked.png";
import blue_clicked from "./img/blue_clicked.png";
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
import PinkMypageBanner from "./PinkMypageBanner";

const MyPageInfo = () => {
  console.log("Hi i'm first");
  const [userInfo, setUserInfo] = useState({});
  const [semester, setSemester] = useState("all");
  const [activitySort, setActivitySort] = useState("all");
  const [bannerClicked, setBannerClicked] = useState(false);

  const tokenUserId = getCookie("userId");
  const token = getCookie("accessToken");
  if (!tokenUserId || !token) {
    console.log("cannnot get userId or token from cookie");
    return;
  }

  let semesterQuery = semester;
  let sortQuery = activitySort;
  const handleSemester = (event) => {
    event.preventDefault();
    setSemester(event.target.value);
    console.log("semesterQuery: ", semesterQuery);
    console.log("sortQuery: ", sortQuery);
    getUserInfo(sortQuery, semesterQuery);
  };

  const handleActivitySort = (sort) => {
    setActivitySort(sort);
    console.log("semesterQuery: ", semesterQuery);
    console.log("sortQuery: ", sortQuery);
    getUserInfo(sortQuery, semesterQuery);
  };

  const getUserInfo = (sortQuery, semesterQuery) => {
    console.log("semesterQuery in getUserInfo: ", semesterQuery);
    console.log("sortQuery in getUserInfo: ", sortQuery);
    axios
      .get(
        `http://3.37.215.18:3000/mypage?sort=${sortQuery}&semester=${semesterQuery}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("accessToken")}`,
            withCredentials: true,
          },
        }
      )
      .then((response) => {
        const result = response.data.data;
        const age = result.age;
        const grade = result.grade;
        const school = result.school;
        const isTeen = result.isTeen;
        const name = result.name;
        const userId = result.userId;
        const totalActivitycount = result.totalActivity.activityCount;
        console.log("totalActivityCount: ", totalActivitycount);
        console.log("response:", response);
        console.log("response.data: ", response.data);
        console.log("response.data.data: ", response.data.data);

        // 활동 유형별 배열 내부 객체에 활동 유형 구별가능하도록 sort key 추가
        let allCreativeActivity = result.totalActivity.allcreativeActivity;
        allCreativeActivity.map((item) => {
          item.sort = "creative";
        });

        let allSubjectDetailedActivity =
          result.totalActivity.allSubjectDetailedActivity;
        allSubjectDetailedActivity.map((item) => {
          item.sort = "subject";
        });

        let allPrizeActivity = result.totalActivity.allPrizeActivity;

        allPrizeActivity.map((item) => {
          item.sort = "prize";
        });

        let allBookActivity = result.totalActivity.allBookActivity;

        allBookActivity.map((item) => {
          item.sort = "book";
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
        setUserInfo(data);
        if (data.allActivity.length === 0) {
          // var activityList = document.getElementById("activity_list");
          // console.log("no data activityList: ", activityList);
          // activityList.innerText = `아직 해당 조건으로 작성한 활동이 없습니다.`;
        }
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getUserInfo(sortQuery, semesterQuery);
  }, []);

  const parentFunction = (data, activityId) => {
    setBannerClicked(data);

    // GreenMentorBanner를 클릭한 것이 state에 bookean으로 담기면 모달창 출력
    // 모달창 전체
    var modal = document.getElementById("mypage_detail_div");
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
              <select className="semester_select" onClick={handleSemester}>
                <option>all</option>
                <option>1-1</option>
                <option>1-2</option>
                <option>2-1</option>
                <option>2-2</option>
                <option>3-1</option>
                <option>3-2</option>
              </select>
            </div>
            <div className="menu_btn">
              <img
                src={menu_whole}
                alt="all"
                width="80"
                height="40"
                onClick={() => handleActivitySort("all")}
              />

              <img
                src={menu_green}
                alt="green"
                width="80"
                height="40"
                onClick={() => handleActivitySort("creative")}
              />

              <img
                src={menu_red}
                alt="red"
                width="80"
                height="40"
                onClick={() => handleActivitySort("subject")}
              />

              <img
                src={menu_pink}
                alt="pink"
                width="80"
                height="40"
                onClick={() => handleActivitySort("prize")}
              />

              <img
                src={menu_blue}
                alt="blue"
                width="80"
                height="40"
                onClick={() => handleActivitySort("book")}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="mypage3">
        <div className="activity_list" id="activity_list">
          {userInfo.allActivity &&
            userInfo.allActivity.map((item) => {
              if (item.sort === "creative") {
                return (
                  <GreenMypageBanner
                    activityId={item.activityId}
                    name={item.name}
                    activityType="창체활동"
                    startDate={item.startDate}
                    endDate={item.endDate}
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
                  <PinkMypageBanner
                    activityId={item.activityId}
                    name={item.name}
                    type="수상경력"
                    date={item.date}
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
