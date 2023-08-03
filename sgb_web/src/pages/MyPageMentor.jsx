import React from 'react';
import MentorHeader from './components/MentorHeader';
import MentorHello from './components/MentorHello';
import MyPageInfoMentor from './components/MyPageInfoMentor';

const MyPageMentor = () => {
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
            <MyPageInfoMentor/>
        </div>
        </>
    );
};

export default MyPageMentor;