import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Hello.css";
import mypage_btn from "./img/mypage_btn.png";
import logout from "./img/logout.png";
import { Link } from "react-router-dom";
import { getCookie, setCookie, removeCookie } from "../../lib/cookie";

const Hello = () => {
  const [userInfo, setUserInfo] = useState({});

  const userId = getCookie("userId");
  const token = getCookie("accessToken");

  if (!userId || !token) {
    console.log("cannnot get userId or token from cookie");
    return;
  } else {
    console.log("userId or token found");
  }

  function logOut() {
    // alert에서 확인을 누를 경우에 쿠키 삭제
    if (confirm("로그아웃하시겠습니까?") == true) {
      removeCookie("userId");
      removeCookie("accessToken");
      console.log("userId", getCookie("userId"));
      console.log("accessToken", getCookie("accessToken"));
      window.location.href = "/home";
    } else {
      return;
    }
  }

  //* 마이페이지 계정정보 조회 및 전체활동 조회 api의 response data에서 계정정보만 활용하기
  const sortQuery = "all";
  const semseterQuery = "all";
  useEffect(() => {
    axios
      .get(
        `http://13.209.110.66:3000/mypage?sort=${sortQuery}&semester=${semseterQuery}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("accessToken")}`,
            withCredentials: true,
          },
        }
      )
      .then((response) => {
        setUserInfo(response.data.data);
        // 여기서 userInfo state값 콘솔을 찍으면 undefined가 나오지만, state는 정상적으로 반영되는 중임.
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="hello">
        <span className="light-text">오늘도 열공하세요, {userInfo.name}</span>
        &nbsp;
        <span className="light-text">님!</span>
        &nbsp; <br />
        <div id="mypage-btn-hello">
          <Link to="/mypage">
            <img src={mypage_btn} alt="my_page" width="85" height="28" />
          </Link>
        </div>
        <div id="logout-btn-hello">
          <img src={logout} width="85" height="28" onClick={logOut} />
        </div>
      </div>
    </>
  );
};

export default Hello;
