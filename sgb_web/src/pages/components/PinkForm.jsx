import React, {useState} from "react";
import pinkform_bg from './img/pinkform_bg.png';
import pink_alert from './img/pink_alert.png';
import tip_button from './img/tip_button.png';
import './PinkForm.css';
import {useForm} from "react-hook-form";
import PinkModal from "../PinkModal";
import { Link } from 'react-router-dom';

function PinkForm() {
        
        //리액트 훅 폼 사용해보기
        const {register,
            formState: {errors},
            handleSubmit
            } = useForm();
        const onSubmit = (data) => console.log(data);

        return (
        <div className="pinkform">
            <div className="pinkform_bg">
            <img src={pinkform_bg} alt="pinkform_bg" width="1200" height="1310"/>
                <div className="pinkform_content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <img src={pink_alert} alt="pink_alert" width="604" height="86"/> 
                    <br/><br/>
                        {/* 활동이름 */}
                        <label className="pink-label">수상명을 적어줘! <span className="pink-small">교과우수상(수상과목), 표창장(부문), 대회(참가부문) - 참가부문이 있는 경우만 입력</span></label><br/>
                        <input
                            className = "pink_name_input"
                            type="text"
                            placeholder="ex) 풋풋고등학교 자치법정"
                            {...register("name", {required: true})}
                        />
                        <span className="error">{errors.name?.type === "required" && " 활동이름은 필수로 입력해야합니다."}</span>
                        <br/><br/>
                        {/* 활동유형 */}    
                        <input
                            className = "pink_radio"
                            type="radio"
                            value="자율"
                            {...register("type", {required: true})}                  
                        /><span className="pink-small">교과우수상</span>
                        <input
                            className = "pink_radio"
                            name= "pinkType"
                            type="radio"
                            value="동아리"
                            {...register("type", {required: true})}        
                        /><span className="pink-small">교과우수상</span> 
                        <input
                            className = "pink_radio"
                            name= "pinkType"
                            type="radio"
                            value="진로"
                            {...register("type", {required: true})}
                        /><span className="pink-small">교과우수상</span>   
                        <span className="error">{errors.type?.type === "required" && " 활동유형은 필수로 선택해야합니다."}</span>
                        <br/><br/>
                        {/* 활동날짜 */}     
                        <label className="pink-label">활동 날짜와 기간도 기록하자.</label><br/>
                        <input
                            className = "pink_date_input"
                            type="date"
                            {...register("date", {required: true})}                           
                        />&nbsp;~&nbsp;
                        <input
                            className = "pink_date_input"
                            type="date"
                            name="pinkEndDate"
                            {...register("date", {required: true})}   
                        />
                        <br/><span className="error">{errors.date?.type === "required" && " 활동날짜는 필수로 입력해야합니다."}</span>
                        <br/>
                        {/* 활동학기 */}
                        <select
                            className="pink_semester_select"
                            name= "pinkSemester"
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
                        <label className="pink-label">위 활동에서 네 역할과 어떤 일을 했는지 알려줘!</label>
                        <textarea
                            className="pink_activity_text"
                            placeholder="ex) 창체부장으로서 학급 이벤트를 기획, 체육대회 반티 주문 등  반 분위기를 주도하는 역할을 함."
                            {...register("activity", {required: true})} 
                            >
                        </textarea>
                        <br/>
                        <span className="error">{errors.activity?.type === "required" && "활동내용은 필수로 입력해야합니다."}</span><br/>
                        <br/>
                        {/* 활동소감 (선택) */}
                        <label className="pink-label">활동 소감도 함께 남겨두자! 기억에 더 오래남도록 말이야 :) (선택) </label>
                        <textarea
                            className="pink_thought_text"
                            placeholder="ex) 반 친구들의 의견을 하나로 모으고, 학급비를 관리하는 데에 어려움이 있었다. 그렇지만, 주기적으로 학급회의를 열어 최대한 많은 친구들의 의견을 참고할 수 있었고 결과적으로 재미있는 행사를 다함께 즐길 수 있어서 좋은 기억으로 남는다.  "
                        >
                        </textarea>
                        <br/><br/>
                        <div className = "pink_button">
                            <pinkModal/>
                            <div className = "tip_button">
                                <Link to = "/pinkTip">
                                    <button style={{backgroundColor: '#EAF7DA'}}><img src={tip_button} alt="tip_button" width="230" height="60"/></button>
                                </Link>
                            </div>
                        </div> 
                    </form>        
                </div>
            </div>  
        </div>
        );
    };

export default PinkForm;

