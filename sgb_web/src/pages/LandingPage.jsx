import React from "react";
import "./LandingPage.css";
import landing_student from "./components/img/landing_student.png";
import landing_mentor from "./components/img/landing_mentor.png";
import { Link } from "react-router-dom";
import { getCookie, setCookie, removeCookie } from "../lib/cookie";

const LandingPage = () => {
  const userId = getCookie("userId");
  const token = getCookie("accessToken");

  // 미로그인 시 이미지 클릭 - 미로그인 홈으로 이동
  if (!userId || !token) {
    return (
      <body className="landing-body">
        <div className="landing-content">
          <h3 className="landing-light">너의 길을 오롯이 응원해,</h3>
          <h1 className="landing-bold">생기부 인사이드</h1>
          <div className="landing-btn">
            <Link to="/login">
              <img
                src={landing_student}
                alt="student"
                width="400"
                height="100"
              />{" "}
            </Link>
            <Link to="/mentorLogin">
              <img src={landing_mentor} alt="mentor" width="400" height="100" />
            </Link>
          </div>
        </div>
        <br />
      </body>
    );
  } else {
    return (
      // 로그인 시 이미지 클릭 - 로그인 홈으로 이동
      <body className="landing-body">
        <div className="landing-content">
          <h3 className="landing-light">너의 길을 오롯이 응원해,</h3>
          <h1 className="landing-bold">생기부 인사이드</h1>
          <div className="landing-btn">
            <Link to="/loginedHome">
              <img
                src={landing_student}
                alt="student"
                width="400"
                height="100"
              />{" "}
            </Link>
            <Link to="/loginedMentorHome">
              <img src={landing_mentor} alt="mentor" width="400" height="100" />
            </Link>
          </div>
        </div>
        <br />
      </body>
    );
  }
};

export default LandingPage;
