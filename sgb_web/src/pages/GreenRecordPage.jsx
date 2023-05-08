import React from 'react';
import Logo from './components/Logo';
import Menubar from './components/Menubar';
import GreenForm from './components/GreenForm';
import Hello from './components/Hello';
import Header from './components/Header';

const GreenRecordPage = () => {
    return (
        <>
            <div class ="header">
            <Header/>
            </div>
            <div className = "hello_component">
            <Hello/>
            </div><br/>
            <GreenForm/>
        </>
    );
};

export default GreenRecordPage;