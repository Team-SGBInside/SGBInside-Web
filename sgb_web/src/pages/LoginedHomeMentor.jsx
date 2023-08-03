import React from 'react';
import './Home.css';
import MentorHeader from './components/MentorHeader';
import MentorHello from './components/MentorHello';
import MentorBanners from './components/MentorBanners';

const Home = () => {
    return (
        <>
            <div class = "header">
                <MentorHeader/>
            </div>
            <div>
                <MentorHello/>
            </div>
            <br/>
            <div class = "banners">
                <MentorBanners/>
            </div> 
        </>
    );
};

export default Home;