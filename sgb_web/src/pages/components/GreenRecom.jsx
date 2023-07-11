import React from 'react';
import greenform_bg from './img/greenform_bg.png';
import green_talk from './img/green_talk.png';
import './GreenRecom.css';

const GreenRecom = () => {
    return (
    <div className="greenrecom"> 
        <div className="greenrecom_bg">
            <img src={greenform_bg} alt="greenform_bg" width="1200" height="1310"/>
            <div className="greenrecom_content">
                <div classNmae="green_talk">   
                    <img src={green_talk} alt="green_talk" width="555" height="90"/> 
                </div>     
            <br/><br/>
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