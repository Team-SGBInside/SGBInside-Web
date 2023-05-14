import React from 'react';
import green_banner from './img/green_banner.png';
import red_banner from './img/red_banner.png';
import pink_banner from './img/pink_banner.png';
import blue_banner from './img/blue_banner.png';
import './Banners.css';
import { Link } from 'react-router-dom';
const Banners = () => {
    return (
        <div className = "banners">
            <Link to ="/greenRecord"><span className = "green-banner"><img src={green_banner} alt="green_banner" width="500" height="300"/></span></Link>
            <Link to ="/redRecord"><img src={red_banner} alt="green_banner" width="500" height="300"/><br/><br/></Link>
            <Link to ="/pinkRecord"><span className = "pink-banner"><img src={pink_banner} alt="green_banner" width="500" height="300"/></span></Link>
            <Link to ="/blueRecord"><span className = "blue-banner"><img src={blue_banner} alt="green_banner" width="500" height="300"/></span></Link>
        </div>
    );
};

export default Banners;