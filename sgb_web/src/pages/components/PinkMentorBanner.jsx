import React, { useState } from "react";
import pink_banner_bg from "./img/pink_banner_bg.png";
import "./PinkMentorBanner.css";

const PinkMentorBanner = ({
  activityId,
  name,
  type,
  writerSchoolMajor,
  writerGrade,
  parentFunction,
}) => {
  const [data, setData] = useState(true);

  const handleClick = () => {
    console.log("activity clicked");
    parentFunction(data, activityId);
    console.log("activity clicked 2");
  };

  return (
    <div className="pink_mentor_banner">
      <div className="pink_banner_bg">
        <img
          src={pink_banner_bg}
          onClick={handleClick}
          alt="pink_banner_bg"
          width="200"
          height="100"
        />
        <div className="pink_banner_content">
          <div className="activity_type" onClick={handleClick}>
            {type}
          </div>
          <div className="activity_name_pink" onClick={handleClick}>
            {name}
          </div>
          <div className="activity_writer" onClick={handleClick}>
            {writerSchoolMajor} {writerGrade}학년
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinkMentorBanner;
