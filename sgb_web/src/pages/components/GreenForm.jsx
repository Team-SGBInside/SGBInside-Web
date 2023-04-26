import React, { useState } from "react";
import greenform_bg from './img/greenform_bg.png';
import green_alert from './img/green_alert.png';
import green_save from './img/green_save.png';
import './GreenForm.css';

const GreenForm = () => {
    const [greenName, setGreenName] = useState("");
    const [greenStartDate, setGreenStartDate] = useState("");
    const [greenEndDate, setGreenEndDate] = useState("");
    const [greenSemester, setGreenSemester] = useState("");
    const [greenActivity, setGreenActivity] = useState("");
    const [greenThought, setGreenThought] = useState("");

    const handleGreenName = (e) => {
        setGreenName(e.target.value);
    }

    const handleGreenStartDate = (e) => {
        setGreenStartDate(e.target.value);
    }

    const handleGreenEndDate = (e) => {
        setGreenEndDate(e.target.value);
    }
    
    const handleGreenSemester = (e) => {
        setGreenSemester(e.target.value);
    }

    const handleGreenActivity = (e) => {
        setGreenActivity(e.target.value);
    }

    const handleGreenThought = (e) => {
        setGreenThought(e.target.value);
    }

    const onClickSubmit = () => {
        console.log('click submit');
        console.log('Activity Name: ', greenName);
        console.log('Activity Start Date: ', greenStartDate);
        console.log('Activity End Date: ', greenEndDate);
        console.log('Semester: ', greenSemester);
        console.log('Activity', greenActivity);
    }   


    return (
        <div className="greenform">
            <div className="greenform_bg">
            <img src={greenform_bg} alt="greenform_bg" width="1500" height="1200"/>
                <div className="greenform_content">
                    <img src={green_alert} alt="green_alert" width="604" height="86"/> 
                    <br/><br/>
                    <p className="green_name"><strong>활동 이름</strong>을 적고, 창의적체험활동 유형을 선택해줘!</p>
                        <input
                            className = "green_name_input"
                            type="text"
                            placeholder="ex) 풋풋고등학교 자치법정"
                            value={greenName}
                            onChange={handleGreenName}
                        />
                        <br/><br/>
                        <input
                            className = "green_radio"
                            name= "green_type"
                            type="radio"
                            value="self"
                            onclick='getType(event)'                   
                        />자율활동
                        <input
                            className = "green_radio"
                            name= "green_type"
                            type="radio"
                            value="club"
                            onclick='getType(event)'                   
                        />동아리활동 
                        <input
                            className = "green_radio"
                            name= "green_type"
                            type="radio"
                            value="career"
                            onclick='getType(event)'                   
                        />진로활동 
                        <input
                            className = "green_radio"
                            name= "green_type"
                            type="radio"
                            value="volunteer"
                            onclick='getType(event)'                   
                        />봉사활동     
                        <br/><br/>   
                    <p className="green_date"><strong>활동 날짜</strong>와 <strong>기간</strong>도 기록하자.</p>
                        <input
                            className = "green_date_input"
                            type="date"
                            value ={greenStartDate}
                            onChange={handleGreenStartDate}                        
                        />&nbsp;~&nbsp;  
                        <input
                            className = "green_date_input"
                            type="date"
                            value ={greenEndDate}
                            onChange={handleGreenEndDate}
                        />
                        <br/><br/>
                        <select 
                            className="green_semester_select"
                            value = {greenSemester}
                            onChange={handleGreenSemester}>
                            <option value="1-1">1학년 1학기</option>
                            <option value="1-2">1학년 2학기</option>
                            <option value="2-1">2학년 1학기</option>
                            <option value="2-2">2학년 2학기</option>
                            <option value="3-1">3학년 1학기</option>
                            <option value="3-2">3학년 2학기</option>
                        </select>
                        <br/><br/>
                        <p className="green_activity">위 활동에서 네 <strong>역할</strong>과 <strong>어떤 일을 했는지</strong> 알려줘!</p>
                            <textarea
                                className="green_activity_text"
                                placeholder="ex) 창체부장으로서 학급 이벤트를 기획, 체육대회 반티 주문 등  반 분위기를 주도하는 역할을 함."
                                value={greenActivity}
                                onChange={handleGreenActivity}>
                            </textarea>
                            <br/><br/>
                        <p className="green_thought"><strong>활동 소감</strong>도 함께 남겨두자! 기억에 더 오래남도록 말이야 :) </p>
                            <textarea
                                className="green_thought_text"
                                placeholder="ex) 반 친구들의 의견을 하나로 모으고, 학급비를 관리하는 데에 어려움이 있었다. 그렇지만, 주기적으로 학급회의를 열어 최대한 많은 친구들의 의견을 참고할 수 있었고 결과적으로 재미있는 행사를 다함께 즐길 수 있어서 좋은 기억으로 남는다.  "
                                value={greenThought}
                                onChange={handleGreenThought}>
                            </textarea>
                        <br/><br/>
                </div>
                <div className = "green_save">
                    <img src={green_save} alt="green_save" width="230" height="60"/> 
                </div>
            </div>     
        </div>
        
    );
};

export default GreenForm;