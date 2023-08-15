import React, { useState } from "react";
import pink_banner_bg from "./img/pink_banner_bg.png";
import "./PinkMypageBanner.css";

const PinkMypageBanner = ({
  activityId,
  name,
  sort,
  type,
  date,
  parentFunction,
}) => {
  const [data, setData] = useState(true);

  const handleClick = () => {
    console.log("activity clicked");
    parentFunction(data, sort, activityId);
    console.log("activity clicked 2");
  };

  return (
    <div className="pink_mypage_banner">
      <div className="pink_banner_bg">
        <img
          src={pink_banner_bg}
          onClick={handleClick}
          alt="pink_banner_bg"
          width="200"
          height="100"
        />
        <div className="pink_mypage_banner_content">
          <div className="pink_mypage_activity_type" onClick={handleClick}>
            {type}
          </div>
          <div className="pink_mypage_activity_name" onClick={handleClick}>
            {name}
          </div>
          <div className="pink_mypage_activity_date" onClick={handleClick}>
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinkMypageBanner;
