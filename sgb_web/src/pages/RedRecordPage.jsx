import React from 'react';
import Logo from './components/Logo';
import Menubar from './components/Menubar';
import RedForm from './components/RedForm';
const RedRecordPage = () => {
    return (
        <>
            <div class ="header">
                <Logo/>
                <Menubar/>
            </div>
            <div>
                <RedForm/>
            </div>
        </>
    );
};

export default RedRecordPage;