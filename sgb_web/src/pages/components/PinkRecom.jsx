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

  const parentFunction = (data, activityId) => {
    setBannerClicked(data);

    // PinkMentorBanner를 클릭한 것이 state에 bookean으로 담기면 모달창 출력
    // 모달창 전체
    var modal = document.getElementById("pink_mentor_detail_div");
    console.log("modal:", modal);
    modal.style.display = "flex";

    showPrizeActivityById(activityId);
  };

  // 모달창 출력 : 대학생 멘토의 수상경력 개별 조회
  const showPrizeActivityById = async (id) => {
    await axios({
      method: "get",
      url: `http://3.37.215.18:3000/recommend/prize/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    })
      .then((result) => {
        console.log("개별 수상경력 조회 성공");
        console.log(result);
        console.log(result.data.data); // 우리가 접근해야 하는 개별 활동 객체
        const activity = result.data.data;
        console.log(activity);
        var modal = document.getElementById("pink_mentor_detail_div");
        modal.innerText = `
          수상 유형: ${activity.type}
          ${activity.name} | ${activity.date} | ${activity.semester}
          ${activity.name}(피그마에 ???라고 나와있는데 뭔지 모르겠음) / ${activity.prize} / ${activity.semester}\n
          활동 내 역할과 구체적인 활동 내용: ${activity.role}
          수상 학기: ${activity.semester}
          수상일자: ${activity.date}
          기타 조언 및 활동소감: ${activity.thoughts}`;
        var prizeImg = document.createElement("img");
        modal.appendChild(prizeImg);
        prizeImg.id = "pink_mentor_detail_prize_img";
        prizeImg.src = activity.prizeImage;
        prizeImg.width = "10vw";
      })
      .catch((error) => {
        console.log("개별 수상경력 조회 실패");
        console.log(error);
      });
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
