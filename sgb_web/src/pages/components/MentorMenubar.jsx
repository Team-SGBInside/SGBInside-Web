import React from "react";
import "./Menubar.css";
import { Link } from "react-router-dom";
import { getCookie, setCookie, removeCookie } from "../../lib/cookie";

const MentorMenubar = () => {
  const checkIfLogin = (e) => {
    console.log("checking ...");
    const userId = getCookie("userId");
    const token = getCookie("accessToken");

    if (!userId || !token) {
      // 미 로그인시, Link 태그를 통해 url 이동하는 것 방지
      e.preventDefault();
      alert("생기부 인사이드는 로그인 후 이용가능합니다.");

      return;
    } else {
      return;
    }
  };
  return (
    <>
      <div class="menu">
        <Link to="/greenRecordMentor" style={{ textDecoration: "none" }}>
          <span class="green" onClick={(e) => checkIfLogin(e)}>
            창체 활동 팁 추천하기
          </span>
          &nbsp;
        </Link>
        <span className="menubar_line">&nbsp;|&nbsp;</span>
        <Link to="/pinkRecordMentor" style={{ textDecoration: "none" }}>
          <span class="pink" onClick={(e) => checkIfLogin(e)}>
            {" "}
            수상경력 팁 추천하기
          </span>
          &nbsp;
        </Link>
        <span className="menubar_line">&nbsp;&nbsp;</span>
      </div>
    </>
  );
};

export default MentorMenubar;
