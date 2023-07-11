import React from 'react';
import Login from './img/Login.png';
import Signup from './img/Signup.png';
import './LoginSignup.css';
import { Link } from 'react-router-dom';

const LoginSignup = () => {
    return (
        <div className = "loginsignup">
            <Link to ='/mentorLogin'><img src={Login} alt="Login" width="85" height="28"/></Link>&nbsp;
            <Link to ='/mentorSignup'><img src={Signup} alt="Signup" width="85" height="28"/></Link>
        </div>
    );
};

export default LoginSignup;