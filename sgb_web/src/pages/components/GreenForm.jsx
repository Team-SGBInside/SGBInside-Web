import React, {useState} from "react";
import greenform_bg from './img/greenform_bg.png';
import green_alert from './img/green_alert.png';
import green_save from './img/green_save.png';
import './GreenForm.css';
import {useForm} from "react-hook-form";

function GreenForm() {
        
        // const [greenName, setGreenName] = useState("");
        // const [greenType, setGreenType] = useState("");
        // const [greenStartDate, setGreenStartDate] = useState("");
        // const [greenEndDate, setGreenEndDate] = useState("");
        // const [greenSemester, setGreenSemester] = useState("");
        // const [greenActivity, setGreenActivity] = useState("");
        // const [greenThought, setGreenThought] = useState("");
        
        // const {register,
        //     form}

        // const handleGreenName = (e) => {
        // setGreenName(e.target.value);
        // }

        // const handleGreenType = (e) => {
        // setGreenType(e.target.value);
        // }

        // const handleGreenStartDate = (e) => {
        // setGreenStartDate(e.target.value);
        // }

        // const handleGreenEndDate = (e) => {
        // setGreenEndDate(e.target.value);
        // }
    
        // const handleGreenSemester = (e) => {
        // setGreenSemester(e.target.value);
        // }

        // const handleGreenActivity = (e) => {
        // setGreenActivity(e.target.value);
        // }

        // const handleGreenThought = (e) => {
        // setGreenThought(e.target.value);
        // }

        // const saveBtnClick = (e) => {
        // console.log('click submit');
        // console.log('Activity Name: ', greenName);
        // console.log('Activity Type: ', greenType);
        // console.log('Activity Start Date: ', greenStartDate);
        // console.log('Activity End Date: ', greenEndDate);
        // console.log('Semester: ', greenSemester);
        // console.log('Activity: ', greenActivity);
        // console.log('Thought: ', greenThought);
        // }

        //리액트 훅 폼 사용해보기
        const {register,
            formState: {errors},
            handleSubmit
            } = useForm();
        const onSubmit = (data) => console.log(data);
        
        return (
        <div className="greenform">
            <div className="greenform_bg">
            <img src={greenform_bg} alt="greenform_bg" width="1500" height="1200"/>
                <div className="greenform_content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <img src={green_alert} alt="green_alert" width="604" height="86"/> 
                    <br/><br/>
                        {/* 활동이름 */}
                        <p className="green_name"><strong>활동 이름</strong>을 적고, 창의적체험활동 유형을 선택해줘!</p>
                        <input
                            className = "green_name_input"
                            type="text"
                            placeholder="ex) 풋풋고등학교 자치법정"
                            {...register("name", {required: true})}
                        />
                        <span className="error">{errors.name?.type === "required" && " 활동이름은 필수로 입력해야합니다."}</span>
                        <br/><br/>
                        {/* 활동유형 */}    
                        <input
                            className = "green_radio"
                            type="radio"
                            value="자율"
                            {...register("type", {required: true})}                  
                        />자율활동 
                        <input
                            className = "green_radio"
                            name= "greenType"
                            type="radio"
                            value="동아리"
                            {...register("type", {required: true})}        
                        />동아리활동 
                        <input
                            className = "green_radio"
                            name= "greenType"
                            type="radio"
                            value="진로"
                            {...register("type", {required: true})}
                        />진로활동 
                        <input
                            className = "green_radio"
                            name= "greenType"
                            type="radio"
                            value="봉사"
                            {...register("type", {required: true})}
                        />봉사활동     
                        <span className="error">{errors.type?.type === "required" && " 활돟유형은 필수로 선택해야합니다."}</span>
                        <br/><br/>
                        {/* 활동날짜 */}     
                        <p className="green_date"><strong>활동 날짜</strong>와 <strong>기간</strong>도 기록하자.</p>
                        <input
                            className = "green_date_input"
                            type="date"
                            {...register("date", {required: true})}                           
                        />&nbsp;~&nbsp;
                        <input
                            className = "green_date_input"
                            type="date"
                            name="greenEndDate"
                            {...register("date", {required: true})}   
                        />
                        <span className="error">{errors.date?.type === "required" && " 활돟유형은 필수로 선택해야합니다."}</span>
                        <br/><br/>
                        {/* 활동학기 */}
                        <select
                            className="green_semester_select"
                            name= "greenSemester"
                            {...register("semester", {required: true})}   
                            >                           
                            <option value="1-1">1학년 1학기</option>
                            <option value="1-2">1학년 2학기</option>
                            <option value="2-1">2학년 1학기</option>
                            <option value="2-2">2학년 2학기</option>
                            <option value="3-1">3학년 1학기</option>
                            <option value="3-2">3학년 2학기</option>
                        </select>
                        <span className="error">{errors.semester?.type === "required" && "활동학기는 필수로 선택해야합니다."}</span>
                        <br/><br/>
                        {/* 활동내용 */}
                        <p className="green_activity">위 활동에서 네 <strong>역할</strong>과 <strong>어떤 일을 했는지</strong> 알려줘!</p>
                        <textarea
                            className="green_activity_text"
                            placeholder="ex) 창체부장으로서 학급 이벤트를 기획, 체육대회 반티 주문 등  반 분위기를 주도하는 역할을 함."
                            {...register("activity", {required: true})} 
                            >
                        </textarea>
                        <br/>
                        <span className="error">{errors.activity?.type === "required" && "활동내용은 필수로 입력해야합니다."}</span>
                        {/* 활동소감 (선택) */}
                        <p className="green_thought"><strong>활동 소감</strong>도 함께 남겨두자! 기억에 더 오래남도록 말이야 :) (선택) </p>
                        <textarea
                            className="green_thought_text"
                            placeholder="ex) 반 친구들의 의견을 하나로 모으고, 학급비를 관리하는 데에 어려움이 있었다. 그렇지만, 주기적으로 학급회의를 열어 최대한 많은 친구들의 의견을 참고할 수 있었고 결과적으로 재미있는 행사를 다함께 즐길 수 있어서 좋은 기억으로 남는다.  "
                           >
                        </textarea>
                        <br/><br/>
                        {/* 저장버튼 */}
                        <button className = "green_save" type="submit">
                            <img src={green_save} type="submit" alt="green_save" width="230" height="60"/>
                        </button>   
                    </form>
                </div>
            </div>  
        </div>
        );
    };

export default GreenForm;

