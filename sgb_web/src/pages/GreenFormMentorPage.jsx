import React from 'react';
import GreenFormMentor from './components/GreenFormMentor';
import MentorHello from './components/MentorHello';
import MentorHeader from './components/MentorHeader';
import MentorLoginSignup from './components/MentorLoginSignup';

const GreenFormMentorPage = () => {
    return (
        <>
            <div class ="header">
            <MentorHeader/>
            </div>
            <MentorHello/>
            <br/>
            <GreenFormMentor/>
        </>
    );
};

export default GreenFormMentorPage;