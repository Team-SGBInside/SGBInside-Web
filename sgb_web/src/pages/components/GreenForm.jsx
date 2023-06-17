import React, { useRef } from "react";
import GreenModal from "./GreenModal";
import greenform_bg from './img/greenform_bg.png';
import green_alert from './img/green_alert.png';
import green_save from './img/green_save.png';
import './GreenForm.css';
import axios from "axios";

function GreenForm () {
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
        window.alert("기록되었습니다."); //성공페이지로 라우팅
        } catch (error) {
        console.log(error);
        window.alert("기록 실패"); //실패페이지로 라우팅
        }
    }  
        return (
        <div className="greenform">
            <div className="greenform_bg">
            <img src={greenform_bg} alt="greenform_bg" width="1200" height="1310"/>
                <div className="greenform_content">
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
                        />
                        <br/>                        
                        {/* 활동유형 */}    
                        <select
                            className="green_semester_select"
                            name= "greenSemester"
                            ref = {greenTypeRef}
                            >                           
                            <option value="self">자율활동</option>
                            <option value="club">동아리활동</option>
                            <option value="career">진로활동</option>
                            <option value="volunteer">봉사활동</option>
                        </select>  
                        <br/><br/>
                        {/* 활동날짜 */}     
                        <label className="green-label">활동 날짜와 기간도 기록하자.</label><br/>
                        <input
                            className = "green_date_input"
                            type="date"
                            name="greenStartDate"
                            ref={greenStartDateRef}
                        />&nbsp;~&nbsp;
                        <input
                            className = "green_date_input"
                            type="date"
                            name="greenEndDate"
                            ref={greenEndDateRef}
                        />
                        <br/>
                        {/* 활동학기 */}
                        <select
                            className="green_semester_select"
                            name= "greenSemester"
                            ref = {greenSemesterRef}
                            >                           
                            <option value="1-1">1학년 1학기</option>
                            <option value="1-2">1학년 2학기</option>
                            <option value="2-1">2학년 1학기</option>
                            <option value="2-2">2학년 2학기</option>
                            <option value="3-1">3학년 1학기</option>
                            <option value="3-2">3학년 2학기</option>
                        </select>
                        <br/><br/>
                        {/* 활동내용 */}
                        <label className="green-label">위 활동에서 네 역할과 어떤 일을 했는지 알려줘!</label>
                        <textarea
                            className="green_activity_text"
                            placeholder="ex) 창체부장으로서 학급 이벤트를 기획, 체육대회 반티 주문 등  반 분위기를 주도하는 역할을 함."
                            name="greenActivity"
                            ref={greenActivityRef}
                            >
                        </textarea>
                        <br/>
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
                                <button type="submit" style={{backgroundColor: '#EAF7DA'}} onClick={handleMember}><img src={green_save} alt="green_save" width="230" height="60"/></button>   
                            </div>
                        </div> 
                </div>
            </div>  
        </div>
        );
    };

export default GreenForm;

