import React from 'react';
import greenform_bg from './img/greenform_bg.png';
import green_talk from './img/green_talk.png';
import green_mentor from './img/green_mentor.png';
import './GreenRecom.css';
import { Link } from "react-router-dom";

const GreenRecom = () => {
    return (
    <div className="greenrecom"> 
        <div className="greenrecom_bg">
            <img src={greenform_bg} alt="greenform_bg" width="1200" height="1310"/>
            <div className="greenrecom_content">
                <div className="green_talk">   
                    <img src={green_talk} alt="green_talk" width="555" height="120"/> 
                </div>     
                <br/><br/>
                <div className="green_mentor">
                <Link to ="/greenMentor"><img src={green_mentor} alt="green_mentor" width="300" height="100"/></Link>
                </div>
                {/* Search 관련 코드 */}
                <div className="search_div_green">
                <input
                    type="search"
                    placeholder="검색어를 입력 하세요..."
                    name="query"
                    className="search_input_green"
                />
                </div>
            </div>
        </div>
    </div>
    );
};



export default GreenRecom;