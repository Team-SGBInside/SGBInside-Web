import React from 'react';
import Logo from './components/Logo';
import Menubar from './components/Menubar';

const PinkRecordPage = () => {
    return (
        <>
            <div class ="header">
                <Logo/>
                <Menubar/>
            </div>
            <h1>PinkRecordPage</h1>
        </>
    );
};

export default PinkRecordPage;