import React, { useState } from "react";
import greenform_bg from "./img/greenform_bg.png";
import green_talk from "./img/green_talk.png";
import green_mentor from "./img/green_mentor.png";
import "./GreenRecom.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { getCookie, setCookie } from "../../lib/cookie";

const GreenRecom = () => {
  const apiKey = process.env.REACT_APP_CAREER_ACCESS_KEY;

  // 검색한 학과로 조회한 전공계열정보
  let majorFieldInfo = [];

  // 그 전공계열정보에서 검색어를 포함하는 학과(mClass)를 탐색한 후 알아낸 학과코드
  let majorCode = [];

  const [major, setMajor] = useState("");
  const trimmedMajor = major.split(" ").join(""); // 검색어 공백제거
  console.log("trimmedMajor: ", trimmedMajor);

  const [careerActs, setCareerActs] = useState([]);

  const handleMajor = (e) => {
    e.preventDefault();
    setMajor(e.target.value);
  };

  const onKeySubmitSearch = async (e) => {
    if (e.key === "Enter") {
      if (!major || trimmedMajor === "") {
        alert("검색어를 입력해주세요");
        return;
      }
      await axios({
        method: "get",
        url: `http://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=${apiKey}&svcType=api&svcCode=MAJOR&contentType=json&gubun=univ_list&univSe=univ&searchTitle=${major}`,
      })
        .then((result) => {
          console.log("result::: ", result);
          console.log("majorFieldInfo:", result.data.dataSearch.content);
          majorFieldInfo = result.data.dataSearch.content;
          console.log("majorFieldInfo's type: ", typeof majorFieldInfo);
          if (majorCode !== []) {
            console.log("hahaha");
            majorCode = [];
            console.log("hahaha");
          }
          for (let i = 0; i < majorFieldInfo.length; i++) {
            if (majorFieldInfo[i].mClass.includes(trimmedMajor)) {
              console.log("mclass: ", majorFieldInfo[i].mClass);
              majorCode.push(majorFieldInfo[i].majorSeq);
              console.log("majorCode: ", majorCode);
              return;
              // mClass에서 바로 검색어와 일치할 때 학과코드 정확도가 가장 높기 때문에 if문 조건에 일차하면 바로 return
            }

            // mClass 대신 facilName(다양한 학과를 모두 포함함)에서 검색어가 일치할 때 차선책으로 해당 계열의 학과코드를 선택
            if (majorFieldInfo[i].facilName.includes(trimmedMajor)) {
              console.log("facilName: ", majorFieldInfo[i].mClass);
              majorCode.push(majorFieldInfo[i].majorSeq);
              console.log("f-majorCode: ", majorCode);
              return;
            }
          }

          if (majorCode === []) {
            alert("다른 학과 이름으로 검색해보세요.");
            return;
          }
        })
        .catch((error) => {
          alert("전공계열정보 조회 실패");
          console.log("전공계열정보 조회 실패");
          console.log(error);
        });
      await getMajorInfo();
    }
  };

  const getMajorInfo = async () => {
    await axios({
      method: "get",
      url: `http://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=${apiKey}&svcType=api&svcCode=MAJOR_VIEW&contentType=json&gubun=univ_list&univSe=univ&majorSeq=${majorCode[0]}`,
    })
      .then((result) => {
        console.log("majorCode: ", majorCode, ", type: ", typeof majorCode);
        console.log("result: ", result);
        console.log(
          "careeracts: ",
          result.data.dataSearch.content[0].career_act
        );
        setCareerActs(result.data.dataSearch.content[0].career_act);
        console.log("careeracts: ", careerActs);
      })
      .catch((error) => {
        alert("학과코드에 따른 학과정보 조회 실패");
        console.log("학과코드에 따른 학과정보 조회 실패");
        console.log(error);
      });
  };

  return (
    <div className="greenrecom">
      <div className="greenrecom_bg">
        <img src={greenform_bg} alt="greenform_bg" width="1200" height="1310" />
        <div className="greenrecom_content">
          <div className="green_talk">
            <img src={green_talk} alt="green_talk" width="555" height="120" />
          </div>
          <br />
          <br />
          <div className="green_mentor">
            <Link to="/greenMentor">
              <img
                src={green_mentor}
                alt="green_mentor"
                width="300"
                height="100"
              />
            </Link>
          </div>
          {/* Search 관련 코드 */}
          <div className="search_div_green">
            <input
              type="search"
              placeholder="검색어를 입력 하세요..."
              name="query"
              className="search_input_green"
              onChange={handleMajor}
              onKeyPress={onKeySubmitSearch}
            />
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          {careerActs &&
            careerActs.map((careerAct) => {
              return (
                <>
                  <div className="search_result_green">
                    <b>{careerAct.act_name.replace("<br>", "")}</b>
                    <br />
                    {careerAct.act_description}
                    <br />
                    <br />
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default GreenRecom;
