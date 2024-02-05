import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/topbar.js'
import Page from './components/page.js'
import './css/style.css';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Page />
    </BrowserRouter>
  );
}
