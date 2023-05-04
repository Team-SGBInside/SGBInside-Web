import React from 'react';
import Logo from './components/Logo';
import Menubar from './components/Menubar';

const BlueRecordPage = () => {
    return (
        <>
            <div class ="header">
                <Logo/>
                <Menubar/>
            </div>
            <h1>BlueRecordPage</h1>
        </>
    );
};

export default BlueRecordPage;