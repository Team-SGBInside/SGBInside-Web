import React from 'react';
import green_tipbox from './img/green_tipbox.png';
import './GreenTipBox.css';
import back_button from './img/back_button.png';
import { Link } from 'react-router-dom';

const GreenTipBox = () => {
    return (
        <>
        <div className ="greentipbox_bg">
            <img src={green_tipbox} alt="greentipbox_bg" width="870" height="610"/>
        </div>
        <div className ="greentip_btn">
            <Link to = "/greenRecord"> <img src = {back_button} alt= "back_button" width="230" height="60"/></Link>
        </div>
        </>    
    );
};

export default GreenTipBox;