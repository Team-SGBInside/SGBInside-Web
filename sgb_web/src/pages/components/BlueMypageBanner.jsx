import React, { useState } from "react";
import blue_banner_bg from "./img/blue_mypage_banner.png";
import "./BlueMypageBanner.css";

const BlueMypageBanner = ({
  activityId,
  titleAuthor,
  sort,
  endDate,
  // writerGrade,
  parentFunction,
}) => {
  const [data, setData] = useState(true);

  const handleClick = () => {
    console.log("activity clicked");
    parentFunction(data, sort, activityId);
    console.log("activity clicked 2");
  };

  return (
    <div className="blue_mentor_banner">
      <div className="blue_banner_bg">
        <img
          src={blue_banner_bg}
          onClick={handleClick}
          alt="blue_banner_bg"
          width="200"
          height="100"
        />
        <div className="blue_banner_content">
          <div className="activity_type_blue" onClick={handleClick}>
            {sort}
          </div>
          <div className="activity_name_blue" onClick={handleClick}>
            {titleAuthor}
          </div>
          <div className="activity_writer_blue" onClick={handleClick}>
            {endDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueMypageBanner;
