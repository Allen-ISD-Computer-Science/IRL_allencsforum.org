import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/style.css';
import Layout from './components/layout.js';
import HomePage from './pages/home.js';
import Clubs from './pages/clubs.js';
import ErrorPage from './pages/errorpage.js';

/*
  The thing thats run that runs things (wow! very cool!)
  Uses react-router's BrowserRouter component to show the user different 'pages' without actually redirecting/refreshing their browser over and over
  (should be slightly better for Walmart PCs, iPhone 8s, Nokia 1330s and anyone that is forced to connect to Allen's god-awful wifi)
*/

export default function App() {
  return (
    <BrowserRouter>
      <Routes> {/*Different pages to-be-rendered when the user clicks the NavLinks included in the topbar*/}
        <Route path="/" element={<Layout />}> {/* Layout is NOT technically a page, but rather a skeleton that tells react-router what goes where when pages switch and what to keep in place (in this case JUST the topbar for now) */}
          <Route index element={<HomePage />} />
          <Route path="/Clubs" element={<Clubs />} />
          <Route path="*" element={<ErrorPage />} /> {/* "path=*" referring to any page that is not defined as a Route/does not exist in general, used to provide 404 page */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
