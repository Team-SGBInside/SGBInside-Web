import React from 'react';
import MentorHeader from './components/MentorHeader';
import MentorHello from './components/MentorHello';
import MyPageInfo2Mentor from './components/MyPageInfo2Mentor';

const GreenClickedMentor = () => {
    return (
        <>
        <div>
            <MentorHeader/>
        </div>
        <div>
            <MentorHello/>
        </div>
        <br/><br/> 
        <div>
            <MyPageInfo2Mentor/>
        </div>
        </>
    );
};

export default GreenClickedMentor;