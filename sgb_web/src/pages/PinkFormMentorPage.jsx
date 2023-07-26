import React from 'react';
import PinkFormMentor from './components/PinkFormMentor';
import MentorHello from './components/MentorHello';
import MentorHeader from './components/MentorHeader';
import MentorLoginSignup from './components/MentorLoginSignup';

const PinkFormMentorPage = () => {
    return (
        <>
            <div class ="header">
            <MentorHeader/>
            </div>
            <MentorHello/>
            <br/>
            <PinkFormMentor/>
        </>
    );
};

export default PinkFormMentorPage;