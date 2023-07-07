import React from 'react';
import PinkRecom from './components/PinkRecom';
import Hello from './components/Hello';
import Header from './components/Header';

const PinkRecomPage = () => {
    return (
        <>
            <div class ="header">
            <Header/>
            </div>
            <Hello/>
            <br/>
            <PinkRecom/>
        </>
    );
};

export default PinkRecomPage;