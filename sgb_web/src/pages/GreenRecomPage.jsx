import React from 'react';
import GreenRecom from './components/GreenRecom';
import Hello from './components/Hello';
import Header from './components/Header';

const GreenRecomPage = () => {
    return (
        <>
            <div class ="header">
            <Header/>
            </div>
            <Hello/>
            <br/>
            <GreenRecom/>
        </>
    );
};

export default GreenRecomPage;