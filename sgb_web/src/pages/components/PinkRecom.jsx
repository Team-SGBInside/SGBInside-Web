import React from 'react';
import pinkform_bg from './img/pinkform_bg.png';
import pink_talk from './img/pink_talk.png';
import './PinkRecom.css';

function PinkRecom () {
    return (
        <div className="pinkrecom"> 
            <div className="pinkrecom_bg">
                <img src={pinkform_bg} alt="pinkform_bg" width="1200" height="1310"/>
                <div className="pinkrecom_content">
                    <div classNmae="pink_talk">   
                        <img src={pink_talk} alt="pink_talk" width="555" height="90"/> 
                    </div>     
                <br/><br/>
                {/* Search 관련 코드 */}
                <div className="search_div_pink">
                <input
                    type="search"
                    placeholder="검색어를 입력 하세요..."
                    name="query"
                    className="search_input_pink"
                />
                </div>
                </div>
            </div>
        </div>
    );
};

export default PinkRecom;