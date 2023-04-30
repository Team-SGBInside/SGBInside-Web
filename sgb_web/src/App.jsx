import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import NamePage from './pages/NamePage';
import GreenRecordPage from './pages/GreenRecordPage';

export default function App() {
  
  return (
    <div className="App">
     
    <BrowserRouter>
      <Routes>
          <Route path={"/login"} element={<LoginPage/>}></Route>
          <Route path={"/name"} element={<NamePage/>}></Route>
          <Route path={"/greenrecord"} element= {<GreenRecordPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}