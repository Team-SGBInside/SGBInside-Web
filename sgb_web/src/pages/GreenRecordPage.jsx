import React from 'react';
import Logo from './components/Logo';
import Menubar from './components/Menubar';
import GreenForm from './components/GreenForm';
import Hello from './components/Hello';
import Header from './components/Header';
import LoginSignup from './components/LoginSignup';

const GreenRecordPage = () => {
    return (
        <>
            <div class ="header">
            <Header/>
            </div>
            <Hello/>
            <br/>
            <GreenForm/>
        </>
    );
};

export default GreenRecordPage;