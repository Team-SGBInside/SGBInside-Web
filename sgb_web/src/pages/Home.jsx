import React from 'react';
import Logo from './components/Logo';
import Menubar from './components/Menubar';
import './Home.css';
import Header from './components/Header';
import LoginSignup from './components/LoginSignup';

const Home = () => {
    return (
        <>
            <div class = "header">
                <Header/>
            </div>
            <div>
                <LoginSignup/>
            </div>
        </>
    );
};

export default Home;