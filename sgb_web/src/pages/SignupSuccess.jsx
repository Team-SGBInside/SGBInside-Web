import React from 'react';
import { Link } from 'react-router-dom';

const SignupSuccess = () => {
    return (
        <div>
            <h1>회원가입에 성공하였습니다.</h1>
            <Link to = "/login"><p>로그인</p></Link>
        </div>
    );
};

export default SignupSuccess;