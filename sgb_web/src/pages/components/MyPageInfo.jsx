import React from 'react';
import './MyPageInfo.css';
import InfoBox from './img/InfoBox.png';

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
            </div>
        </div>
        </>
    );
};

export default MyPageInfo;