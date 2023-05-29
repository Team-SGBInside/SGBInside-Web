import React from "react";
import Logo from "./components/Logo";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
import login_submit from "./components/img/login_submit.png";

const Login = () => {
  const idRef = useRef();
  const pwRef = useRef();

  const handleMember = async () => {
    console.log("clicked");
    try {
      const response = await axios.post(
        "http://localhost:3002/auth/signin",
        {
          id: idRef.current.value,
          pw: pwRef.current.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      //navigate("/home");
    } catch (error) {
      console.log(error);
      window.alert(error);
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
            <button type="submit">
              <img
                src={login_submit}
                onClick={handleMember}
                alt="submit"
                width="200"
                height="50"
              />
            </button>
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