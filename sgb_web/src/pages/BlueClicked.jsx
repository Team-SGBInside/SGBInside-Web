import React from 'react';
import Header from './components/Header';
import Hello from './components/Hello';
import MyPageInfo5 from './components/MyPageInfo5';

const BlueClicked = () => {
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
            <MyPageInfo5/>
        </div>
        </>
    );
};

export default BlueClicked;