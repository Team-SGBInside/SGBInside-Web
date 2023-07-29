import React, { useRef } from "react";
import greenform_bg from './img/greenform_bg.png';
import green_alert_mentor from './img/green_alert_mentor.png';
import green_save from './img/green_save.png';
import './GreenForm.css';
import axios from "axios";

function GreenFormMentor () {
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
                name: greenNameRef.current.value,
                activityType: greenTypeRef.current.value,
                startDate: greenStartDateRef.current.value,
                endDate: greenEndDateRef.current.value,
                semester: greenSemesterRef.current.value,
                role: greenActivityRef.current.value,
                thoughts: greenThoughtRef.current.value,
                writerId: 9,
            },
            {
            headers: {
                "Content-Type": "application/json",
                },
            }
        );
        console.log(response);
        window.alert("성공적으로 기록되었습니다."); //성공페이지로 라우팅
        } catch (error) {
        console.log(error);
        window.alert("기록에 실패했습니다. 필수입력란을 전부 기입해주세요."); //실패페이지로 라우팅
        }
    }  
        return (
        <div className="greenform">
            <div className="greenform_bg">
            <img src={greenform_bg} alt="greenform_bg" width="1200" height="1210"/>
                <div className="greenform_content">
                    <img src={green_alert_mentor} alt="green_alert_mentor" width="604" height="110"/> 
                    <br/><br/><br/> 
                        {/* 활동이름 */}
                        <label className="green-label">활동 이름을 적고, 창의적체험활동 유형을 선택해주세요.</label><br/>
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
                            className="green_type_select"
                            name= "greenType"
                            ref = {greenTypeRef}
                            >                           
                            <option value="self">자율활동</option>
                            <option value="club">동아리활동</option>
                            <option value="career">진로활동</option>
                            <option value="volunteer">봉사활동</option>
                        </select>  
                        <br/><br/>
                        {/* 활동날짜 */}     
                        <label className="green-label">활동 날짜와 기간도 기록해주세요.</label><br/>
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
                        <label className="green-label">위 활동에서의 구체적인 역할과 어떤 일을 했는 지 작성해주세요. </label>
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
                        <label className="green-label">창의적 체험활동과 관련해 기타 조언이 있다면 자유롭게 작성해주세요! (선택)</label>
                        <textarea
                            className="green_thought_text"
                            placeholder="ex) 반 친구들의 의견을 하나로 모으고, 학급비를 관리하는 데에 어려움이 있었다. 그렇지만, 주기적으로 학급회의를 열어 최대한 많은 친구들의 의견을 참고할 수 있었고 결과적으로 재미있는 행사를 다함께 즐길 수 있어서 좋은 기억으로 남는다.  "
                            name="greenThought"
                            ref={greenThoughtRef}
                        >
                        </textarea>
                        <br/><br/><br/>
                        <div className = "green_button">
                            <div className = "tip_button">
                                <button type="submit" style={{backgroundColor: '#EAF7DA'}} onClick={handleMember}><img src={green_save} alt="green_save" width="230" height="60"/></button>   
                            </div>
                        </div> 
                </div>
            </div>  
        </div>
        );
    };

export default GreenFormMentor;

