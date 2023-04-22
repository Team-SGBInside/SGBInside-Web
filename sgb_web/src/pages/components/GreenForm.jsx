import React from 'react';
import greenform_bg from './img/greenform_bg.png';
import './GreenForm.css';

const GreenForm = () => {
    return (
        <div className="greenform">
            <div className="greenform_content">
                <p>HELLO</p>
            </div>
            <div className="greenform_bg">
                <img src={greenform_bg} alt="greenform_bg" width="869" height="991"/>
            </div> 
        </div>
    );
};

export default GreenForm;