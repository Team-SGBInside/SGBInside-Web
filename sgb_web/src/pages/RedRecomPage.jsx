import React from 'react';
import RedRecom from './components/RedRecom';
import Hello from './components/Hello';
import Header from './components/Header';

const RedRecomPage = () => {
    return (
        <>
            <div class ="header">
            <Header/>
            </div>
            <Hello/>
            <br/>
            <RedRecom/>
        </>
    );
};

export default RedRecomPage;