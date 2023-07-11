import React from 'react';
import './Menubar.css';
import { Link } from 'react-router-dom';

const MentorMenubar = () => {
    return (
        <>
        <div class="menu">
            <Link to = '/greenRecordMentor'style={{ textDecoration: "none" }}><span class="green">창체 활동 팁 추천하기</span>&nbsp;</Link>
            <span className="menubar_line">&nbsp;|&nbsp;</span>
            <Link to = '/pinkRecordMentor' style={{ textDecoration: "none" }}><span class="pink"> 수상경력 팁 추천하기</span>&nbsp;</Link>
            <span className="menubar_line">&nbsp;&nbsp;</span>
        </div>
        </> 
    );
};

export default MentorMenubar;