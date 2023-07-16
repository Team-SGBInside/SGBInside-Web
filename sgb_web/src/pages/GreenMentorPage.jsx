import React from 'react';
import GreenMentor from './components/GreenMentor';
import Hello from './components/Hello';
import Header from './components/Header';

const GreenMentorPage = () => {
    return (
        <>
           <div class ="header">
            <Header/>
            </div>
            <Hello/>
            <br/>
            <GreenMentor/>        
        </>
    );
};

export default GreenMentorPage;