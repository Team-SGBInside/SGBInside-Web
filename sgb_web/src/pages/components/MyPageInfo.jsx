import React from 'react';
import './MyPageInfo.css';
import InfoBox from './img/InfoBox.png';
import menu_whole from './img/menu_whole.png';
import menu_green from './img/menu_green.png';
import menu_red from './img/menu_red.png';
import menu_pink from './img/menu_pink.png';
import menu_blue from './img/menu_blue.png';

const MyPageInfo = () => {
    return (
        <>
        <div className="mypage">
            <div className="infobox">
                <img src={InfoBox} alt="infobox" width="600" height="200"/>
                <div className="infobox_content">
                    <span className="info_big">김눈송</span>님, 원하는 건 뭐든지 이루어질거에요!<br/>
                    <span classNmae="info_small">풋풋고등학교 3학년/ 19세</span>
                </div>
            </div><br/>
        </div>
        <br/>
        <div className="mypage2">
            <div className="infobox2">
                <div className="total_inside">
                    <span className="info_big">13</span>개의 생기부 인사이드
                </div>
                <br/>
                <div className="semester_menu">
                <div className="semester">
                    <select className="semester_select">
                        <option>1-1&nbsp;&nbsp;</option>
                        <option>1-2&nbsp;&nbsp;</option>
                        <option>2-1&nbsp;&nbsp;</option>
                        <option>2-2&nbsp;&nbsp;</option>
                        <option>3-1&nbsp;&nbsp;</option>
                        <option>3-2&nbsp;&nbsp;</option>
                    </select>
                </div>
                <div className="menu_btn">
                    <img src={menu_whole} alt="whole" width="80" height="40"/>&nbsp;
                    <img src={menu_green} alt="green" width="80" height="40"/>&nbsp;
                    <img src={menu_red} alt="red" width="80" height="40"/>&nbsp;
                    <img src={menu_pink} alt="pink" width="80" height="40"/>&nbsp;
                    <img src={menu_blue} alt="blue" width="80" height="40"/>&nbsp;
                </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default MyPageInfo;