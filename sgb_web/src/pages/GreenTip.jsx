import React from 'react';
import Header from './components/Header';
import Hello from './components/Hello';
import GreenTipBox from './components/GreenTipBox';

const GreenTip = () => {
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
            <GreenTipBox/>
        </div>
        </>
    );
};

export default GreenTip;