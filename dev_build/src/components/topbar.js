import React from 'react';
import { NavLink } from 'react-router-dom'
import '../css/navstyle.css';

/* 
  Topbar element, to be rendered with every page through react-router package
*/
export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navcontainer">
        <div className="nav-elements">
          {/* 
            We will use NavLinks, a type of psuedo-"link" included in react's router package 
            to statically update the page without the need to redirect/refresh it 
            (hopefully will streamline the experience for the inevitable 'potato wifi/computer' which takes 6 years to load anything!!) 
          */}
          <ul>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/Classes">Classes</NavLink>
            </li>
          </ul>
        </div>
        {/* 
          vvv just the title currently; 
          TO DO: replace with logo/icon/any official graphical work done for allencs for better look (should probably make a github issue for this!)
        */}
        <div className="title">
          allencsforum.org
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              {/* 
                Attempt at learning how to make a dropdown menu using react's built in components, wish me luck!
              */}
              <div>

              </div>
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