import React from 'react';
import './Hello.css';
import mypage_btn from './img/mypage_btn.png';
import { Link } from 'react-router-dom';

const Hello = () => {
    return (
        <>
            <div className= "hello">
                <span className="light-text">오늘도 열공하세요, </span>&nbsp;김눈송<span className="light-text">님!</span>
                &nbsp; <br/><Link to = '/mypage'><img src={mypage_btn} alt="my_page" width="85" height="28"/></Link>
            </div>
        </>    
    );
};

export default Hello;