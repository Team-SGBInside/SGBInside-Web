import React from "react";
import "./Menubar.css";
import { Link } from "react-router-dom";
import { getCookie, setCookie, removeCookie } from "../../lib/cookie";

const Menubar = () => {
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
        <Link to="/greenRecord" style={{ textDecoration: "none" }}>
          <span class="green" onClick={(e) => checkIfLogin(e)}>
            창의적 체험활동
          </span>
          &nbsp;
        </Link>
        <span className="menubar_line">&nbsp;|&nbsp;</span>
        <Link to="/redRecord" style={{ textDecoration: "none" }}>
          <span class="red" onClick={(e) => checkIfLogin(e)}>
            {" "}
            세부능력 및 특기사항
          </span>
          &nbsp;
        </Link>
        <span className="menubar_line">&nbsp;|&nbsp;</span>
        <Link to="/pinkRecord" style={{ textDecoration: "none" }}>
          <span class="pink" onClick={(e) => checkIfLogin(e)}>
            {" "}
            수상경력
          </span>
          &nbsp;
        </Link>
        <span className="menubar_line">&nbsp;|&nbsp;</span>
        <Link to="/blueRecord" style={{ textDecoration: "none" }}>
          <span class="blue" onClick={(e) => checkIfLogin(e)}>
            {" "}
            독서활동상황
          </span>
          &nbsp;
        </Link>
      </div>
    </>
  );
};

export default Menubar;
