import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NamePage from './pages/NamePage';
import GreenRecordPage from './pages/GreenRecordPage';
import RedRecordPage from './pages/RedRecordPage';
import PinkRecordPage from './pages/PinkRecordPage';
import BlueRecordPage from './pages/BlueRecordPage';
import GreenTip from './pages/GreenTip';
import RedTip from './pages/RedTip';
import Login from './pages/Login';
import Signup from './pages/Signup';
import GreenModal from './pages/components/Modal';
import MyPage from './pages/MyPage';
import LoginedHome from './pages/LoginedHome';
import GreenClicked from './pages/GreenClicked';
import RedClicked from './pages/RedClicked';
import PinkClicked from './pages/PinkClicked';
import BlueClicked from './pages/BlueClicked';
import Test from './pages/Test';
import GreenRecomPage from './pages/GreenRecomPage';
import RedRecomPage from './pages/RedRecomPage';
import PinkRecomPage from './pages/PinkRecomPage';
import BlueRecomPage from './pages/BlueRecomPage';
import LandingPage from './pages/LandingPage';

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
            <Route path={"/mypage"} element={<MyPage/>}></Route>
            <Route path={"/loginedHome"} element={<LoginedHome/>}></Route>
            <Route path={"/greenClicked"} element={<GreenClicked/>}></Route>
            <Route path={"/redClicked"} element={<RedClicked/>}></Route>
            <Route path={"/pinkClicked"} element={<PinkClicked/>}></Route>
            <Route path={"/blueClicked"} element={<BlueClicked/>}></Route>
            <Route path={"/greenRecom"} element={<GreenRecomPage/>}></Route>
            <Route path={"/redRecom"} element={<RedRecomPage/>}></Route>
            <Route path={"/pinkRecom"} element={<PinkRecomPage/>}></Route>
            <Route path={"/blueRecom"} element={<BlueRecomPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}