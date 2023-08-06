import React from "react";
import pinkform_bg from "./img/pinkform_bg.png";
import pink_talk from "./img/pink_talk.png";
import "./PinkRecom.css";
import PinkMentorBanner from "./PinkMentorBanner";

function PinkRecom() {
  return (
    <div className="pinkrecom">
      <div className="pinkrecom_bg">
        <img src={pinkform_bg} alt="pinkform_bg" width="1200" height="1310" />
        <div className="pinkrecom_content">
          <div className="pink_talk">
            <img src={pink_talk} alt="pink_talk" width="555" height="130" />
          </div>
          <br />
          <br />
          <div className="search_div_pink">
            <input
              type="search"
              placeholder="검색어를 입력 하세요..."
              name="query"
              className="search_input_pink"
            />
          </div>
          <br />
          <div className="pink_mentor_banner_div">
            <PinkMentorBanner />
            <PinkMentorBanner />
            <PinkMentorBanner />
            <PinkMentorBanner />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PinkRecom;
