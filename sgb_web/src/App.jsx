import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NamePage from './pages/NamePage';
import GreenRecordPage from './pages/GreenRecordPage';
import RedRecordPage from './pages/RedRecordPage';
import PinkRecordPage from './pages/PinkRecordPage';
import BlueRecordPage from './pages/BlueRecordPage';
import GreenModal from './pages/GreenModal';

export default function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path={"/home"} element={<Home/>}></Route>
            <Route path={"/name"} element={<NamePage/>}></Route>
            <Route path={"/greenRecord"} element= {<GreenRecordPage/>}></Route>
            <Route path={"/redRecord"} element= {<RedRecordPage/>}></Route>
            <Route path={"/pinkRecord"} element= {<PinkRecordPage/>}></Route>
            <Route path={"/blueRecord"} element= {<BlueRecordPage/>}></Route>
            <Route path={"/modaltest"} element={<GreenModal/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}