import React from 'react';
import './Menubar.css';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <>
        <div class="menu">
            <Link to = '/greenRecord'><span class="green">창의적 체험활동</span>&nbsp;</Link>
            <Link to = '/redRecord'><span class="red">세부능력 및 특기사항</span>&nbsp;</Link>
            <Link to = '/pinkRecord'><span class="pink">수상경력</span>&nbsp;</Link>
            <Link to = '/blueRecord'><span class="blue">독서활동상황</span>&nbsp;</Link>
        </div>
        </>
    );
};

export default Menubar;