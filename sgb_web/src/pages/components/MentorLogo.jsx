import React from 'react';
import sgb_logo_mentor from './img/sgb_logo_mentor.png';
import { Link } from 'react-router-dom';

const MentorLogo = () => {
    return (
        <Link to = '/mentorHome'>
        <div class = "logo">
            <div> 
                <img src={sgb_logo_mentor} alt="logo" width="264.5" height="87"/>
            </div>
        </div>
        </Link>
    );
};

export default MentorLogo;