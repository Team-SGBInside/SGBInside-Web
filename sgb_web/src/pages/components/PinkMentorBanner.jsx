import React from 'react';
import pink_banner_bg from './img/pink_banner_bg.png';
import './PinkMentorBanner.css';

const PinkMentorBanner = () => {
    return (
        <div className="pink_mentor_banner">
        <div className="pink_banner_bg">
            <img src={pink_banner_bg} alt="pink_banner_bg" width="200" height="100"/>
            <div className="pink_banner_content">
                <div className="activity_type">대회유형</div>
                <div className="activity_name">대회제목 SAMPLE</div>
                <div className="activity_writer">글쓴이 SAMPLE</div>
            </div>
        </div>
        </div>
    );
};

export default PinkMentorBanner;