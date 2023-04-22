import React, { useState } from "react";
import greenform_bg from './img/greenform_bg.png';
import green_alert from './img/green_alert.png';
import './GreenForm.css';

const GreenForm = () => {
    const [greenName, setGreenName] = useState("");
    const [greenStartDate, setGreenStartDate] = useState("");
    const [greenEndDate, setGreenEndDate] = useState("");

    const handleGreenName = (e) => {
        setGreenName(e.target.value);
    }

    const handleGreenStartDate = (e) => {
        setGreenStartDate(e.target.value);
    }

    const handleGreenEndDate = (e) => {
        setGreenEndDate(e.target.value);
    }

    const onClickSubmit = () => {
        console.log('click submit');
        console.log('Activity Name: ', greenName);
        console.log('Activity Start Date: ', greenStartDate);
        console.log('Activity End Date: ', greenEndDate);

    }   


    return (
        <div className="greenform">
            <div className="greenform_bg">
            <img src={greenform_bg} alt="greenform_bg" width="1500" height="991"/>
                <div className="greenform_content">
                    <img src={green_alert} alt="green_alert" width="604" height="86"/> 
                    <br/><br/>
                    <p className="green_name"><strong>활동 이름</strong>을 적고, 창의적체험활동 유형을 선택해줘!</p>
                        <input
                            className = "green_name_input"
                            type="text"
                            placeholder=" ex) 풋풋고등학교 자치법정"
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
                </div>
            </div> 
        </div>
    );
};

export default GreenForm;