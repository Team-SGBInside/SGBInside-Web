import React from 'react';
import Header from './components/Header';
import Hello from './components/Hello';
import MyPageInfo4 from './components/MyPageInfo4';

const PinkClicked = () => {
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
            <MyPageInfo4/>
        </div>
        </>
    );
};

export default PinkClicked;