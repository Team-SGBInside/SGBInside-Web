import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NamePage from './pages/NamePage';
import GreenRecordPage from './pages/GreenRecordPage';

export default function App() {
  
  return (
    <div className="App">
     
    <BrowserRouter>
      <Routes>
          <Route exact path={"/home"} element={<Home/>}></Route>
          <Route path={"/name"} element={<NamePage/>}></Route>
          <Route path={"/greenrecord"} element= {<GreenRecordPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}