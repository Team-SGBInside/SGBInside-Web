import React from 'react';
import sgb_logo from './img/sgb_logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to = '/home'>
        <div class = "logo">
            <div> 
                <img src={sgb_logo} alt="logo" width="264.5" height="87"/>
            </div>
        </div>
        </Link>
    );
};

export default Logo;