import React from 'react';
import './LandingPage.css';
import landing_student from './components/img/landing_student.png'
import landing_mentor from './components/img/landing_mentor.png'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <body className="landing-body">
        <div className="landing-content">
            <h3 className="landing-light">너의 길을 오롯이 응원해,</h3>
            <h1 className="landing-bold">생기부 인사이드</h1>
            <div classNmae="landing-btn">
            <Link to = "/home"><img src={landing_student} alt="student" width="400" height="100"/>&nbsp;&nbsp;</Link>
            <Link to = "/mentorHome"><img src={landing_mentor} alt="mentor" width="400" height="100"/></Link>
            </div>
        </div>
        <br/>
        </body>
    );
};

export default LandingPage;