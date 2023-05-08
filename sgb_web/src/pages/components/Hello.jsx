import React from 'react';
import './Hello.css';
import mypage_btn from './img/mypage_btn.png';

const Hello = () => {
    return (
        <div className="hello">
            <div className= "hello-text">
                <span className="light-text">오늘도 열공하세요,</span> 김눈송<span className="light-text">님!</span>
                <br/><img src={mypage_btn} alt="my_page" width="85" height="28"/>
            </div>
        </div>
    );
};

export default Hello;