import React from 'react';
import PinkForm from './components/PinkForm';
import Hello from './components/Hello';
import Header from './components/Header';

const PinkRecordPage = () => {
    return (
        <>
            <div class ="header">
            <Header/>
            </div>
            <Hello/>
            <br/>
            <PinkForm/>
        </>
    );
};

export default PinkRecordPage;