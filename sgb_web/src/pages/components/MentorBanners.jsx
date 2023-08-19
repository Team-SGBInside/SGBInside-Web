import React from "react";
import green_mentor_banner from "./img/green_mentor_banner.png";
import pink_mentor_banner from "./img/pink_mentor_banner.png";
import "./Banners.css";
import { Link } from "react-router-dom";
import { getCookie, setCookie, removeCookie } from "../../lib/cookie";

const MentorBanners = () => {
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
    <div className="banners">
      <Link to="/greenRecordMentor">
        <span className="green-banner">
          <img
            src={green_mentor_banner}
            alt="green_banner"
            width="500"
            height="600"
            onClick={(e) => checkIfLogin(e)}
          />
        </span>
      </Link>
      <Link to="/pinkRecordMentor">
        <span className="pink-banner">
          <img
            src={pink_mentor_banner}
            alt="green_banner"
            width="500"
            height="600"
            onClick={(e) => checkIfLogin(e)}
          />
        </span>
      </Link>
    </div>
  );
};

export default MentorBanners;
