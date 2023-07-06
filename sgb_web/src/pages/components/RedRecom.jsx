import React from 'react';
import redform_bg from './img/redform_bg.png';
import red_talk from './img/red_talk.png';
import './RedRecom.css';

function RedRecom () {
    return (
        <div className="redrecom"> 
            <div className="redrecom_bg">
                <img src={redform_bg} alt="redform_bg" width="1200" height="1310"/>
                <div className="redrecom_content">
                    <div classNmae="red_talk">   
                        <img src={red_talk} alt="red_talk" width="555" height="90"/> 
                    </div>     
                <br/><br/>
                </div>
            </div>
        </div>
    );
};

export default RedRecom;