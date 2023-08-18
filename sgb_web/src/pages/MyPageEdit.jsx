import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hello from "./components/Hello";
import MyPageInfo from "./components/MyPageInfo";
import GreenMyPageEdit from "./components/GreenMyPageEdit";
import RedMyPageEdit from "./components/RedMyPageEdit";
import PinkMypageEdit from "./components/PinkMypageEdit";
import BlueMypageEdit from "./components/BlueMypageEdit";

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
        ) : null}
        {activity.sort === "subject" ? (
          <RedMyPageEdit
            activityId={activity.activityId}
            subjectName={activity.subjectName}
            subjectContent={activity.subjectContent}
            mainActivity={activity.mainActivity}
            startDate={activity.startDate}
            endDate={activity.endDate}
            activitySemester={activity.activitySemester}
            activityContentDetail={activity.activityContentDetail}
            subjectFurtherStudy={activity.subjectFurtherStudy}
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
        {activity.sort === "book" ? (
          <BlueMypageEdit
            activityId={activity.activityId}
            semester={activity.semester}
            endDate={activity.endDate}
            titleAuthor={activity.titleAuthor}
            relatedSubject={activity.relatedSubject}
            thoughts={activity.thoughts}
            quote1={activity.quote1}
            quote2={activity.quote2}
            quote3={activity.quote3}
            quote4={activity.quote4}
            quote5={activity.quote5}
          />
        ) : null}
      </div>
    </>
  );
};

export default MyPageEdit;
