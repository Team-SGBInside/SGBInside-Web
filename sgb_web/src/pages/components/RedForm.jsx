import React, {useState} from "react";
import redform_bg from './img/redform_bg.png';
import red_alert from './img/red_alert.png';
import green_save from './img/green_save.png';
import tip_button from './img/tip_button.png';
import './RedForm.css';
import {useForm} from "react-hook-form";
import GreenModal from "../GreenModal";
import { Link } from 'react-router-dom';

function RedForm() {
        
        //리액트 훅 폼 사용해보기
        const {register,
            formState: {errors},
            handleSubmit
            } = useForm();
        const onSubmit = (data) => console.log(data);
        
        return (
        <div className="redform">
            <div className="redform_bg">
            <img src={redform_bg} alt="redform_bg" width="1200" height="1510"/>
                <div className="redform_content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <img src={red_alert} alt="red_alert" width="656.5" height="111.5"/> 
                    <br/><br/>
                        {/* 과목이름 */}
                        <label className="red-label">과목명을 적어줘!</label><br/>
                        <input
                            className = "red_name_input"
                            type="text"
                            placeholder="ex) 화법과 작문"
                            {...register("name", {required: true})}
                        />
                        <span className="error">{errors.name?.type === "required" && " 과목이름은 필수로 입력해야합니다."}</span>
                        <br/><br/>
                        {/* 배운 내용 */}
                        <label className="red-label">위 과목에서 배운 내용을 간단히 정리해볼까?</label><br/>
                        <input
                            className = "red_lesson_input"
                            type="text"
                            placeholder="ex) 시의 다양한 기법, 시에서 운율감을 자아내는 법"
                            {...register("name", {required: true})}
                        />
                        <span className="error">{errors.name?.type === "required" && " 배운 내용은 필수로 입력해야합니다."}</span>
                        <br/><br/>
                        {/* 기억에 남는 활동 */}
                        <label className="red-label">수업 중 어떤 활동이 기억에 남아?</label><br/>
                        <input
                            className = "red_activity_input"
                            type="text"
                            placeholder="ex) 남북통일 글쓰기 활동"
                            {...register("name", {required: true})}
                        />
                        <span className="error">{errors.name?.type === "required" && " 기억에 남는 활동은 필수로 입력해야합니다."}</span>
                        <br/><br/>
                        {/* 활동날짜 */}     
                        <label className="red-label">활동 날짜와 기간도 기록하자.</label><br/>
                        <input
                            className = "red_date_input"
                            type="date"
                            {...register("date", {required: true})}                           
                        />&nbsp;~&nbsp;
                        <input
                            className = "red_date_input"
                            type="date"
                            name="redEndDate"
                            {...register("date", {required: true})}   
                        />
                        <br/><span className="error">{errors.date?.type === "required" && " 활동날짜는 필수로 입력해야합니다."}</span>
                        <br/>
                        {/* 활동학기 */}
                        <select
                            className="red_semester_select"
                            name= "redSemester"
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
                        <label className="red-label">한층 더 직접 탐구한 활동내용을 자세히 기록해보자.</label>
                        <textarea
                            className="red_activity_text"
                            placeholder="ex) ‘돌이킬 수 없는 시간’을 제목으로 한 시를 작문하는 시간을 가짐. 유채꽃과 바람 등의 사물을 소재로 의인법을 사용하고,발음이 비슷한 시구를 활발히 사용하며 시의 운율감을 살리고자 노력함.  "
                            {...register("activity", {required: true})} 
                            >
                        </textarea>
                        <br/>
                        <span className="error">{errors.activity?.type === "required" && "활동내용은 필수로 입력해야합니다."}</span><br/>
                        <br/>
                        {/* 활동소감 (선택) */}
                        <label className="red-label">배우고 성장한 점, 나아가 더 공부해본 영역도 함께 남겨두자!  :)  (선택)</label>
                        <textarea
                            className="red_thought_text"
                            placeholder="ex) 여러가지 시구들을 고민해보며 어휘력이 많이 늘었고, 글의 다양한 요소들을 선택하는 데에 있어서 많은 노력을 기울여야 한다는 것을 깨달음. 나아가, 다양한 시인들의 인터뷰 영상이나 위인전 등을 통해 실제 시인들이 시를 작성하는 데에 있어서 중점을 두고 있는 부분이 어디인지 알게 됨  "
                        >
                        </textarea>
                        <br/><br/>
                        <div className = "red_button">
                            <GreenModal/>
                            <div className = "tip_button">
                                <Link to = "/redTip">
                                    <button><img src={tip_button} alt="tip_button" width="230" height="60"/></button>
                                </Link>
                            </div>
                        </div> 
                    </form>        
                </div>
            </div>  
        </div>
        );
    };

export default RedForm;
