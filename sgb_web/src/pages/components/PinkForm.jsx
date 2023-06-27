import React, { useRef } from "react";
import PinkModal from './PinkModal';
import pinkform_bg from './img/pinkform_bg.png';
import pink_alert from './img/pink_alert.png';
import pink_save from './img/pink_save.png';
import './PinkForm.css';
import Uploader from "./Uploader";
import axios from "axios";

function PinkForm() {
        const pinkNameRef = useRef();
        const pinkTypeRef = useRef();
        const pinkImageRef = useRef();
        const pinkGradeRef = useRef();
        const pinkDateRef = useRef();
        const pinkSemesterRef = useRef();
        const pinkRoleRef = useRef();
        const pinkThoughtRef = useRef();

        const handleMember = async () => {
            console.log("clicked");
            try {
            const response = await axios.post(
                "http://3.37.215.18:3000/activity/prize",
                {     
                    name: pinkNameRef.current.value,
                    prize : pinkGradeRef.current.value,
                    date: pinkDateRef.current.value,
                    semester: pinkSemesterRef.current.value,
                    prizeImage : "prizeImage",
                    role: pinkRoleRef.current.value,
                    thoughts: pinkThoughtRef.current.value,
                    writerId: 9,
                    type : pinkTypeRef.current.value,
                },
                {
                headers: {
                    "Content-Type": "multipart/form-data",
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
        <div className="pinkform">
            <div className="pinkform_bg">
            <img src={pinkform_bg} alt="pinkform_bg" width="1200" height="1300"/>
                <div className="pinkform_content">
                    <img src={pink_alert} alt="pink_alert" width="604" height="86"/> 
                    <br/>
                    <div className="pink-container">
                        <div className="pink-a">
                        {/* 수상이름 */}
                        <label className="pink-label">수상명을 적어줘! 
                        <br/><span className="pink-small">교과우수상(수상과목), 표창장(부문), 대회(참가부문) - 참가부문이 있는 경우만 입력</span></label><br/>
                        <input
                            className = "pink_name_input"
                            type="text"
                            placeholder="ex) 정보통신대회 (정보검색부문)"
                            ref={pinkNameRef}                        
                        />
                        <br/>
                        {/* 수상유형 */}    
                        <select
                            className="pink_type_select"
                            name= "pinkType"
                            ref = {pinkTypeRef}
                            >
                            <option value = "교과우수상">교과우수상</option>
                            <option value = "표창장">표창장</option>
                            <option value = "교내대회">교내대회</option>
                        </select>
                        </div>
                        <br/>
                        <div className="pink-b">
                        {/* 수상이미지 업로드 */}
                        <label className="pink-label">여기에 상장 이미지를 첨부해줘! (선택)</label><br/>
                        <input className="pink-image" type="file" name="myfile"/>
                        <br/>
                        </div>
                    </div>
                        <br/><br/>
                        {/* 대회등급 */}     
                        <label className="pink-label">대회라면 등급도 함께 기록해줘. (선택)</label><br/>
                        <input
                            className = "pink_grade_input"
                            type="text"
                            placeholder="ex) 우수상 (2위)"
                            ref={pinkGradeRef}
                        />
                        <br/><br/>
                        {/* 수상날짜 */}
                        <label className="green-label">수상날짜를 기록해줘</label><br/>
                        <input
                            className = "pink_date_input"
                            type="date"
                            ref={pinkDateRef}
                        /><br/>
                        {/* 수상학기 */}
                        <select
                            className="pink_semester_select"
                            name= "pinkSemester"
                            ref={pinkSemesterRef}
                            >                           
                            <option value="1-1">1학년 1학기</option>
                            <option value="1-2">1학년 2학기</option>
                            <option value="2-1">2학년 1학기</option>
                            <option value="2-2">2학년 2학기</option>
                            <option value="3-1">3학년 1학기</option>
                            <option value="3-2">3학년 2학기</option>
                        </select>
                        <br/><br/>
                        {/* 수상비결 */}
                        <label className="pink-label">수상한 비결이 궁금해. 대회에서 특히 노력한 부분이나 활약한 영역이 있다면 적어줘. </label>
                        <textarea
                            className="pink_activity_text"
                            placeholder="ex) 정보검색부문에 참여한 만큼 다양한 논문과 검색포털, 웹서비스 등으르 활발히 활용하였다. 그 중, ‘Chat GPT’를 사용해서 정보검색결과를 빠르게 얻어볼 수 있어 유용했고, 입력한 검색어가 정교할 수록 더욱 정교한 답변을 얻을 수 있었다. "
                            ref={pinkRoleRef}
                        >
                        </textarea>
                        <br/>
                        <br/>
                        {/* 활동소감 (선택) */}
                        <label className="pink-label">활동 소감도 함께 남겨두자! 기억에 더 오래남도록 말이야 :) (선택) </label>
                        <textarea
                            className="pink_thought_text"
                            placeholder="ex) 평소 관심있는 정보통신 분야에서 수상을 해서 기쁘고  뿌듯했다. 후에 정보통신 분야에서 어떤 진로를 잡을 수 있을까 고민해보게 되는 계기도 되었다.  "
                            ref={pinkThoughtRef}
                        >
                        </textarea>
                        <br/><br/>
                        <div className = "pink_button">
                            <PinkModal/>
                            <div className = "tip_button">
                                <button style={{backgroundColor: '#FDE2E6'}} onClick={handleMember} type="submit"><img src={pink_save} alt="pink_save" width="230" height="60"/></button>
                            </div>
                        </div> 
                </div>
            </div>  
        </div>
        );
    };

export default PinkForm;

