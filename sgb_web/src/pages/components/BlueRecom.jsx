import React from 'react';
import blueform_bg from './img/blueform_bg.png';
import blue_talk from './img/blue_talk.png';
import './BlueRecom.css';

function BlueRecom () {
    return (
        <div className="bluerecom"> 
            <div className="bluerecom_bg">
                <img src={blueform_bg} alt="blueform_bg" width="1200" height="1310"/>
                <div className="bluerecom_content">
                    <div classNmae="blue_talk">   
                        <img src={blue_talk} alt="blue_talk" width="555" height="90"/> 
                    </div>     
                <br/><br/>
                {/* Search 관련 코드 */}
                <div className="search_div_blue">
                <input
                    type="search"
                    placeholder="검색어를 입력 하세요..."
                    name="query"
                    className="search_input_blue"
                />
                </div>
                </div>
            </div>
        </div>
    );
};

export default BlueRecom;