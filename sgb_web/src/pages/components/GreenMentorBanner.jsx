import React from 'react';
import green_banner_bg from './img/green_banner_bg.png';
import './GreenMentorBanner.css';

const GreenMentorBanner = () => {
    return (
        <div className="green_mentor_banner">
        <div className="green_banner_bg">
            <img src={green_banner_bg} alt="green_banner_bg" width="200" height="100"/>
            <div className="green_banner_content">
                <div className="activity_type">활동유형</div>
                <div className="activity_name">활동제목 SAMPLE</div>
                <div className="activity_writer">글쓴이 SAMPLE</div>
            </div>
        </div>
        </div>
    );
};

export default GreenMentorBanner;