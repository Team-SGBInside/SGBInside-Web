// import React from 'react';
// import Logo from './components/Logo';
// import { useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import './Signup.css';
// import signup_submit from './components/img/signup_submit.png'
// import { Link } from 'react-router-dom';
// import app from '../../../SGBInside-Server/src';
// //import app from './sgb_web/SGBInside-Server/src/app';
// // import db from '../../../SGBInside-Server/prisma/schema.prisma';
// // import { PrismaClient } from '../../../SGBInside-Server/node_modules/@prisma/client';

// // const prisma = new PrismaClient();

// const Signup = () => {
//         const idRef = useRef();
//         const pwRef = useRef();
//         const nameRef = useRef();
//         const schoolRef = useRef ();
//         const gradeRef = useRef ();
//         const isTeenRef = useRef ();

//         const navigate = useNavigate();
      
//         const handleMember = () => {
//           if (idRef.current.value === "" || idRef.current.value === undefined) {
//             alert("아이디를 입력하세요!!!");
//             idRef.current.focus();
//             return false;
//           }
//           if (pwRef.current.value === "" || pwRef.current.value === undefined) {
//             alert("패스워드를 입력하세요!!!");
//             pwRef.current.focus();
//             return false;
//           }
//           if (nameRef.current.value === "" || nameRef.current.value === undefined) {
//             alert("실명을 입력하세요!!!");
//             nameRef.current.focus();
//             return false;
//           }
//           if (schoolRef.current.value === "" || schoolRef.current.value === undefined) {
//             alert("학교를 입력하세요!!!");
//             schoolRef.current.focus();
//             return false;
//           }
//           if (gradeRef.current.value === "" || gradeRef.current.value === undefined) {
//             alert("학년을 입력하세요!!!");
//             gradeRef.current.focus();
//             return false;
//           }
//           if (isTeenRef.current.value === "" || isTeenRef.current.value === undefined) {
//             alert("고등학생 여부를 입력하세요!!!");
//             isTeenRef.current.isTeens();
//             return false;
//           }
//           axios
//             .post("http://localhost:3000/auth", {
//               loginId: idRef.current.value,
//               password: pwRef.current.value,
//               name: nameRef.current.value,
//               school: schoolRef.current.value,
//               grade: gradeRef.current.value,
//               isTeen: isTeenRef.current.value,
//             })
//             .then((res) => {
//               console.log("handleMember =>", res);
//               // 로그인 성공여부는 res.data.affectedRows가 0인지 1인지 확인하면 됨
//               if (res.data.affectedRows === 1) alert("회원가입 성공!!!");
//               else alert("회원가입 실패!!!");
//               navigate("/");
//             })
//             .catch((e) => {
//               console.error(e);
//             });
//         };

//         app.post("/auth", (req, res) => {
//             console.log("/auth", req.body);
//             var id = req.body.loginId;
//             var pw = req.body.password;
          
//             const sqlQuery = "insert into member values (?,?,?);";
//             app.query(sqlQuery, [id, pw], (err, result) => {
//               res.send(result);
//             });
//         });

//     return (
//         <>
//             <div>
//                 <Logo/>
//             </div>
//             <div>
//                 <form>
//                 <div className="form">
//                     <div className = "container">
//                         <div className = "name">
//                             <label>이름</label><br/>
//                                 <input
//                                 type="text"
//                                 name="name"
//                                 size="10"
//                                 defaultValue=""
//                                 ref={nameRef}
//                                 ></input>
//                         </div>
//                         <div className = "member">
//                             <input type = "radio"/>고등학생 회원<br/>
//                             <input type = "radio"/>대학생 멘토 회원<br/>
//                         </div>
//                     </div>
//                         <div className = "school">
//                             <label>학교</label><br/>
//                             <input
//                             type="text"
//                             name="school"
//                             size="30"
//                             defaultValue=""
//                             ref={schoolRef}></input>
//                         </div>
//                         <div className = "container">
//                             <div className = "grade">      
//                                 <label>학년</label><br/>
//                                 <input
//                                 type="text"
//                                 name="grade"
//                                 size="5"
//                                 defaultValue=""
//                                 ref={gradeRef}
//                                 ></input>
//                             </div>
//                             <div className = "age">
//                                 <label>나이</label><br/>
//                                 <input
//                                 type="text"
//                                 name="age"
//                                 size="5"
//                                 defaultValue=""
//                                 ></input>
//                             </div>
//                         </div> 
//                         <div className = "id">  
//                             <label>아이디</label><br/>
//                             <input
//                                 type="text"
//                                 name="id"
//                                 size="30"
//                                 defaultValue=""
//                                 ref={idRef}
//                             ></input><br/>
//                         </div>
//                         <div className = "password"> 
//                             <label>비밀번호</label><br/>
//                             <input
//                                 type="password"
//                                 name="pw"
//                                 size="30"
//                                 defaultValue=""
//                                 ref={pwRef}
//                             ></input><br/>
//                         </div>
//                         <br/> 
//                         </div>        
//                         <div className = "signup-button">
//                         <button type ="submit" onClick={handleMember}>
//                             <img src= {signup_submit} alt="submit" width="200" height="50"/>
//                         </button>
//                         </div>
//                         <div className = "signup-q">
//                             <Link to ='/login'><p>이미 계정이 있으신가요?</p></Link>
//                         </div>
//                 </form>
//             </div>
//         </>
//         );
//     };


// export default Signup;