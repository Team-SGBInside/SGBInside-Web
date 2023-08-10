import React, { useState } from "react";
import green_banner_bg from "./img/green_banner_bg.png";
import "./GreenMentorBanner.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookie, setCookie } from "../../lib/cookie";

// props로 전달된 key들의 value값들을 활용
const GreenMentorBanner = ({
  activityId,
  activityType,
  name,
  writerSchoolMajor,
  writerGrade,
  parentFunction,
}) => {
  const navigator = useNavigate();
  const [data, setData] = useState(true);

  // console.log("activityId: ", activityId);
  // console.log("activityType: ", activityType);
  // console.log("name: ", name);
  // console.log("writerSchoolMajor: ", writerSchoolMajor);
  // console.log("writerGrade: ", writerGrade);
  // console.log("parentFunction: ", parentFunction, typeof parentFunction);

  const handleClick = () => {
    console.log("activity clicked");
    parentFunction(data, activityId);
    console.log("activity clicked 2");
    // navigator(`/greenMentor/${activityId}`);
  };

  return (
    <>
      <div className="green_mentor_banner">
        <div className="green_banner_bg">
          <img
            src={green_banner_bg}
            onClick={handleClick}
            alt="green_banner_bg"
            width="200"
            height="100"
          />
          <div className="green_banner_content">
            <div className="activity_type" onClick={handleClick}>
              {activityType}
            </div>
            <div className="activity_name" onClick={handleClick}>
              {name}
            </div>
            <div className="activity_writer" onClick={handleClick}>
              {writerSchoolMajor} {writerGrade}학년
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GreenMentorBanner;
