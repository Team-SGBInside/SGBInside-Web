import React from "react";
import Logo from "./components/Logo";
import { useRef } from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
import login_submit from "./components/img/login_submit.png";
import { setCookie } from "../lib/cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigator = useNavigate();
  const idRef = useRef();
  const pwRef = useRef();

  const handleMember = async () => {
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
          },
        }
      );
      console.log(response);
      console.log(response.data.data);
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

  return (
    <>
      <div>
        <Logo />
      </div>
      <div>
        <form>
          <div className="form">
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
            <br />
          </div>
          <div className="login-button">
            <Link to="/login">
              <button type="submit">
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
          <div className="login-q">
            <Link to="/signup">
              <p>아직 회원이 아니신가요?</p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
