import React from 'react';
import greenform_bg from './img/greenform_bg.png';
import green_talk from './img/green_talk.png';
import './GreenRecom.css';
import axios from 'axios';
import SearchGreen from './SearchGreen';

function GreenRecom () {
    state = {
        isLoading : true,
        greens: [],
        value: ""
    };
    
    getSearchGreen = async () => {
        const search = this.state.value;
        try {
            if (search === "") {
                this.setState({greens: [], isLoading: false})
            } else {
                const {data : {
                    items
                }} = await axios.get('//필요한 링크를 여기에 넣어준다', {
                    headers: {
                        //헤더에 넣어줘야하는 내용이 있는지 한빛에게 물어봄..
                    }
                });

                this.setState({greens: items, isLoading: false});
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="greenrecom"> 
            <div className="greenrecom_bg">
                <img src={greenform_bg} alt="greenform_bg" width="1200" height="1310"/>
                <div className="greenrecom_content">
                    <div classNmae="green_talk">   
                        <img src={green_talk} alt="green_talk" width="555" height="90"/> 
                    </div>     
                <br/><br/>
                {/* Search 관련 코드 */}
                
                </div>
            </div>
        </div>
    );
};

export default GreenRecom;