import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyPageInfo.css";
import InfoBox from "./img/InfoBox.png";
import menu_whole from "./img/menu_whole.png";
import menu_whole_active from "./img/menu_whole_active.png";
import menu_green from "./img/menu_green.png";
import menu_green_active from "./img/menu_green_active.png";
import menu_red from "./img/menu_red.png";
import menu_red_active from "./img/menu_red_active.png";
import menu_pink from "./img/menu_pink.png";
import menu_pink_active from "./img/menu_pink_active.png";
import menu_blue from "./img/menu_blue.png";
import menu_blue_active from "./img/menu_blue_active.png";
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
import GreenMypageActivityModal from "./GreenMypageActivityModal";
import RedMypageActivityModal from "./RedMypageActivityModal";

function MyPageInfo() {
  console.log("Hi i'm first");
  const [userInfo, setUserInfo] = useState({});
  const [semester, setSemester] = useState("all");
  const [activitySort, setActivitySort] = useState("all");
  const [bannerClicked, setBannerClicked] = useState(false);
  const [clickedActivity, setClickedActivity] = useState({});

  const tokenUserId = getCookie("userId");
  const token = getCookie("accessToken");
  if (!tokenUserId || !token) {
    console.log("cannnot get userId or token from cookie");
    return;
  }

  let semesterQuery = semester;
  let sortQuery = activitySort;
  const handleSemester = (event) => {
    setSemester(event.target.value);
    console.log("semester event.target: ", event.target);
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


        let allPrizeActivity = result.totalActivity.allPrizeActivity;

        allPrizeActivity.map((item) => {
          item.sort = "prize";
        });


        // 전체 활동 통합, 배열 내 인덱스 번호에 따른 uniqId로 id key 부여
        let allActivity = [
          ...allPrizeActivity,
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

  function parentFunction(data, sort, id) {
    setBannerClicked(data);
    console.log("data, sort, id :", data, sort, id);

    // GreenMentorBanner를 클릭한 것이 state에 boolean으로 담기면 모달창 출력
    // 모달창 전체
    var modal = document.getElementById("mypage_detail_div");
    if (modal.style.display === "none") {
      modal.style.display = "flex";
    } else {
      modal.style.display = "none";
    }

    // 모달창 닫기 버튼
    const closeBtnHandler = () => {
      var modal = document.getElementById("mypage_detail_div");
      console.log("닫기버튼 눌림");
      modal.style.display = "none";
    };

    if (sort === "창체활동") {
      const activity = userInfo.allActivity.filter((obj) => {
        return obj.sort === "creative" && obj.activityId === id;
      });
      console.log(activity); // [{}]
      setClickedActivity(activity[0]);
      console.log("clickedActivity: ", clickedActivity);
      /* 창체 전체 필드
      \n name: ${activity[0].name}
      \n activityType: ${activity[0].activityType}
      \n startDate: ${activity[0].startDate}
      \n endDate: ${activity[0].endDate}
      \n activityId: ${activity[0].activityId}
      \n semester: ${activity[0].semester}
      \n role: ${activity[0].role}
      \n thoughts: ${activity[0].thoughts}
      \n writerId: ${activity[0].writerId}
      */
      // modal.innerText = `sort: 창체
      // ${activity[0].name} | ${activity[0].startDate} ~ ${activity[0].endDate} | ${activity[0].semester} | ${activity[0].activityType}\n
      // ${activity[0].name}(${activity[0].startDate} ~ ${activity[0].endDate}) ${activity[0].role}\n
      // ${activity[0].thoughts}
      // `;
      var closeButton = document.createElement("button");
      modal.appendChild(closeButton);
      closeButton.id = "mypage_detail_closebutton";
      closeButton.addEventListener("click", closeBtnHandler);
      closeButton.innerText = "닫기";

      var fixButton = document.createElement("button");
      modal.appendChild(fixButton);
      fixButton.id = "mypage_detail_fixbutton";
      fixButton.innerText = "수정";

      var deleteButton = document.createElement("button");
      modal.appendChild(deleteButton);
      deleteButton.id = "mypage_detail_deletebutton";
      deleteButton.innerText = "삭제";

      var copyButton = document.createElement("button");
      modal.appendChild(copyButton);
      copyButton.id = "mypage_detail_copybutton";
      copyButton.innerText = "복사";
    }


    /* 수상 전체 필드 
      \n activityId: ${activity[0].activityId}
      \n semester: ${activity[0].semester}
      \n date: ${activity[0].date}
      \n name: ${activity[0].name}
      \n prize: ${activity[0].prize}
      \n role: ${activity[0].role}
      \n thoughts: ${activity[0].thoughts}
      \n type: ${activity[0].type}
      \n writerId: ${activity[0].writerId}
    */
    if (sort === "수상경력") {
      const activity = userInfo.allActivity.filter((obj) => {
        return obj.sort === "prize" && obj.activityId === id;
      });
      console.log("activity: ", activity);

      modal.innerText = `sort: 수상
      ${activity[0].name} | ${activity[0].date} | ${activity[0].semester}\n
      ${activity[0].name} / ${activity[0].prize} / ${activity[0].date}\n
      ${activity[0].role}\n
      ${activity[0].thoughts}`;
      var closeButton = document.createElement("button");
      modal.appendChild(closeButton);
      closeButton.id = "mypage_detail_closebutton";
      closeButton.addEventListener("click", closeBtnHandler);
      closeButton.innerText = "닫기";

      var fixButton = document.createElement("button");
      modal.appendChild(fixButton);
      fixButton.id = "mypage_detail_fixbutton";
      fixButton.innerText = "수정";

      var deleteButton = document.createElement("button");
      modal.appendChild(deleteButton);
      deleteButton.id = "mypage_detail_deletebutton";
      deleteButton.innerText = "삭제";

      var copyButton = document.createElement("button");
      modal.appendChild(copyButton);
      copyButton.id = "mypage_detail_copybutton";
      copyButton.innerText = "복사";
    }
  }

  const [activeMenu, setActiveMenu] = useState("all");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    handleActivitySort(menu); // 메뉴를 클릭하면 해당 메뉴에 해당하는 활동을 가져오도록 변경
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
        <div className="infobox2_mentor">
          <div className="total_inside">
            <span className="info_big">{userInfo.totalActivitycount}</span>개의
            생기부 인사이드
          </div>
          <br />
          <div className="semester_menu">
            <div className="semester">
              <select
                className="semester_select"
                onChange={(e) => handleSemester(e)}
              >
                <option value="all">all</option>
                <option value="1-1">1-1</option>
                <option value="1-2">1-2</option>
                <option value="2-1">2-1</option>
                <option value="2-2">2-2</option>
                <option value="3-1">3-1</option>
                <option value="3-2">3-2</option>
              </select>
            </div>
            <div className="menu_btn_mentor">
              <img
                src={activeMenu === "all" ? menu_whole_active : menu_whole}
                alt="all"
                width="80"
                height="40"
                onClick={() => handleMenuClick("all")}
              />

              <img
                src={activeMenu === "creative" ? menu_green_active : menu_green}
                alt="green"
                width="80"
                height="40"
                onClick={() => handleMenuClick("creative")}
              />

              <img
                src={activeMenu === "prize" ? menu_pink_active : menu_pink}
                alt="pink"
                width="80"
                height="40"
                onClick={() => handleMenuClick("prize")}
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
                    sort="창체활동"
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
                    sort="수상경력"
                    type={item.type}
                    date={item.date}
                    parentFunction={parentFunction}
                  />
                );
              }
            })}
        </div>
      </div>
    </>
  );
}

export default MyPageInfo;
