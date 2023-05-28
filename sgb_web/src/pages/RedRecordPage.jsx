import React from 'react';
import RedForm from './components/RedForm';
import Hello from './components/Hello';
import Header from './components/Header';

const RedRecordPage = () => {
    return (
        <>
            <div class ="header">
            <Header/>
            </div>
            <div>
            <Hello/>
            <br/>    
            <RedForm/>
            </div>
        </>
    );
};

export default RedRecordPage;