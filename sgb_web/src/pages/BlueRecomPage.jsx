import React from 'react';
import BlueRecom from './components/BlueRecom';
import Hello from './components/Hello';
import Header from './components/Header';

const BlueRecomPage = () => {
    return (
        <>
            <div class ="header">
            <Header/>
            </div>
            <Hello/>
            <br/>
            <BlueRecom/>
        </>
    );
};

export default BlueRecomPage;