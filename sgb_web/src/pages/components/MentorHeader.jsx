import React from 'react';
import MentorLogo from './MentorLogo';
import MentorMenubar from './MentorMenubar';
import './Header.css';

const MentorHeader = () => {
    return (
        <div className = "header">
            <div className='Logo'>
                <MentorLogo/>
            </div>&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;       
                <MentorMenubar/>
        </div> 
    );
};

export default MentorHeader;