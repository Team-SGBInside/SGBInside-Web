import React from 'react';
import './MyPageInfo.css';
import InfoBox from './img/InfoBox.png';

const MyPageInfo = () => {
    return (
        <>
            <div className="infobox">
                <img src={InfoBox} alt="infobox" width="600" height="200"/>
            </div>
        </>
    );
};

export default MyPageInfo;