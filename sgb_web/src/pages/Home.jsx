import React from 'react';
import Logo from './components/Logo';
import Menubar from './components/Menubar';
import './Home.css';

const Home = () => {
    return (
        <>
            <div class = "header">
                <Logo/>
                <Menubar/>   
            </div>
            <h1>HOME</h1>
        </>
    );
};

export default Home;