import React from 'react';
import { NavLink } from 'react-router-dom'
import '../css/navstyle.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navcontainer">
        <div className="title">
          allencsforum.org
        </div>
        <div className="nav-elements">
          <ul>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/Classes">Classes</NavLink>
            </li>
            <li>
            <NavLink to="/Clubs">Clubs</NavLink>
            </li>
            <li>
            <NavLink to="/Projects">Projects</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}