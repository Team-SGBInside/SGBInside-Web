import React from 'react';
import './Home.css';
import Header from './components/Header';
import Hello from './components/Hello';
import Banners from './components/Banners';

const Home = () => {
    return (
        <>
            <div class = "header">
                <Header/>
            </div>
            <div>
                <Hello/>
            </div>
            <br/>
            <div class = "banners">
                <Banners/>
            </div> 
        </>
    );
};

export default Home;