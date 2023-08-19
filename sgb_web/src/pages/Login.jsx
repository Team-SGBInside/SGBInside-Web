import React from "react";
import Logo from "./components/Logo";
import { useRef } from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
import login_submit from "./components/img/login_submit.png";
import signup_submit from "./components/img/signup_submit.png";
import { setCookie } from "../lib/cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigator = useNavigate();
  const idRef = useRef();
  const pwRef = useRef();

  const handleMember = async (event) => {
    event.preventDefault();
    console.log("clicked");
    try {
      const response = await axios.post(
        "http://3.37.215.18:3000/auth/signin",
        {
          loginId: idRef.current.value,
          password: pwRef.current.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
            withCredentials: true,
          },
        }
      );
      window.alert("환영합니다!");
      setCookie("userId", response.data.data.userId);
      setCookie("accessToken", response.data.data.accessToken);
      navigator("/loginedHome"); // 처리해줘야 할 로직이 있는 페이지 전환일때
      // return response.data;
      // location.href = "/loginedHome";
    } catch (error) {
      console.log(error);
      window.alert(
        "아이디 또는 비밀번호가 일치하지 않습니다. 다시 시도해주세요."
      );
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // 엔터 키를 눌렀을 때 handleMember 함수를 호출하여 제출
      handleMember(event);
    }
  };

  return (
    <>
      <div>
        <Logo />
      </div>
      <div>
        <form onSubmit={handleMember}>
          <div className="form">
            <h2 className="login-title">로그인</h2>
            <div className="id">
              <label>아이디</label>
              <br />
              <input
                className="login-input"
                type="text"
                name="id"
                size="30"
                defaultValue=""
                ref={idRef}
                onKeyPress={handleKeyPress}
              ></input>
              <br />
            </div>
            <div className="password">
              <label>비밀번호</label>
              <br />
              <input
                className="login-input"
                type="password"
                name="pw"
                size="30"
                defaultValue=""
                ref={pwRef}
                onKeyPress={handleKeyPress}
              ></input>
              <br />
            </div>
            <br />
          </div>
          <div>
            <Link to="/login">
              <button className="login-button" type="submit">
                <img
                  src={login_submit}
                  onClick={handleMember}
                  alt="submit"
                  width="200"
                  height="50"
                />
              </button>
            </Link>
          </div>
          <Link to="/signup">
            <button className="login-button">
              <img src={signup_submit} width="200" height="50"></img>
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
