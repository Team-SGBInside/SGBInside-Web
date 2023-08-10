import React from "react";
import green_banner_bg from "./img/green_banner_bg.png";
import "./GreenMentorBanner.css";

// props로 전달된 key들의 value값들을 활용
const GreenMentorBanner = ({
  activityType,
  name,
  writerSchoolMajor,
  writerGrade,
}) => {
  console.log("activityType: ", activityType);
  console.log("name: ", name);
  console.log("writerSchoolMajor: ", writerSchoolMajor);
  console.log("writerGrade: ", writerGrade);

  return (
    <>
      <div className="green_mentor_banner">
        <div className="green_banner_bg">
          <img
            src={green_banner_bg}
            alt="green_banner_bg"
            width="200"
            height="100"
          />
          <div className="green_banner_content">
            <div className="activity_type">{activityType}</div>
            <div className="activity_name">{name}</div>
            <div className="activity_writer">
              {writerSchoolMajor} {writerGrade}학년
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GreenMentorBanner;
