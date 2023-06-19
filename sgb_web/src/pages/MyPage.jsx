import React from 'react';
import Header from './components/Header';
import Hello from './components/Hello';
import MyPageInfo from './components/MyPageInfo';

const MyPage = () => {
    return (
        <>
        <div>
            <Header/>
        </div>
        <div>
            <Hello/>
        </div>
        <br/><br/> 
        <div>
            <MyPageInfo/>
        </div>
        </>
    );
};

export default MyPage;