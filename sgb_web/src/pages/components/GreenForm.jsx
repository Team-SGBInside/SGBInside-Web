import React, {useState} from "react";
import greenform_bg from './img/greenform_bg.png';
import green_alert from './img/green_alert.png';
import green_save from './img/green_save.png';
import tip_button from './img/tip_button.png';
import './GreenForm.css';
import {useForm} from "react-hook-form";
import GreenModal from "./GreenModal";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useRef } from "react";

const GreenForm = () => {
    const greenNameRef = useRef();
    const greenTypeRef = useRef();
    const greenStartDateRef = useRef();
    const greenEndDateRef = useRef();
    const greenSemesterRef = useRef();
    const greenActivityRef = useRef();
    const greenThoughtRef = useRef();

    const handleMember = async () => {
        console.log("clicked");
        try {
        const response = await axios.post(
            "http://3.37.215.18:3000/activity/creative",
            {
                userId: 9,
                name: greenNameRef.current.value,
                activityType: greenTypeRef.current.value,
                startDate: greenStartDateRef.current.value,
                endDate: greenEndDateRef.current.value,
                semester: greenSemesterRef.current.value,
                role: greenActivityRef.current.value,
                thoughts: greenThoughtRef.current.value,
            },
            {
            headers: {
                "Content-Type": "application/json",
                },
            }
        );
        console.log(response);
        window.alert("기록되었습니다. "); //성공페이지로 라우팅
        } catch (error) {
        console.log(error);
        window.alert("기록 실패"); //실패페이지로 라우팅
        }
    };
        //리액트 훅 폼 사용해보기
        // const {register,
        //     formState: {errors},
        //     handleSubmit
        //     } = useForm();
        // const onSubmit = (data) => console.log(data);
        
        return (
        <div className="greenform">
            <div className="greenform_bg">
            <img src={greenform_bg} alt="greenform_bg" width="1200" height="1310"/>
                <div className="greenform_content">
                    <form>
                    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                    <img src={green_alert} alt="green_alert" width="604" height="86"/> 
                    <br/><br/>
                        {/* 활동이름 */}
                        <label className="green-label">활동 이름을 적고, 창의적체험활동 유형을 선택해줘!</label><br/>
                        <input
                            className = "green_name_input"
                            type="text"
                            name="greenName"
                            placeholder="ex) 풋풋고등학교 자치법정"
                            ref={greenNameRef}
                            //{...register("name", {required: true})}
                        />
                        {/* <span className="error">{errors.name?.type === "required" && " 활동이름은 필수로 입력해야합니다."}</span> */}
                        <br/><br/>
                        {/* 활동유형 */}    
                        <input
                            className = "green_radio"
                            type="radio"
                            name="greenType"
                            value="자율"
                            ref={greenTypeRef}
                            //{...register("type", {required: true})}                  
                        />자율활동 
                        <input
                            className = "green_radio"
                            name= "greenType"
                            type="radio"
                            value="동아리"
                            ref={greenTypeRef}
                            //{...register("type", {required: true})}        
                        />동아리활동 
                        <input
                            className = "green_radio"
                            name= "greenType"
                            type="radio"
                            value="진로"
                            ref={greenTypeRef}
                            //{...register("type", {required: true})}
                        />진로활동 
                        <input
                            className = "green_radio"
                            name= "greenType"
                            type="radio"
                            value="봉사"
                            ref={greenTypeRef}
                            //{...register("type", {required: true})}
                        />봉사활동     
                        {/* <span className="error">{errors.type?.type === "required" && " 활동유형은 필수로 선택해야합니다."}</span> */}
                        <br/><br/>
                        {/* 활동날짜 */}     
                        <label className="green-label">활동 날짜와 기간도 기록하자.</label><br/>
                        <input
                            className = "green_date_input"
                            type="date"
                            name="greenStartDate"
                            ref={greenStartDateRef}
                            //{...register("date", {required: true})}                           
                        />&nbsp;~&nbsp;
                        <input
                            className = "green_date_input"
                            type="date"
                            name="greenEndDate"
                            ref={greenEndDateRef}
                            //{...register("date", {required: true})}   
                        />
                        {/* <br/><span className="error">{errors.date?.type === "required" && " 활동날짜는 필수로 입력해야합니다."}</span> */}
                        <br/>
                        {/* 활동학기 */}
                        <select
                            className="green_semester_select"
                            name= "greenSemester"
                            ref = {greenSemesterRef}
                            //{...register("semester", {required: true})}   
                            >                           
                            <option value="1-1">1학년 1학기</option>
                            <option value="1-2">1학년 2학기</option>
                            <option value="2-1">2학년 1학기</option>
                            <option value="2-2">2학년 2학기</option>
                            <option value="3-1">3학년 1학기</option>
                            <option value="3-2">3학년 2학기</option>
                        </select>
                        {/* <span className="error">{errors.semester?.type === "required" && "활동학기는 필수로 선택해야합니다."}</span> */}
                        <br/><br/>
                        {/* 활동내용 */}
                        <label className="green-label">위 활동에서 네 역할과 어떤 일을 했는지 알려줘!</label>
                        <textarea
                            className="green_activity_text"
                            placeholder="ex) 창체부장으로서 학급 이벤트를 기획, 체육대회 반티 주문 등  반 분위기를 주도하는 역할을 함."
                            name="greenActivity"
                            ref={greenActivityRef}
                            //{...register("activity", {required: true})} 
                            >
                        </textarea>
                        <br/>
                        {/* <span className="error">{errors.activity?.type === "required" && "활동내용은 필수로 입력해야합니다."}</span><br/> */}
                        <br/>
                        {/* 활동소감 (선택) */}
                        <label className="green-label">활동 소감도 함께 남겨두자! 기억에 더 오래남도록 말이야 :) (선택) </label>
                        <textarea
                            className="green_thought_text"
                            placeholder="ex) 반 친구들의 의견을 하나로 모으고, 학급비를 관리하는 데에 어려움이 있었다. 그렇지만, 주기적으로 학급회의를 열어 최대한 많은 친구들의 의견을 참고할 수 있었고 결과적으로 재미있는 행사를 다함께 즐길 수 있어서 좋은 기억으로 남는다.  "
                            name="greenThought"
                            ref={greenThoughtRef}
                        >
                        </textarea>
                        <br/><br/>
                        <div className = "green_button">
                            <GreenModal/>
                            <div className = "tip_button">
                                    <button style={{backgroundColor: '#EAF7DA'}} onClick={handleMember}><img src={green_save} alt="green_save" width="230" height="60"/></button>   
                            </div>
                        </div> 
                    </form>        
                </div>
            </div>  
        </div>
        );
    };

export default GreenForm;

