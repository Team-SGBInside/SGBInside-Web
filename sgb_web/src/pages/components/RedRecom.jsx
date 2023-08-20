import React, { useState } from "react";
import redform_bg from "./img/redform_bg.png";
import red_talk from "./img/red_talk.png";
import "./RedRecom.css";
import axios from "axios";
import { getCookie, setCookie } from "../../lib/cookie";

function RedRecom() {
  const apiKey = process.env.REACT_APP_CAREER_ACCESS_KEY;

  // 검색한 학과로 조회한 전공계열정보
  let majorFieldInfo = [];

  // 그 전공계열정보에서 검색어를 포함하는 학과(mClass)를 탐색한 후 알아낸 학과코드
  let majorCode = [];

  const [major, setMajor] = useState("");
  const trimmedMajor = major.split(" ").join(""); // 검색어 공백제거
  console.log("trimmedMajor: ", trimmedMajor);

  const [relateSubjects, setRelateSubjects] = useState([]);

  const handleMajor = (e) => {
    e.preventDefault();
    setMajor(e.target.value);
  };

  const doDisplay = () => {
    var con = document.getElementById("career-net");
    console.log("con: ", con);
    console.log("con.style.display: ", con.style.display);
    console.log("typeof display: ", typeof con.style.display);

    con.style.display = "block";
    // green의 value를 바꾸는 함수 따로 분리할 필요는 없을 것 같아요~
    const red = document.getElementById("red").value;
    console.log("red: ", red);
    document.getElementById("result").innerText = red;
    console.log("printRed");
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
      doDisplay();
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
          "relate_subject: ",
          result.data.dataSearch.content[0].relate_subject
        );
        setRelateSubjects(result.data.dataSearch.content[0].relate_subject);
        console.log("relateSubjects: ", relateSubjects);
      })
      .catch((error) => {
        alert("학과코드에 따른 학과정보 조회 실패");
        console.log("학과코드에 따른 학과정보 조회 실패");
        console.log(error);
      });
  };

  return (
    <div className="redrecom">
      <div className="redrecom_bg">
        <img src={redform_bg} alt="redform_bg" width="1200" height="1310" />
        <div className="redrecom_content">
          <div className="red_talk">
            <img src={red_talk} alt="red_talk" width="555" height="120" />
          </div>
          <br />
          <br />
          {/* Search 관련 코드 */}
          <div className="search_div_red">
            <input
              id="red"
              type="search"
              placeholder="검색어를 입력 하세요..."
              name="query"
              className="search_input_red"
              onChange={handleMajor}
              onKeyPress={onKeySubmitSearch}
              value={major}
            />
          </div>
          <br/>
          <div className="red_result">
          <div className="careernet-div">
          <div id="career-net">
              <span className="red-text">커리어넷</span>
              <span className="light-text">에서 제공하는 </span>
              <span id="result"></span>
              <span className="light-text">
                {" "}
                관련 관리교과목은 다음과 같습니다.
              </span>
              <br />
              <br />
          </div>
          </div>
          {relateSubjects &&
            relateSubjects.map((relateSubject) => {
              return (
                <div className="search_result_red">
                  <pre id="search_result_red_subject_name">
                    {relateSubject["subject_name"]}
                  </pre>
                  <pre id="search_result_red_subject_desc">
                    {relateSubject["subject_description"]
                      ? relateSubject["subject_description"].replace(
                          /<br>/g,
                          "\n"
                        )
                      : relateSubject["subject_description"]}
                  </pre>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedRecom;
