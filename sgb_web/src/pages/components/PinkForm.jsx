import React, {useState} from "react";
import pinkform_bg from './img/pinkform_bg.png';
import pink_alert from './img/pink_alert.png';
import tip_button from './img/tip_button.png';
import './PinkForm.css';
import {useForm} from "react-hook-form";
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
                        {/* 수상이름 */}
                        <label className="pink-label">수상명을 적어줘! <span className="pink-small">교과우수상(수상과목), 표창장(부문), 대회(참가부문) - 참가부문이 있는 경우만 입력</span></label><br/>
                        <input
                            className = "pink_name_input"
                            type="text"
                            placeholder="ex) 풋풋고등학교 자치법정"
                            {...register("name", {required: true})}
                        />
                        <span className="error">{errors.name?.type === "required" && " 수상명은 필수로 입력해야합니다."}</span>
                        <br/>
                        {/* 수상유형 */}    
                        <input
                            className = "pink_radio"
                            type="radio"
                            value="교과우수상"
                            {...register("type", {required: true})}                  
                        /><span className="pink-small">교과우수상</span>
                        <input
                            className = "pink_radio"
                            name= "pinkType"
                            type="radio"
                            value="표창장"
                            {...register("type", {required: true})}        
                        /><span className="pink-small">표창장</span> 
                        <input
                            className = "pink_radio"
                            name= "pinkType"
                            type="radio"
                            value="대회"
                            {...register("type", {required: true})}
                        /><span className="pink-small">대회</span>   
                        <span className="error">{errors.type?.type === "required" && " 수상유형은 필수로 선택해야합니다."}</span>
                        <br/><br/>
                        {/* 대회등급 */}     
                        <label className="pink-label">대회라면 등급도 함께 기록해줘. (선택)</label><br/>
                        <input
                            className = "pink_grade_input"
                            type="text"
                            placeholder="ex) 우수상 (2위)"
                            {...register("name", {required: false})}
                        />
                        <br/><br/>
                        {/* 수상날짜 */}
                        <label className="green-label">수상날짜를 기록해줘</label><br/>
                        <input
                            className = "pink_date_input"
                            type="date"
                            {...register("date", {required: true})}                           
                        />
                        <br/><span className="error">{errors.date?.type === "required" && " 수상날짜는 필수로 입력해야합니다."}</span>
                        {/* 수상학기 */}
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
                        <span className="error">{errors.semester?.type === "required" && "수상학기는 필수로 선택해야합니다."}</span>
                        <br/><br/>
                        {/* 수상비결 */}
                        <label className="pink-label">수상한 비결이 궁금해. 대회에서 특히 노력한 부분이나 활약한 영역이 있다면 적어줘. </label>
                        <textarea
                            className="pink_activity_text"
                            placeholder="ex) 정보검색부문에 참여한 만큼 다양한 논문과 검색포털, 웹서비스 등으르 활발히 활용하였다. 그 중, ‘Chat GPT’를 사용해서 정보검색결과를 빠르게 얻어볼 수 있어 유용했고, 입력한 검색어가 정교할 수록 더욱 정교한 답변을 얻을 수 있었다. "
                            {...register("activity", {required: true})} 
                            >
                        </textarea>
                        <br/>
                        <span className="error">{errors.activity?.type === "required" && "수상활동내용은 필수로 입력해야합니다."}</span><br/>
                        <br/>
                        {/* 활동소감 (선택) */}
                        <label className="pink-label">활동 소감도 함께 남겨두자! 기억에 더 오래남도록 말이야 :) (선택) </label>
                        <textarea
                            className="pink_thought_text"
                            placeholder="ex) 평소 관심있는 정보통신 분야에서 수상을 해서 기쁘고  뿌듯했다. 후에 정보통신 분야에서 어떤 진로를 잡을 수 있을까 고민해보게 되는 계기도 되었다.  "
                        >
                        </textarea>
                        <br/><br/>
                        <div className = "pink_button">
                            
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

