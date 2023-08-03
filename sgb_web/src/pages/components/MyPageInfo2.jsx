import React from "react";
import axios from "axios";
import "./MyPageInfo.css";
import InfoBox from "./img/InfoBox.png";
import menu_whole from "./img/menu_whole.png";
import green_clicked from "./img/green_clicked.png";
import menu_red from "./img/menu_red.png";
import menu_pink from "./img/menu_pink.png";
import menu_blue from "./img/menu_blue.png";
import mypage_green from './img/mypage_green.png';
import mypage_red from './img/mypage_red.png';
import mypage_pink from './img/mypage_pink.png';
import mypage_blue from './img/mypage_blue.png';
import mypage_blue2 from './img/mypage_blue2.png';
import mypage_green2 from './img/mypage_green2.png';
import { Link } from 'react-router-dom';

const getUserInfo = async () => {
  // MyPageInfo가 렌더링될 때 getUserInfo가 잘 호출되는지 콘솔로 확인
  console.log("used22");
  try {
    // const writerId = 9;
    const sortQuery = "all";
    const semseterQuery = "all";
    const response = await axios.post(
      `http://3.37.215.18:3000/mypage?sort=${sortQuery}&semester=${semseterQuery}`,
      {
        writerId: 9,
      },      
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = response.data.data;
    const age = result.age;
    const grade = result.grade;
    const school = result.school;
    const isTeen = result.isTeen;
    const name = result.name;
    const totalActivitycount = result.totalActivity.activityCount;
    // 순차적으로 response를 찍어보는 코드인데, 필요에 따라 취사선택하세요
    console.log(response);
    console.log(response.data);
    console.log(response.data.data);
    const data = {
      age,
      grade,
      school,
      isTeen,
      name,
      totalActivitycount,
    };
    return data;
  } catch (error) {
    console.log(error);
  }
};
// userInfo 변수에는 getUserInfo의 호출 결과가 담김(async함수이기 때문에 await문 사용)
// -> return되는 것은 data이고,
// data 안에는 age, grade, 기타등등이 있음
const userInfo = await getUserInfo();

const MyPageInfo = () => {
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
              <Link to="/mypage"><img src={menu_whole} alt="whole" width="80" height="40" />
              {''}</Link>
              <Link to="/greenClicked"><img src={green_clicked} alt="green" width="80" height="40" />
              {''}</Link>
              <Link to="/redClicked"><img src={menu_red} alt="red" width="80" height="40" />
              {''}</Link>
              <Link to="/pinkClicked"><img src={menu_pink} alt="pink" width="80" height="40" />
              {''}</Link>
              <Link to="/blueClicked"><img src={menu_blue} alt="blue" width="80" height="40" />
              {''}</Link>      
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div className="mypage3">
            <div className="activity_list">
                <img src={mypage_green} alt="green" width="553" height="130"/><br/>
                <img src={mypage_green2} alt="green2" width="553" height="130"/><br/>
            </div>
        </div>
    </>
  );
};

export default MyPageInfo;