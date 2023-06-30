import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Mypage from '../pages/Mypage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/123" element={<Detail />} />
        <Route path="/456" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
