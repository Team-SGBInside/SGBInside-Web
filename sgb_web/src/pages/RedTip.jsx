import React from 'react';
import Header from './components/Header';
import Hello from './components/Hello';
import RedTipBox from './components/RedTipBox';

const RedTip = () => {
    return (
        <>
        <div>
            <Header/>
        </div>
        <div>
            <Hello/>
        </div>
        <br/>
        <div>
            <RedTipBox/>
        </div>
        </>
    );
};

export default RedTip;