import React from 'react';
import Logo from './components/Logo';
import Menubar from './components/Menubar';
import './Home.css';
import Header from './components/Header';
import LoginSignup from './components/LoginSignup';
import Banners from './components/Banners';

const Home = () => {
    return (
        <>
            <div class = "header">
                <Header/>
            </div>
            <div>
                <LoginSignup/>
            </div>
            <br/>
            <div class = "banners">
                <Banners/>
            </div> 
        </>
    );
};

export default Home;