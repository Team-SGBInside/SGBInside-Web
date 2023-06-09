import React from 'react';
import './Menubar.css';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <>
        <div class="menu">
            <Link to = '/greenRecord'style={{ textDecoration: "none" }}><span class="green">창의적 체험활동</span>&nbsp;</Link>
           <span className="menubar_line">&nbsp;|&nbsp;</span>
            <Link to = '/redRecord' style={{ textDecoration: "none" }}><span class="red"> 세부능력 및 특기사항</span>&nbsp;</Link> 
            <span className="menubar_line">&nbsp;|&nbsp;</span>
            <Link to = '/pinkRecord' style={{ textDecoration: "none" }}><span class="pink"> 수상경력</span>&nbsp;</Link>
            <span className="menubar_line">&nbsp;|&nbsp;</span>
            <Link to = '/blueRecord' style={{ textDecoration: "none" }}><span class="blue"> 독서활동상황</span>&nbsp;</Link>
        </div>
        </>
    );
};

export default Menubar;