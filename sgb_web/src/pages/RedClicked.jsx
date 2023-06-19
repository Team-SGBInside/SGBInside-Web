import React from 'react';
import Header from './components/Header';
import Hello from './components/Hello';
import MyPageInfo3 from './components/MyPageInfo3';

const RedClicked = () => {
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
            <MyPageInfo3/>
        </div>
        </>
    );
};

export default RedClicked;