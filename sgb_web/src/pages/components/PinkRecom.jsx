import React, { useState } from "react";
import pinkform_bg from "./img/pinkform_bg.png";
import pink_talk from "./img/pink_talk.png";
import "./PinkRecom.css";
import axios from "axios";
import PinkMentorBanner from "./PinkMentorBanner";
import { getCookie, setCookie } from "../../lib/cookie";

function PinkRecom() {
  const [contest, setContest] = useState("");
  const trimmedContest = contest.split(" ").join(""); // 검색어 공백제거
  const [activityList, setActivityList] = useState([]);
  const [bannerClicked, setBannerClicked] = useState(false);

  const parentFunction = (data, activityId, writerSchoolMajor, writerGrade) => {
    setBannerClicked(data);

    // PinkMentorBanner를 클릭한 것이 state에 bookean으로 담기면 모달창 출력
    // 모달창 전체
    var modal = document.getElementById("pink_mentor_detail_div");
    console.log("modal:", modal);
    if (modal.style.display === "none") {
      modal.style.display = "flex";
    } else {
      modal.style.display = "none";
    }
    //modal.style.display = "flex";

    showPrizeActivityById(activityId, writerSchoolMajor, writerGrade);
  };

  // 모달창 출력 : 대학생 멘토의 수상경력 개별 조회
  const showPrizeActivityById = async (id, writerSchoolMajor, writerGrade) => {
    await axios({
      method: "get",
      url: `http://3.37.215.18:3000/recommend/prize/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
        withCredentials: true,
      },
    })
      .then((result) => {
        console.log("개별 수상경력 조회 성공");
        console.log(result);
        console.log(result.data.data); // 우리가 접근해야 하는 개별 활동 객체
        const activity = result.data.data;
        console.log(activity);
        var modal = document.getElementById("pink_mentor_detail_div");
        // innerHTML을 쓰면 태그까지 작성 가능
        modal.innerHTML = `
        <div id="flexchild_1">
        <div id="pink_modal_title">${writerSchoolMajor} ${writerGrade}학년 멘토의 수상경력</div>
          <div id="pink_modal_sgb_example">${activity.name} | ${activity.date} | ${activity.semester}</div>
          <div id="pink_modal_type_prize">${activity.type} / ${activity.prize}</div>
          <div id="pink_modal_role"><span>활동 내 역할 및 활동 내용</span> : ${activity.role}</div>
          <div id="pink_modal_semester"><span>수상 학기</span> : ${activity.semester}</div>
          <div id="pink_modal_date"><span>수상일자</span> : ${activity.date}</div>
          <div id="pink_modal_thoughts"><span>기타 조언 및 활동소감</span> : ${activity.thoughts}</div>
        </div>
        <div id="flexchild_2">
        </div>
        `;
        var prizeImg = document.createElement("img");
        var flexchild_2 = document.getElementById("flexchild_2");
        flexchild_2.appendChild(prizeImg);
        prizeImg.id = "pink_mentor_detail_prize_img";
        prizeImg.src = activity.prizeImage;
        prizeImg.style.maxWidth = "10%";
        var closeButton = document.createElement("button");
        modal.appendChild(closeButton);
        closeButton.id = "pink_mentor_detail_closebutton";
        closeButton.addEventListener("click", closeBtnHandler);
        closeButton.innerText = "닫기";
      })
      .catch((error) => {
        console.log("개별 수상경력 조회 실패");
        console.log(error);
      });
  };

  // 모달창 닫기 버튼
  const closeBtnHandler = () => {
    var modal = document.getElementById("pink_mentor_detail_div");
    console.log("닫기버튼 눌림");
    modal.style.display = "none";
  };

  const handleContest = (e) => {
    e.preventDefault();
    setContest(e.target.value);
  };

  const onKeySubmitSearch = async (e) => {
    if (e.key === "Enter") {
      if (!contest || trimmedContest === "") {
        alert("검색어를 입력해주세요");
        return;
      }
      await axios({
        method: "post",
        url: `http://3.37.215.18:3000/recommend/prize`,
        data: {
          contest: contest,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("accessToken")}`,
          withCredentials: true,
        },
      })
        .then((result) => {
          console.log("요청성공");
          console.log(result);
          console.log(result.data.data); // 전체 창체 활동 배열
          setActivityList(result.data.data);
          console.log("activityList: ", activityList);

          if (result.data.data.length === 0) {
            alert(
              "해당 대회에 참여한 멘토의 수상경력을 조회하지 못했습니다.\n\n다른 검색어로 조회해볼까요?\n\n생기부 인사이드는 더 많은 멘토들과의 만남을\n계획중이니 조금만 기다려주세요!"
            );
          }
        })
        .catch((error) => {
          alert("멘토 수상경력 조회 실패");
          console.log("멘토 수상경력 조회 실패");
          console.log(error);
        });
    }
  };

  return (
    <div className="pinkrecom">
      <div className="pinkrecom_bg">
        <img src={pinkform_bg} alt="pinkform_bg" width="1200" height="1310" />
        <div className="pinkrecom_content">
          <div className="pink_talk">
            <img src={pink_talk} alt="pink_talk" width="555" height="130" />
          </div>
          <br />
          <br />
          <div className="search_div_pink">
            <input
              type="search"
              placeholder="검색어를 입력 하세요..."
              name="query"
              className="search_input_pink"
              onChange={handleContest}
              onKeyPress={onKeySubmitSearch}
            />
          </div>
          <br />
          <div className="pink_mentor_banner_div">
            {activityList &&
              activityList.map((item) => (
                <PinkMentorBanner
                  activityId={item.activityId}
                  name={item.name}
                  type={item.type}
                  writerSchoolMajor={item.writerSchoolMajor}
                  writerGrade={item.writerGrade}
                  parentFunction={parentFunction}
                />
              ))}
          </div>
          <div id="pink_mentor_detail_div"></div>
        </div>
      </div>
    </div>
  );
}

export default PinkRecom;
