import React, { useEffect, useState } from "react";

export default function GreenMypageActivityModal(
  activityId,
  startDate,
  endDate
) {
  console.log(
    "activityId, startDate, endDate:",
    activityId,
    startDate,
    endDate
  );
  const id = activityId;
  const stDate = startDate;
  const edDate = endDate;
  // 활동 수정을 위한 state
  const [text, setText] = useState("Hello World");
  const [isEditable, setIsEditable] = useState(false);

  const handleDoubleClick = () => {
    setIsEditable(true);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditable(false);
    }
  };

  return (
    <div className="App">
      <h1>Click-To-Edit UI</h1>
      <p className="description">Double click the text below to edit.</p>
      {isEditable ? (
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <p onDoubleClick={handleDoubleClick}>{text}</p>
      )}
    </div>
  );
}
