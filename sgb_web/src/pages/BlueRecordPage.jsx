import React from 'react';
import Logo from './components/Logo';
import Menubar from './components/Menubar';
import BlueForm from './components/BlueForm';
import Header from './components/Header';
import Hello from './components/Hello';

const BlueRecordPage = () => {
    return (
        <>
            <div class ="header">
            <Header/>
            </div>
            <Hello/>
            <br/>
            <BlueForm/>
        </>
    );
};

export default BlueRecordPage;