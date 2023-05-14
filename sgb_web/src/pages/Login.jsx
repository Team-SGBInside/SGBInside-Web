import React from 'react';
import Logo from './components/Logo';
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import './Login.css';
import { Link } from 'react-router-dom';
import login_submit from './components/img/login_submit.png'

const Login = () => {
        const idRef = useRef();
        const pwRef = useRef();

        const navigate = useNavigate();
      
        // const handleMember = () => {
        //   if (idRef.current.value === "" || idRef.current.value === undefined) {
        //     alert("아이디를 입력하세요!!!");
        //     idRef.current.focus();
        //     return false;
        //   }
        //   if (pwRef.current.value === "" || pwRef.current.value === undefined) {
        //     alert("패스워드를 입력하세요!!!");
        //     pwRef.current.focus();
        //     return false;
        //   }
        //   if (emailRef.current.value === "" || emailRef.current.value === undefined) {
        //     alert("이메일을 입력하세요!!!");
        //     emailRef.current.focus();
        //     return false;
        //   }
      
        //   axios
        //     .post("http://localhost:8008/member", {
        //       id: idRef.current.value,
        //       pw: pwRef.current.value,
        //       email: emailRef.current.value,
        //     })
        //     .then((res) => {
        //       console.log("handleMember =>", res);
        //       // 로그인 성공여부는 res.data.affectedRows가 0인지 1인지 확인하면 됨
        //       if (res.data.affectedRows === 1) alert("회원가입 성공!!!");
        //       else alert("회원가입 실패!!!");
        //       navigate("/");
        //     })
        //     .catch((e) => {
        //       console.error(e);
        //     });
        // };

        // app.post("/member", (req, res) => {
        //     console.log("/member", req.body);
        //     var id = req.body.id;
        //     var pw = req.body.pw;
        //     var email = req.body.email;
          
        //     const sqlQuery = "insert into member values (?,?,?);";
        //     db.query(sqlQuery, [id, pw, email], (err, result) => {
        //       res.send(result);
        //     });
        // });

    return (
        <>
            <div>
                <Logo/>
            </div>
            <div>
                <form>
                <div className="form">
                        <div className = "id">  
                            <label>아이디</label><br/>
                            <input
                                type="text"
                                name="id"
                                size="30"
                                defaultValue=""
                                ref={idRef}
                            ></input><br/>
                        </div>
                        <div className = "password"> 
                            <label>비밀번호</label><br/>
                            <input
                                type="password"
                                name="pw"
                                size="30"
                                defaultValue=""
                                ref={pwRef}
                            ></input><br/>
                        </div>
                        <br/> 
                        </div>        
                        <div className = "login-button">
                        <button type ="submit">
                            <img src= {login_submit} alt="submit" width="200" height="50"/>
                        </button>
                        </div>
                        <div className = "login-q">
                            <Link to ='/signup'><p>아직 회원이 아니신가요?</p></Link>
                        </div>
                </form>
            </div>
        </>
        );
    };


export default Login;