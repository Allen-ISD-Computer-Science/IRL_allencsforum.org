import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/style.css';
import Layout from './components/layout.js';
import HomePage from './pages/home.js';
import Clubs from './pages/clubs.js';
import ErrorPage from './pages/errorpage.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/Clubs" element={<Clubs />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
