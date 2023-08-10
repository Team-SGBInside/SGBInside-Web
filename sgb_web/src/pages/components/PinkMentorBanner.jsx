import React from "react";
import pink_banner_bg from "./img/pink_banner_bg.png";
import "./PinkMentorBanner.css";

const PinkMentorBanner = ({
  activityId,
  name,
  type,
  writerSchoolMajor,
  writerGrade,
}) => {
  return (
    <div className="pink_mentor_banner">
      <div className="pink_banner_bg">
        <img
          src={pink_banner_bg}
          alt="pink_banner_bg"
          width="200"
          height="100"
        />
        <div className="pink_banner_content">
          <div className="activity_type">{type}</div>
          <div className="activity_name_pink">{name}</div>
          <div className="activity_writer">
            {writerSchoolMajor} {writerGrade}학년
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinkMentorBanner;
