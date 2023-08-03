import React from 'react';
import MentorHeader from './components/MentorHeader';
import MentorHello from './components/MentorHello';
import MyPageInfo4Mentor from './components/MyPageInfo4Mentor';

const PinkClickedMentor = () => {
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
            <MyPageInfo4Mentor/>
        </div>
        </>
    );
};

export default PinkClickedMentor;