import React from "react";
import sgb_logo from "./img/sgb_logo.png";
import { Link } from "react-router-dom";
import { getCookie, setCookie, removeCookie } from "../../lib/cookie";

const Logo = () => {
  const userId = getCookie("userId");
  const token = getCookie("accessToken");

  // 미로그인 시 로고 클릭 - 고교생 미로그인 홈으로 이동
  if (!userId || !token) {
    return (
      <Link to="/home">
        <div class="logo">
          <div>
            <img src={sgb_logo} alt="logo" width="264.5" height="87" />
          </div>
        </div>
      </Link>
    );
  } else {
    // 로그인 시 로고 클릭 - 고교생 로그인 홈으로 이동
    return (
      <Link to="/loginedHome">
        <div class="logo">
          <div>
            <img src={sgb_logo} alt="logo" width="264.5" height="87" />
          </div>
        </div>
      </Link>
    );
  }
};

export default Logo;
