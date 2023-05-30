import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NamePage from './pages/NamePage';
import GreenRecordPage from './pages/GreenRecordPage';
import RedRecordPage from './pages/RedRecordPage';
import PinkRecordPage from './pages/PinkRecordPage';
import BlueRecordPage from './pages/BlueRecordPage';
import GreenModal from './pages/GreenModal';
import GreenTip from './pages/GreenTip';
import RedTip from './pages/RedTip';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';
import SignupSuccess from './pages/SignupSuccess';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<LandingPage/>}></Route>
            <Route path={"/home"} element={<Home/>}></Route>
            <Route path={"/login"} element={<Login/>}></Route>
            <Route path={"/signup"} element={<Signup/>}></Route>
            <Route path={"/name"} element={<NamePage/>}></Route>
            <Route path={"/greenRecord"} element= {<GreenRecordPage/>}></Route>
            <Route path={"/greenTip"} element= {<GreenTip/>}></Route>
            <Route path={"/redTip"} element= {<RedTip/>}></Route>
            <Route path={"/redRecord"} element= {<RedRecordPage/>}></Route>
            <Route path={"/pinkRecord"} element= {<PinkRecordPage/>}></Route>
            <Route path={"/blueRecord"} element= {<BlueRecordPage/>}></Route>
            <Route path={"/modaltest"} element={<GreenModal/>}></Route>
            <Route path={"/signup_success"} element={<SignupSuccess/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}