import React from 'react';
import Logo from './Logo';
import Menubar from './Menubar';

const Header = () => {
    return (
        <>
        <div>
            <Logo/>
        </div>
        <div>   
            <Menubar/>
        </div> 
        </>
    );
};

export default Header;