import React from 'react';
import Logo from './components/Logo';
import Menubar from './components/Menubar';
import GreenForm from './components/GreenForm';
import Hello from './components/Hello';

const GreenRecordPage = () => {
    return (
        <>
            <div class ="header">
                <Logo/>
                <Menubar/>
            </div>
            <div className = "hello_component">
            <Hello/>
            </div>
            <GreenForm/>
        </>
    );
};

export default GreenRecordPage;