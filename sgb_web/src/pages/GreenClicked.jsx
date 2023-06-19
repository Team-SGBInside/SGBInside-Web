import React from 'react';
import Header from './components/Header';
import Hello from './components/Hello';
import MyPageInfo2 from './components/MyPageInfo2';

const GreenClicked = () => {
    return (
        <>
        <div>
            <Header/>
        </div>
        <div>
            <Hello/>
        </div>
        <br/><br/> 
        <div>
            <MyPageInfo2/>
        </div>
        </>
    );
};

export default GreenClicked;