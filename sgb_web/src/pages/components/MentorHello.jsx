import React from "react";
import axios from "axios";
import "./Hello.css";
import mypage_btn from "./img/mypage_btn.png";
import { Link } from "react-router-dom";

const getUserInfo = async () => {
  // Hello가 렌더링될 때 getUserInfo가 잘 호출되는지 콘솔로 확인
  console.log("used11");
  try {
    const writerId = 9;
    const sortQuery = "all";
    const semseterQuery = "all";
    const response = await axios.get(
      `http://3.37.215.18:3000/mypage/${writerId}?sort=${sortQuery}&semester=${semseterQuery}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = response.data.data;
    const age = result.age;
    const grade = result.grade;
    const isTeen = result.isTeen;
    // 일단 Hello에서는 이름만 받아오면 되는 상태
    const name = result.name;
    const totalActivitycount = result.totalActivity.activityCount;
    // 순차적으로 response를 찍어보는 코드인데, 필요에 따라 취사선택하세요
    console.log(response);
    console.log(response.data);
    console.log(response.data.data);
    const data = {
      // age,
      // grade,
      // isTeen,
      name,
      // totalActivitycount,
    };
    return data;
  } catch (error) {
    console.log(error);
  }
};
// userInfo 변수에는 getUserInfo의 호출 결과가 담김(async함수이기 때문에 await문 사용)
// -> return되는 것은 data이고,
// data 안에는 name이 있음
const userInfo = await getUserInfo();
const MentorHello = () => {
  return (
    <>
      <div className="hello">
        <span className="light-text">오늘도 열공하세요, {userInfo.name}</span>
        &nbsp;
        <span className="light-text">님!</span>
        &nbsp; <br />
        <Link to="/mypage">
          <img src={mypage_btn} alt="my_page" width="85" height="28" />
        </Link>
      </div>
    </>
  );
};

export default MentorHello;