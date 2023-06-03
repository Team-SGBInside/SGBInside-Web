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
                        {/* 수상비결 */}
                        <label className="blue-label">수상한 비결이 궁금해. 대회에서 특히 노력한 부분이나 활약한 영역이 있다면 적어줘. </label>
                        <textarea
                            className="blue_activity_text"
                            placeholder="ex) 정보검색부문에 참여한 만큼 다양한 논문과 검색포털, 웹서비스 등으르 활발히 활용하였다. 그 중, ‘Chat GPT’를 사용해서 정보검색결과를 빠르게 얻어볼 수 있어 유용했고, 입력한 검색어가 정교할 수록 더욱 정교한 답변을 얻을 수 있었다. "
                            {...register("activity", {required: true})} 
                            >
                        </textarea>
                        <br/>
                        <span className="error">{errors.activity?.type === "required" && "수상활동내용은 필수로 입력해야합니다."}</span><br/>
                        <br/>
                        {/* 활동소감 (선택) */}
                        <label className="blue-label">활동 소감도 함께 남겨두자! 기억에 더 오래남도록 말이야 :) (선택) </label>
                        <textarea
                            className="blue_thought_text"
                            placeholder="ex) 평소 관심있는 정보통신 분야에서 수상을 해서 기쁘고  뿌듯했다. 후에 정보통신 분야에서 어떤 진로를 잡을 수 있을까 고민해보게 되는 계기도 되었다.  "
                        >
                        </textarea>
                        <br/><br/>
                        <div className = "blue_button">
                            <BlueModal/>
                            <div className = "tip_button">
                                <Link to = "/blueTip">
                                    <button style={{backgroundColor: '#FDE2E6'}}><img src={tip_button} alt="tip_button" width="230" height="60"/></button>
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

