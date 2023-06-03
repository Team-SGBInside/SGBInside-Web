import React, {useState} from "react";
import blueform_bg from './img/blueform_bg.png';
import blue_alert from './img/blue_alert.png';
import tip_button from './img/tip_button.png';
import './BlueForm.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import BlueModal from './BlueModal';

function BlueForm() {
        //리액트 훅 폼 사용해보기
        const {register,
            formState: {errors},
            handleSubmit
            } = useForm();
        const onSubmit = (data) => console.log(data);

        return (
        <div className="blueform">
            <div className="blueform_bg">
            <img src={blueform_bg} alt="blueform_bg" width="1200" height="1450"/>
                <div className="blueform_content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <img src={blue_alert} alt="blue_alert" width="604" height="120"/> 
                    <br/><br/>
                        {/* 도서이름 */}
                        <label className="blue-label">책이름과 저자를 기록해줘. ISBN 등재 도서만 기재 가능해 :) </label><br/>
                        <input
                            className = "blue_name_input"
                            type="text"
                            placeholder="ex) 데미안(헤르만 헤세)"
                            {...register("name", {required: true})}
                        />
                        <span className="error">{errors.name?.type === "required" && " 도서명은 필수로 입력해야합니다."}</span>                        
                        <br/><br/>
                        {/* 독서날짜 */}
                        <label className="green-label">읽은 날짜도 함께 기록하자.</label><br/>
                        <input
                            className = "blue_date_input"
                            type="date"
                            {...register("date", {required: true})}                           
                        />
                        <span className="error">{errors.date?.type === "required" && " 독서 날짜는 필수로 입력해야합니다."}</span><br/>
                        {/* 수상학기 */}
                        <select
                            className="blue_semester_select"
                            name= "blueSemester"
                            {...register("semester", {required: true})}   
                            >                           
                            <option value="1-1">1학년 1학기</option>
                            <option value="1-2">1학년 2학기</option>
                            <option value="2-1">2학년 1학기</option>
                            <option value="2-2">2학년 2학기</option>
                            <option value="3-1">3학년 1학기</option>
                            <option value="3-2">3학년 2학기</option>
                        </select>
                        <span className="error">{errors.semester?.type === "required" && "독서 학기는 필수로 선택해야합니다."}</span>
                        <br/><br/>
                        {/* 독후감상 */}
                        <label className="blue-label">책을 읽게 된 계기와 감상 등을 자유롭게 남겨보자! </label>
                        <textarea
                            className="blue_activity_text"
                            placeholder="ex) 헤르만 헤세가 생각하는 '삶'은 자기 자신에게로 이르는 길이었다. 끊임없이 나를 마주하고 탐구하는 것. 아이러니하게도 싱클레어의 삶은 완벽하게 고독해지므로써 혼자가 아니게 되었다. "
                            {...register("activity", {required: true})} 
                            >
                        </textarea>
                        <br/>
                        <span className="error">{errors.activity?.type === "required" && "독후감상내용은 필수로 입력해야합니다."}</span><br/>
                    
                        {/* 연계과목 */}
                        <label className="blue-label">연계되는 과목이나 영역을 알려줘. 분류가 없다면 ‘없음’ 으로 적어줘. </label><br/>
                        <input
                            className = "blue_subject_input"
                            type="text"
                            placeholder="ex) 문학"
                            {...register("name", {required: true})}
                        />
                        <span className="error">{errors.name?.type === "required" && " 연계과목은 필수로 입력해야합니다."}</span>                        
                        <br/><br/>
                        {/* 활동소감 (선택) */}
                        <label className="blue-label">특히 인상깊거나 기억하고 싶은 구절이 있었을까? 적어둔다면 기억에 더 오래남을거야! (선택) </label>
                        <textarea
                            className="blue_thought_text"
                            placeholder="ex) 당신이 믿지 못하는 소망을 욕심내면 안돼요.  "
                        >
                        </textarea>
                        <br/><br/>
                        <div className = "blue_button">
                            <BlueModal/>
                            <div className = "tip_button">
                                <Link to = "/blueTip">
                                    <button style={{backgroundColor: '#EEF2EB'}}><img src={tip_button} alt="tip_button" width="230" height="60"/></button>
                                </Link>
                            </div>
                        </div> 
                    </form>        
                </div>
            </div>  
        </div>
        );
    };

export default BlueForm;

