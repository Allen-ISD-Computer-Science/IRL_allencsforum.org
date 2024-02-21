import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.js';

export * from './components/sfconstants.js';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode> 
    {/* 
      StrictMode my lord and savior 🙏
      Does not provide anything visually to the user but provides warnings/errors for malpractice in code (ex: making constants and then never using them)
    */}
    <App /> {/* <-- The entire website! All of it! Found in ../App.js */}
  </StrictMode>
);
