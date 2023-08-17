import React, { useEffect, useState } from "react";

export default function GreenMypageActivityModal({
  activityId,
  name,
  startDate,
  endDate,
  semester,
  activityType,
  role,
  thoughts,
}) {
  console.log(
    "props:",
    activityId,
    name,
    startDate,
    endDate,
    semester,
    activityType,
    role,
    thoughts
  );

  // 활동 수정을 위한 state - props와 변수 선언이 겹치면 안됨
  const [text, setText] = useState("Hello World");
  const [nme, setNme] = useState("활동명");
  const [stDate, setStDate] = useState("활동 시작일");
  const [edDate, setEdDate] = useState("활동 종료일");
  const [smester, setSmester] = useState("활동 학기");
  const [actType, setActType] = useState("창체 활동 유형");
  const [rle, setRle] = useState("활동 내 역할과 구체적인 활동 내용");
  const [thghts, setThghts] = useState("활동 소감");

  const [isEditable, setIsEditable] = useState(false);

  console.log("isEditable: ", isEditable);

  /* 창체 전체 필드
  // modal.innerText = `sort: 창체
  // ${activity[0].name} | ${activity[0].startDate} ~ ${activity[0].endDate} | ${activity[0].semester} | ${activity[0].activityType}\n
  // ${activity[0].name}(${activity[0].startDate} ~ ${activity[0].endDate}) ${activity[0].role}\n
  // ${activity[0].thoughts}
  // `; */

  useEffect(() => {
    setNme(name);
    setStDate(startDate);
    setEdDate(endDate);
    setSmester(semester);
    setActType(activityType);
    setRle(role);
    setThghts(thoughts);
  }, []);

  const handleDoubleClick = () => {
    setIsEditable(true);
  };

  const handleChange = (e) => {
    setNme(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditable(false);
    }
  };

  return (
    <div className="App">
      <p className="description">
        Double click the text below to edit.
        {isEditable ? (
          <>
            <br />
            활동명:{" "}
            <input
              type="text"
              value={nme}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </>
        ) : (
          <p onDoubleClick={handleDoubleClick}>활동명: {nme}</p>
        )}
        {isEditable ? (
          <>
            <br />
            시작일:{" "}
            <input
              type="text"
              value={stDate}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </>
        ) : (
          <p onDoubleClick={handleDoubleClick}>시작일: {stDate}</p>
        )}
        {isEditable ? (
          <>
            <br />
            종료일:{" "}
            <input
              type="text"
              value={edDate}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </>
        ) : (
          <p onDoubleClick={handleDoubleClick}>종료일: {edDate}</p>
        )}
        {isEditable ? (
          <>
            <br />
            학기:{" "}
            <input
              type="text"
              value={smester}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </>
        ) : (
          <p onDoubleClick={handleDoubleClick}>학기: {smester}</p>
        )}
        {isEditable ? (
          <>
            <br />
            활동유형:{" "}
            <input
              type="text"
              value={actType}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </>
        ) : (
          <p onDoubleClick={handleDoubleClick}>활동유형: {actType}</p>
        )}
        {isEditable ? (
          <>
            <br />
            활동 내 역할, 구체적 활동 내용:
            <input
              type="text"
              value={role}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </>
        ) : (
          <p onDoubleClick={handleDoubleClick}>
            활동 내 역할, 구체적 활동 내용: <br />
            {role}
          </p>
        )}
        {isEditable ? (
          <>
            <br />
            활동 소감:
            <input
              type="text"
              value={thoughts}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </>
        ) : (
          <p onDoubleClick={handleDoubleClick}>활동 소감: {thoughts}</p>
        )}
      </p>
    </div>
  );
}
