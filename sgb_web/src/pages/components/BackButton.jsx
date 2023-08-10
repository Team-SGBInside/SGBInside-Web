import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./BackButton.css";

const BackButton = () => {
  const navigator = useNavigate();
  const onClickBtn = () => {
    navigator(-1);
  };
  return <button onClick={onClickBtn}>뒤로 가기</button>;
};

export default BackButton;
