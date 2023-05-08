import React from 'react';
import Logo from './Logo';
import Menubar from './Menubar';
import './Header.css';

const Header = () => {
    return (
        <div className = "header">
            <div className='Logo'>
                <Logo/>
            </div>       
                <Menubar/>
        </div> 
    );
};

export default Header;