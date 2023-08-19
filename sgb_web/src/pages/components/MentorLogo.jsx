import React from "react";
import sgb_logo_mentor from "./img/sgb_logo_mentor.png";
import { Link } from "react-router-dom";
import { getCookie, setCookie, removeCookie } from "../../lib/cookie";

const MentorLogo = () => {
  const userId = getCookie("userId");
  const token = getCookie("accessToken");

  // 미로그인 시 로고 클릭 - 미로그인 멘토 홈으로 이동
  if (!userId || !token) {
    return (
      <Link to="/mentorHome">
        <div class="logo">
          <div>
            <img src={sgb_logo_mentor} alt="logo" width="264.5" height="87" />
          </div>
        </div>
      </Link>
    );
  } else {
    // 로그인 시 로고 클릭 - 로그인 멘토 홈으로 이동
    return (
      <Link to="/loginedMentorHome">
        <div class="logo">
          <div>
            <img src={sgb_logo_mentor} alt="logo" width="264.5" height="87" />
          </div>
        </div>
      </Link>
    );
  }
};

export default MentorLogo;
