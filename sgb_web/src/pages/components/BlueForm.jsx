import React, { useRef } from "react";
import BlueModal from "./BlueModal";
import blueform_bg from './img/blueform_bg.png';
import blue_alert from './img/blue_alert.png';
import tip_button from './img/tip_button.png';
import blue_save from './img/blue_save.png';
import './BlueForm.css';
import axios from "axios";

function BlueForm() {
        return (
        <div className="blueform">
            <div className="blueform_bg">
            <img src={blueform_bg} alt="blueform_bg" width="1200" height="1450"/>
                <div className="blueform_content">
                   <img src={blue_alert} alt="blue_alert" width="604" height="120"/> 
                    <br/><br/>
                        {/* 도서이름 */}
                        <label className="blue-label">책이름과 저자를 기록해줘. ISBN 등재 도서만 기재 가능해 :) </label><br/>
                        <input
                            className = "blue_name_input"
                            type="text"
                            placeholder="ex) 데미안(헤르만 헤세)"
                        />
                        <br/><br/>
                        {/* 독서날짜 */}
                        <label className="green-label">읽은 날짜도 함께 기록하자.</label><br/>
                        <input
                            className = "blue_date_input"
                            type="date"
                        /><br/>
                        {/* 수상학기 */}
                        <select
                            className="blue_semester_select"
                            name= "blueSemester"
                            >                           
                            <option value="1-1">1학년 1학기</option>
                            <option value="1-2">1학년 2학기</option>
                            <option value="2-1">2학년 1학기</option>
                            <option value="2-2">2학년 2학기</option>
                            <option value="3-1">3학년 1학기</option>
                            <option value="3-2">3학년 2학기</option>
                        </select>
                        <br/><br/>
                        {/* 독후감상 */}
                        <label className="blue-label">책을 읽게 된 계기와 감상 등을 자유롭게 남겨보자! </label>
                        <textarea
                            className="blue_activity_text"
                            placeholder="ex) 헤르만 헤세가 생각하는 '삶'은 자기 자신에게로 이르는 길이었다. 끊임없이 나를 마주하고 탐구하는 것. 아이러니하게도 싱클레어의 삶은 완벽하게 고독해지므로써 혼자가 아니게 되었다. "
                            >
                        </textarea>
                        <br/><br/>                    
                        {/* 연계과목 */}
                        <label className="blue-label">연계되는 과목이나 영역을 알려줘. 분류가 없다면 ‘없음’ 으로 적어줘. </label><br/>
                        <input
                            className = "blue_subject_input"
                            type="text"
                            placeholder="ex) 문학"
                        />
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
                                <button style={{backgroundColor: '#EEF2EB'}}><img src={blue_save} alt="blue_save" width="230" height="60"/></button>
                            </div>
                        </div> 
                </div>
            </div>  
        </div>
        );
    };

export default BlueForm;

