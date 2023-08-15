import React, { useState } from "react";
import red_mypage_banner from "./img/red_mypage_banner.png";
import "./RedMypageBanner.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookie, setCookie } from "../../lib/cookie";

// props로 전달된 key들의 value값들을 활용
const RedMypageBanner = ({
  activityId,
  sort,
  mainActivity,
  startDate,
  endDate,
  parentFunction,
}) => {
  const [data, setData] = useState(true);

  // console.log("activityId: ", activityId);
  // console.log("sort: ", sort);
  // console.log("name: ", name);
  // console.log("writerSchoolMajor: ", writerSchoolMajor);
  // console.log("writerGrade: ", writerGrade);
  // console.log("parentFunction: ", parentFunction, typeof parentFunction);

  const handleClick = () => {
    console.log("activity clicked");
    parentFunction(data, sort, activityId);
    console.log("activity clicked 2");
  };

  return (
    <>
      <div className="red_mypage_banner">
        <div className="red_mypage_banner_bg">
          <img
            src={red_mypage_banner}
            onClick={handleClick}
            alt="red_mypage_banner"
            width="200"
            height="100"
          />
          <div className="red_mypage_banner_content">
            <div className="red_activity_type" onClick={handleClick}>
              {sort}
            </div>
            <div className="red_activity_name" onClick={handleClick}>
              {mainActivity}
            </div>
            <div className="red_activity_writer" onClick={handleClick}>
              {startDate} ~ {endDate}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RedMypageBanner;
