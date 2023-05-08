import React from 'react';
import Logo from './components/Logo';
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import './Signup.css';
import signup_submit from './components/img/signup_submit.png'
import { Link } from 'react-router-dom';

const Signup = () => {
        const nameRef = useRef();
        const idRef = useRef();
        const pwRef = useRef();
        const emailRef = useRef();
        const gradeRef = useRef ();
        const ageRef = useRef ();
        const schoolRef = useRef ();
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
                    <div className = "container">
                        <div className = "name">
                            <label>이름</label><br/>
                                <input
                                type="text"
                                name="name"
                                size="10"
                                defaultValue=""
                                ref={nameRef}
                                ></input>
                        </div>
                        <div className = "member">
                            <input type = "radio"/>고등학생 회원<br/>
                            <input type = "radio"/>대학생 멘토 회원<br/>
                        </div>
                    </div>
                        <div className = "school">
                            <label>학교</label><br/>
                            <input
                            type="text"
                            name="school"
                            size="30"
                            defaultValue=""
                            ref={schoolRef}></input>
                        </div>
                        <div className = "container">
                            <div className = "grade">      
                                <label>학년</label><br/>
                                <input
                                type="text"
                                name="grade"
                                size="5"
                                defaultValue=""
                                ref={gradeRef}
                                ></input>
                            </div>
                            <div className = "age">
                                <label>나이</label><br/>
                                <input
                                type="text"
                                name="age"
                                size="5"
                                defaultValue=""
                                ref={ageRef}
                                ></input>
                            </div>
                        </div> 
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
                        <div className = "email">
                            <label>이메일</label><br/>
                            <input
                                type="text"
                                name="email"
                                size="30"
                                defaultValue=""
                                ref={emailRef}
                            ></input>
                        </div>
                        <br/> 
                        </div>        
                        <div className = "signup-button">
                        <button type ="submit">
                            <img src= {signup_submit} alt="submit" width="200" height="50"/>
                        </button>
                        </div>
                        <div classNmae = "signup-q">
                            <Link to ='/login'><p>이미 계정이 있으신가요?</p></Link>
                        </div>
                </form>
            </div>
        </>
        );
    };


export default Signup;