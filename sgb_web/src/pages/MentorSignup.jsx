import React, { useEffect } from "react";
import MentorLogo from "./components/MentorLogo";
import { useRef } from "react";
import axios from "axios";
import "./Signup.css";
import signup_submit from "./components/img/signup_submit.png";
import { Link } from "react-router-dom";

const MentorSignup = () => {
  const idRef = useRef();
  const pwRef = useRef();
  const nameRef = useRef();
  const schoolRef = useRef();
  const majorRef = useRef();
  const gradeRef = useRef();
  const ageRef = useRef();
  const isTeenRef = useRef();

 const handleMember = async () => {
    console.log("clicked");
    try {
      const response = await axios.post(
         "http://3.37.215.18:3000/auth",
        {
          loginId: idRef.current.value,
          password: pwRef.current.value,
          name: nameRef.current.value,
          school: schoolRef.current.value,
          grade: gradeRef.current.value,
          age: ageRef.current.value,
          isTeen: isTeenRef.current.value,
          //* isTeen
          // 어느 radio를 클릭했는지에 따라 true/false가 반환되도록 분기처리(if문 try-catch문 등..) 필요
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      window.alert("회원가입이 성공적으로 되었습니다."); //성공페이지로 라우팅
      // location.href="/home"
    } catch (error) {
      console.log(error);
      window.alert("입력되지 않은 항목이 있습니다."); //실패페이지로 라우팅
    }
    console.log(typeof isTeenRef.current.value)
    console.log(isTeenRef.current.value);
  }; 
  return (
    <>
      <div>
        <MentorLogo />
      </div>
      <div>
        <form>
          <div className="form">
            <div className="container">
              <div className="name">
                <label>이름</label>
                <br />
                <input
                  type="text"
                  name="name"
                  size="10"
                  defaultValue=""
                  ref={nameRef}
                ></input>
              </div>
              <br/>
              <div className="member">
                <label>회원유형</label><br/>
                <select
                    className="isTeen"
                    name= "isTeen"
                    ref = {isTeenRef}
                    >                           
                    <option value="true">고등학생 회원</option>
                    <option value="false">대학생멘토 회원</option>
                </select>
            </div>
            </div>
            <div className="school">
              <label>학교</label>
              <br />
              <input
                type="text"
                name="school"
                size="30"
                defaultValue=""
                ref={schoolRef}
              ></input>
            </div><br/>
            <div className="major">
              <label>학과</label>
              <br />
              <input
                type="text"
                name="major"
                size="30"
                defaultValue=""
                ref={majorRef}
              ></input>
            </div>
            <div className="container">
              <div className="grade">
                <label>학년</label>
                <br />
                <input
                  type="text"
                  name="grade"
                  size="5"
                  defaultValue=""
                  ref={gradeRef}
                ></input>
              </div>
              <div className="age">
                <label>나이</label>
                <br />
                <input
                  type="text"
                  name="age"
                  size="5"
                  defaultValue=""
                  ref={ageRef}
                ></input>
              </div>
            </div>
            <div className="id">
              <label>아이디</label>
              <br />
              <input
                type="text"
                name="id"
                size="30"
                defaultValue=""
                ref={idRef}
              ></input>
              <br />
            </div>
            <div className="password">
              <label>비밀번호</label>
              <br />
              <input
                type="password"
                name="pw"
                size="30"
                defaultValue=""
                ref={pwRef}
              ></input>
              <br />
            </div>
            <div className="email">
              <label>이메일</label>
              <br />
              <input type="text" name="email" size="30" defaultValue=""></input>
            </div>
            <br />
          </div>
          <div className="signup-button">
            <Link to = "/signup">
            <button type="submit" width="400" onClick={handleMember}>
              <img src={signup_submit} alt="submit" height="50" />
            </button>
            </Link>
          </div>
          <div className="signup-q">
            <Link to="/login">
              <p>이미 계정이 있으신가요?</p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default MentorSignup;