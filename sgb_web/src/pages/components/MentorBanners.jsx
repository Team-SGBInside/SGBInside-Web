import React from 'react';
import green_mentor_banner from './img/green_mentor_banner.png';
import pink_mentor_banner from './img/pink_mentor_banner.png';
import './Banners.css';
import { Link } from 'react-router-dom';

const MentorBanners = () => {
    return (
        <div className = "banners">
            <Link to ="/greenRecordMentor"><span className = "green-banner"><img src={green_mentor_banner} alt="green_banner" width="500" height="600"/></span></Link>
            <Link to ="/pinkRecordMentor"><span className = "pink-banner"><img src={pink_mentor_banner} alt="green_banner" width="500" height="600"/></span></Link>
        </div>
    );
};

export default MentorBanners;