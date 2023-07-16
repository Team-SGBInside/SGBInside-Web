import React from 'react';
import greenform_bg from './img/greenform_bg.png';
import green_mentor_talk from './img/green_mentor_talk.png';
import './GreenMentor.css';
import GreenMentorBanner from './GreenMentorBanner';

const GreenMentor = () => {
    return (
    <div className="greenmentor">
        <div className='greenmentor_bg'>
            <img src={greenform_bg} alt="greenform_bg" width="1200" height="1310"/>
            <div className="greenmentor_content">
                <div className="green_mentor_talk">
                    <img src={green_mentor_talk} alt="green_mentor_talk" width="555" height="135"/> 
                </div>
                <br/><br/>
                <div className="search_div_green">
                <input
                    type="search"
                    placeholder="검색어를 입력 하세요..."
                    name="query"
                    className="search_input_green"
                />
                </div>
                <br/><br/><br/><br/><br/><br/>
                <div className="green_mentor_banner_div">
                <GreenMentorBanner/>
                <GreenMentorBanner/>
                <GreenMentorBanner/>
                <GreenMentorBanner/>
                </div>
            </div>
        </div>
    </div>
    );
};

export default GreenMentor;