import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hello from "./components/Hello";
import MyPageInfo from "./components/MyPageInfo";
import GreenMyPageEdit from "./components/GreenMyPageEdit";

const MyPageEdit = () => {
  const location = useLocation();
  const activity = { ...location.state };
  console.log("state in myPageEdit: ", activity);
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Hello />
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
        ) : (
          <p>창의적 체험활동 수정하기</p>
        )}
      </div>
    </>
  );
};

export default MyPageEdit;
