import React from 'react';
import '../css/errorstyle.css'

/*
  Standard 404 page. Nothing special. Rendered in react-router.
*/

export default function ErrorPage() {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p><i>404</i></p>
    </div>
  );
}

