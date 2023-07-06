import React from 'react';
import greenform_bg from './img/greenform_bg.png';
import green_talk from './img/green_talk.png';
import './GreenRecom.css';

function GreenRecom () {
    return (
        <div className="greenrecom"> 
            <div className="greenrecom_bg">
                <img src={greenform_bg} alt="greenform_bg" width="1200" height="1310"/>
                <div className="greenrecom_content">
                    <div classNmae="green_talk">   
                        <img src={green_talk} alt="green_talk" width="555" height="90"/> 
                    </div>     
                <br/><br/>
                </div>
            </div>
        </div>
    );
};

export default GreenRecom;