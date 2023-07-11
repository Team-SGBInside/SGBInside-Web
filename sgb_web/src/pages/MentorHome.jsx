import React from 'react';
import './Home.css';
import MentorHeader from './components/MentorHeader';
import MentorLoginSignup from './components/MentorLoginSignup';
import MentorBanners from './components/MentorBanners';

const MentorHome = () => {
    return (
        <>
            <div class = "header">
                <MentorHeader/>
            </div>
            <div>
                <MentorLoginSignup/>
            </div>
            <br/>
            <div class = "banners">
                <MentorBanners/>
            </div> 
        </>
    );
};

export default MentorHome;