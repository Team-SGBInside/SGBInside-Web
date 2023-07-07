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
                </div>
            </div>
        </div>
    );
};

export default PinkRecom;