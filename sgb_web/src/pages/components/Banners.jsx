import React from "react";
import green_banner from "./img/green_banner.png";
import red_banner from "./img/red_banner.png";
import pink_banner from "./img/pink_banner.png";
import blue_banner from "./img/blue_banner.png";
import "./Banners.css";
import { Link } from "react-router-dom";
import { getCookie, setCookie, removeCookie } from "../../lib/cookie";

const Banners = () => {
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
      <Link to="/greenRecord">
        <span className="green-banner">
          <img
            src={green_banner}
            alt="green_banner"
            width="500"
            height="300"
            onClick={(e) => checkIfLogin(e)}
          />
        </span>
      </Link>

      <Link to="/redRecord">
        <img
          src={red_banner}
          alt="red_banner"
          width="500"
          height="300"
          onClick={(e) => checkIfLogin(e)}
        />
        <br />
        <br />
      </Link>
      <Link to="/pinkRecord">
        <span className="pink-banner">
          <img
            src={pink_banner}
            alt="green_banner"
            width="500"
            height="300"
            onClick={(e) => checkIfLogin(e)}
          />
        </span>
      </Link>
      <Link to="/blueRecord">
        <span className="blue-banner">
          <img
            src={blue_banner}
            alt="green_banner"
            width="500"
            height="300"
            onClick={(e) => checkIfLogin(e)}
          />
        </span>
      </Link>
    </div>
  );
};

export default Banners;
