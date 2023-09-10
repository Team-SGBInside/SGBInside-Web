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
import { Link, useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../lib/cookie";
import RedMypageBanner from "./RedMypageBanner";
import BlueMypageBanner from "./BlueMypageBanner";
import GreenMypageBanner from "./GreenMypageBanner";
import PinkMypageBanner from "./PinkMypageBanner";

function MyPageInfo() {
  console.log("Hi i'm first");
  const navigator = useNavigate();

  const [userInfo, setUserInfo] = useState({});
  const [semester, setSemester] = useState("all");
  const [activitySort, setActivitySort] = useState("all");
  const [bannerClicked, setBannerClicked] = useState(false);
  const [clickedActivity, setClickedActivity] = useState({});

  console.log("bannerClicked: ", bannerClicked);

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
    getUserInfo(sortQuery, semesterQuery);
  };

  const handleActivitySort = (sort) => {
    setActivitySort(sort);
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
          ...allCreativeActivity,
          ...allSubjectDetailedActivity,
          ...allPrizeActivity,
          ...allBookActivity,
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

  // 모달창 닫기 버튼
  const closeBtnHandler = () => {
    var modal = document.getElementById("mypage_detail_div");
    console.log("닫기버튼 눌림");
    modal.style.display = "none";
  };

  // 모달창 수정 버튼
  function editBtnHandler({ activity }) {
    console.log("수정버튼 눌림");
    console.log("activity: ", activity);

    if (activity.sort === "creative") {
      navigator("/mypage/edit", {
        state: {
          sort: "creative",
          activityId: activity.activityId,
          name: activity.name,
          startDate: activity.startDate,
          endDate: activity.endDate,
          semester: activity.semester,
          activityType: activity.activityType,
          role: activity.role,
          thoughts: activity.thoughts,
        },
      });
    }
    if (activity.sort === "subject") {
      navigator("/mypage/edit", {
        state: {
          sort: "subject",
          activityId: activity.activityId,
          subjectName: activity.subjectName,
          subjectContent: activity.subjectContent,
          mainActivity: activity.mainActivity,
          startDate: activity.startDate,
          endDate: activity.endDate,
          activitySemester: activity.activitySemester,
          activityContentDetail: activity.activityContentDetail,
          subjectFurtherStudy: activity.subjectFurtherStudy,
        },
      });
    }

    if (activity.sort === "prize") {
      navigator("/mypage/edit", {
        state: {
          sort: "prize",
          activityId: activity.activityId,
          semester: activity.semester,
          date: activity.date,
          name: activity.name,
          prize: activity.prize,
          prizeImage: activity.prizeImage,
          role: activity.role,
          thoughts: activity.thoughts,
          type: activity.type,
        },
      });
    }
    if (activity.sort === "book") {
      navigator("/mypage/edit", {
        state: {
          sort: "book",
          activityId: activity.activityId,
          semester: activity.semester,
          endDate: activity.endDate,
          titleAuthor: activity.titleAuthor,
          relatedSubject: activity.relatedSubject,
          thoughts: activity.thoughts,
          quote1: activity.quote1,
          quote2: activity.quote2,
          quote3: activity.quote3,
          quote4: activity.quote4,
          quote5: activity.quote5,
        },
      });
    }
  }

  // 모달창 삭제 버튼
  const delBtnHandler = (activityId, sort) => {
    if (confirm("정말로 이 활동 기록을 삭제하시겠어요?") == true) {
      axios
        .delete(`http://3.37.215.18:3000/mypage/${sort}/${activityId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("accessToken")}`,
            withCredentials: true,
          },
        })
        .then((response) => {
          alert("삭제되었습니다.");
          console.log("delete response: ", response);
          location.reload(); // 새로고침
        })
        .catch((error) => {
          alert("삭제에 실패했습니다.");
          console.log(error);
        });
    } else {
      return;
    }
  };

  function parentFunction(data, sort, id) {
    setBannerClicked(data);
    console.log("data, sort, id :", data, sort, id);

    // GreenMentorBanner를 클릭한 것이 state에 boolean으로 담기면 모달창 출력
    // 모달창 전체
    var modal = document.getElementById("mypage_detail_div");
    if (modal.style.display === "none") {
      modal.style.display = "block";
      console.log("flexxxxed");
    } else {
      console.log("modal.style,display: ", modal.style.display);
      modal.style.display = "none";
      console.log("modal.style.display: ", modal.style.display);
    }

    if (sort === "창체활동") {
      const activity = userInfo.allActivity.filter((obj) => {
        return obj.sort === "creative" && obj.activityId === id;
      });
      console.log("activity: ", activity); // [{}]

      setClickedActivity(activity[0], function () {
        console.log("clickedActivity: ", clickedActivity);
      });
      console.log("clickedActivity: ", clickedActivity);

      // 창체 활동 객체 내부의 전체 필드
      const activityId = activity[0].activityId;
      const sort = activity[0].sort; // creative
      const name = activity[0].name;
      const startDate = activity[0].startDate;
      const endDate = activity[0].endDate;
      const semester = activity[0].semester;
      const activityType = activity[0].activityType;
      const thoughts = activity[0].thoughts;
      const role = activity[0].role;
      
      modal.innerText = " "

      var titleDiv = document.createElement("div");
      titleDiv.id = "mypage_detail_title";
      titleDiv.innerText = `창의적 체험활동 기록 상세보기🔍`;
      modal.appendChild(titleDiv);

      var contentDiv = document.createElement("div");
      contentDiv.id = "mypage_detail_content";
      contentDiv.innerHTML = `
        ${name} | ${startDate} ~ ${endDate} | ${semester} | ${activityType}<br>
      `;
      modal.appendChild(contentDiv);

      var sgbDiv = document.createElement("div");
      sgbDiv.id = "mypage_detail_sgb";
      sgbDiv.innerHTML=`
      실제 생활기록부 기재양식<br><hr>
      ${name}(${startDate} ~ ${endDate}) ${role}<br><hr>
      ${thoughts || "-"}<br>`;
      modal.appendChild(sgbDiv);

      var closeButton = document.createElement("button");
      modal.appendChild(closeButton);
      closeButton.id = "mypage_detail_closebutton";
      closeButton.addEventListener("click", closeBtnHandler);
      closeButton.innerText = "닫기";

      var fixButton = document.createElement("button");
      modal.appendChild(fixButton);
      fixButton.id = "mypage_detail_fixbutton";
      fixButton.innerText = "수정";
      fixButton.addEventListener("click", function () {
        editBtnHandler({ activity: activity[0] });
      });

      var deleteButton = document.createElement("button");
      modal.appendChild(deleteButton);
      deleteButton.id = "mypage_detail_deletebutton";
      deleteButton.innerText = "삭제";
      deleteButton.addEventListener("click", function () {
        console.log("about to delete : ", activityId, sort);
        delBtnHandler(activityId, sort);
      });

      var copyButton = document.createElement("button");
      modal.appendChild(copyButton);
      copyButton.id = "mypage_detail_copybutton";
      copyButton.innerText = "복사";
      copyButton.addEventListener("click", function () {
        var sgbContent = document.getElementById("mypage_detail_sgb").innerHTML;
        sgbContent = sgbContent.replace(/<br>/g, '\n');
        sgbContent = sgbContent.replace(/<hr>/g, ' ');
        // 복사할 내용을 클립보드에 복사
        const tempTextarea = document.createElement("textarea");
        tempTextarea.value = sgbContent;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextarea);
      
        alert("클립보드에 내용이 복사되었습니다. 원하는 곳에 붙여넣어 사용하세요.");
      });
    }

    if (sort === "세부능력") {
      const activity = userInfo.allActivity.filter((obj) => {
        return obj.sort === "subject" && obj.activityId === id;
      });
      console.log("activity: ", activity);
      setClickedActivity(activity[0], function () {
        console.log("clickedActivity: ", clickedActivity);
      });
      console.log("clickedActivity: ", clickedActivity);

      // 세특 전체 필드
      const activityId = activity[0].activityId;
      const sort = activity[0].sort;
      const activitySemester = activity[0].activitySemester;
      const startDate = activity[0].startDate;
      const endDate = activity[0].endDate;
      const subjectName = activity[0].subjectName;
      const subjectContent = activity[0].subjectContent;
      const mainActivity = activity[0].mainActivity;
      const activityContentDetail = activity[0].activityContentDetail;
      const subjectFurtherStudy = activity[0].subjectFurtherStudy;
      const writerId = activity[0].writerId;

      modal.innerText = ` `;

      var titleDiv = document.createElement("div");
      titleDiv.id = "mypage_detail_title";
      titleDiv.innerText = `세부능력 및 특기사항 기록 상세보기🔍`;
      modal.appendChild(titleDiv);

      var contentDiv = document.createElement("div");
      contentDiv.id = "mypage_detail_content";
      contentDiv.innerHTML = `
       ${subjectName}: ${mainActivity} | ${startDate} ~ ${endDate} | ${activitySemester}<br>
      ${subjectName} - ${subjectContent}<br>`;
      modal.appendChild(contentDiv);

      var sgbDiv = document.createElement("div");
      sgbDiv.id = "mypage_detail_sgb";
      sgbDiv.innerHTML=`
      실제 생활기록부 기재양식<br><hr>
      ${subjectName} ${mainActivity} (${startDate} ~ ${endDate}) 
      ${subjectFurtherStudy}<hr>`;
      modal.appendChild(sgbDiv);

      var closeButton = document.createElement("button");
      modal.appendChild(closeButton);
      closeButton.id = "mypage_detail_closebutton";
      closeButton.addEventListener("click", closeBtnHandler);
      closeButton.innerText = "닫기";

      var fixButton = document.createElement("button");
      modal.appendChild(fixButton);
      fixButton.id = "mypage_detail_fixbutton";
      fixButton.innerText = "수정";
      fixButton.addEventListener("click", function () {
        editBtnHandler({ activity: activity[0] });
      });

      var deleteButton = document.createElement("button");
      modal.appendChild(deleteButton);
      deleteButton.id = "mypage_detail_deletebutton";
      deleteButton.innerText = "삭제";
      deleteButton.addEventListener("click", function () {
        console.log("about to delete : ", activityId, sort);
        delBtnHandler(activityId, sort);
      });

      var copyButton = document.createElement("button");
      modal.appendChild(copyButton);
      copyButton.id = "mypage_detail_copybutton";
      copyButton.innerText = "복사";
      copyButton.addEventListener("click", function () {
        var sgbContent = document.getElementById("mypage_detail_sgb").innerHTML;
        sgbContent = sgbContent.replace(/<br>/g, '\n');
        sgbContent = sgbContent.replace(/<hr>/g, ' ');
        // 복사할 내용을 클립보드에 복사
        const tempTextarea = document.createElement("textarea");
        tempTextarea.value = sgbContent;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextarea);
      
        alert("클립보드에 내용이 복사되었습니다. 원하는 곳에 붙여넣어 사용하세요.");
      });
    }

    if (sort === "수상경력") {
      const activity = userInfo.allActivity.filter((obj) => {
        return obj.sort === "prize" && obj.activityId === id;
      });
      console.log("activity: ", activity);
      setClickedActivity(activity[0], function () {
        console.log("clickedActivity: ", clickedActivity);
      });
      console.log("clickedActivity: ", clickedActivity);

      // 수상 전체 필드
      const activityId = activity[0].activityId;
      const sort = activity[0].sort;
      const semester = activity[0].semester;
      const date = activity[0].date;
      const name = activity[0].name;
      const prize = activity[0].prize;
      const prizeImage = activity[0].prizeImage;

      const role = activity[0].role;
      const thoughts = activity[0].thoughts;
      const type = activity[0].type;
      const writerId = activity[0].writerId;

      let image = document.createElement("img");
      image.src = prizeImage;

      modal.innerText = ` `;

      var titleDiv = document.createElement("div");
      titleDiv.id = "mypage_detail_title";
      titleDiv.innerText = `수상경력 기록 상세보기🔍`;
      modal.appendChild(titleDiv);

      var contentDiv = document.createElement("div");
      contentDiv.id = "mypage_detail_content";
      contentDiv.innerHTML = `
        ${name} | ${date} | ${semester}<br>
      `;
      modal.appendChild(contentDiv);

      var parentDiv = document.createElement("div");
      parentDiv.style.display = "flex";
      parentDiv.style.maxWidth = "1000px";
      parentDiv.style.maxHeight = "250px";
      modal.appendChild(parentDiv);

      var sgbDiv = document.createElement("div");
      sgbDiv.id = "mypage_detail_sgb";
      sgbDiv.innerHTML=`
      실제 생활기록부 기재양식<br><hr>
      ${name} / ${prize || "-"} / ${date}<br><hr> 
      ${role}<br>
      ${thoughts || "-"}`;
      parentDiv.appendChild(sgbDiv);
      
      var imageDiv = document.createElement("div");
      imageDiv.style.maxWidth = "50px !important";
      imageDiv.id = "mypage_detail_image";
      parentDiv.appendChild(image);
    

      var closeButton = document.createElement("button");
      modal.appendChild(closeButton);
      closeButton.id = "mypage_detail_closebutton";
      closeButton.addEventListener("click", closeBtnHandler);
      closeButton.innerText = "닫기";

      var fixButton = document.createElement("button");
      modal.appendChild(fixButton);
      fixButton.id = "mypage_detail_fixbutton";
      fixButton.innerText = "수정";
      fixButton.addEventListener("click", function () {
        editBtnHandler({ activity: activity[0] });
      });

      var deleteButton = document.createElement("button");
      modal.appendChild(deleteButton);
      deleteButton.id = "mypage_detail_deletebutton";
      deleteButton.innerText = "삭제";
      deleteButton.addEventListener("click", function () {
        console.log("about to delete : ", activityId, sort);
        delBtnHandler(activityId, sort);
      });

      var copyButton = document.createElement("button");
      modal.appendChild(copyButton);
      copyButton.id = "mypage_detail_copybutton";
      copyButton.innerText = "복사";
      copyButton.addEventListener("click", function () {
        var sgbContent = document.getElementById("mypage_detail_sgb").innerHTML;
        sgbContent = sgbContent.replace(/<br>/g, '\n');
        sgbContent = sgbContent.replace(/<hr>/g, ' ');
        // 복사할 내용을 클립보드에 복사
        const tempTextarea = document.createElement("textarea");
        tempTextarea.value = sgbContent;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextarea);
      
        alert("클립보드에 내용이 복사되었습니다. 원하는 곳에 붙여넣어 사용하세요.");
      });
    }

    if (sort === "독서활동") {
      const activity = userInfo.allActivity.filter((obj) => {
        return obj.sort === "book" && obj.activityId === id;
      });
      console.log("activity: ", activity);
      setClickedActivity(activity[0], function () {
        console.log("clickedActivity: ", clickedActivity);
      });
      console.log("clickedActivity: ", clickedActivity);

      // 독서 전체 필드
      const activityId = activity[0].activityId;
      const sort = activity[0].sort;
      const semester = activity[0].semester;
      const endDate = activity[0].endDate;
      const titleAuthor = activity[0].titleAuthor;
      const relatedSubject = activity[0].relatedSubject;
      const thoughts = activity[0].thoughts;
      const quote1 = activity[0].quote1;
      const quote2 = activity[0].quote2;
      const quote3 = activity[0].quote3;
      const quote4 = activity[0].quote4;
      const quote5 = activity[0].quote5;
      const writerId = activity[0].writerId;

      modal.innerText = ``;

      var titleDiv = document.createElement("div");
      titleDiv.id = "mypage_detail_title";
      titleDiv.innerText = `독서활동 기록 상세보기🔍`;
      modal.appendChild(titleDiv);

      var contentDiv = document.createElement("div");
      contentDiv.id = "mypage_detail_content";
      contentDiv.innerHTML = `
      ${titleAuthor} | ${endDate} | ${semester} | ${relatedSubject}<br>
      `;
      modal.appendChild(contentDiv);

      var sgbDiv = document.createElement("div");
      sgbDiv.id = "mypage_detail_sgb";
      sgbDiv.style.maxWidth = "250px";
      sgbDiv.innerHTML=`
      <hr>
      ${thoughts}<br>
      <hr>
      &nbsp; ${quote1 || "-"}<br>
      &nbsp; ${quote2 || "-"}<br>
      &nbsp; ${quote3 || "-"}<br>
      &nbsp; ${quote4 || "-"}<br>
      &nbsp; ${quote5 || "-"}<br>
      `;
      modal.appendChild(sgbDiv);

      var closeButton = document.createElement("button");
      modal.appendChild(closeButton);
      closeButton.id = "mypage_detail_closebutton";
      closeButton.addEventListener("click", closeBtnHandler);
      closeButton.innerText = "닫기";

      var fixButton = document.createElement("button");
      modal.appendChild(fixButton);
      fixButton.id = "mypage_detail_fixbutton";
      fixButton.innerText = "수정";
      fixButton.addEventListener("click", function () {
        editBtnHandler({ activity: activity[0] });
      });

      var deleteButton = document.createElement("button");
      modal.appendChild(deleteButton);
      deleteButton.id = "mypage_detail_deletebutton";
      deleteButton.innerText = "삭제";
      deleteButton.addEventListener("click", function () {
        console.log("about to delete : ", activityId, sort);
        delBtnHandler(activityId, sort);
      });

      var copyButton = document.createElement("button");
      modal.appendChild(copyButton);
      copyButton.id = "mypage_detail_copybutton";
      copyButton.innerText = "복사";
      copyButton.addEventListener("click", function () {
        var sgbContent = document.getElementById("mypage_detail_sgb").innerHTML;
        sgbContent = sgbContent.replace(/<br>/g, '\n');
        sgbContent = sgbContent.replace(/<hr>/g, ' ');
        sgbContent = sgbContent.replace(/&nbsp;/g, ' ');
        // 복사할 내용을 클립보드에 복사
        const tempTextarea = document.createElement("textarea");
        tempTextarea.value = sgbContent;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextarea);
      
        alert("클립보드에 내용이 복사되었습니다. 원하는 곳에 붙여넣어 사용하세요.");
      });
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
        <div className="infobox2">
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
            <div className="menu_btn">
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
                src={activeMenu === "subject" ? menu_red_active : menu_red}
                alt="red"
                width="80"
                height="40"
                onClick={() => handleMenuClick("subject")}
              />

              <img
                src={activeMenu === "prize" ? menu_pink_active : menu_pink}
                alt="pink"
                width="80"
                height="40"
                onClick={() => handleMenuClick("prize")}
              />

              <img
                src={activeMenu === "book" ? menu_blue_active : menu_blue}
                alt="blue"
                width="80"
                height="40"
                onClick={() => handleMenuClick("book")}
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
                    sort="수상경력"
                    type={item.type}
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
}

export default MyPageInfo;
