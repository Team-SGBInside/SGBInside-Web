import React from "react";
import { useLocation } from "react-router-dom";
import MentorHeader from "./components/MentorHeader";
import MentorHello from "./components/MentorHello";
import GreenMyPageEdit from "./components/GreenMyPageEdit";
import RedMyPageEdit from "./components/RedMyPageEdit";
import PinkMypageEdit from "./components/PinkMypageEdit";
import BlueMypageEdit from "./components/BlueMypageEdit";

const MyPageEditMentor = () => {
  const location = useLocation();
  const activity = { ...location.state };
  console.log("state in myPageEditMentor: ", activity);
  return (
    <>
      <div>
        <MentorHeader />
      </div>
      <div>
        <MentorHello />
      </div>
      <br />
      <br />
      <div>
        {activity.sort === "creative" ? (
          <GreenMyPageEdit
            activityId={activity.activityId}
            name={activity.name}
            startDate={activity.startDate}
            endDate={activity.endDate}
            semester={activity.semester}
            activityType={activity.activityType}
            role={activity.role}
            thoughts={activity.thoughts}
          />
        ) : null}
        {activity.sort === "prize" ? (
          <PinkMypageEdit
            activityId={activity.activityId}
            semester={activity.semester}
            date={activity.date}
            name={activity.name}
            prize={activity.prize}
            role={activity.role}
            thoughts={activity.thoughts}
            type={activity.type}
          />
        ) : null}
      </div>
    </>
  );
};

export default MyPageEditMentor;
