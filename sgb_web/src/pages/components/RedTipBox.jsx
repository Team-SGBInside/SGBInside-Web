import React from 'react';
import red_tipbox from './img/red_tipbox.png';
import './RedTipBox.css';
import back_button from './img/back_button.png';
import { Link } from 'react-router-dom';

const RedTipBox = () => {
    return (
        <>
        <div className ="redtipbox_bg">
            <img src={red_tipbox} alt="redtipbox_bg" width="870" height="1000" />
        </div>
        <div className ="redtip_btn">
            <Link to = "/redRecord"> <img src = {back_button} alt= "back_button" width="230" height="60"/></Link>
        </div>
        </>    
    );
};

export default RedTipBox;