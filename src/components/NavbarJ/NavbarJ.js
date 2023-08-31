import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./NavbarJ.css";
import "../Navbar/Navbar.css"
export default function NavbarJ(props) {
  const [sidebar, setSidebar] = useState(false);
  const toggleFunc = () => {
    setSidebar(!sidebar);
  };
  return (
<div className="burgerCerceve">
{ <div className={sidebar ?"sidebarx":"sidebarx closex" }>
        <header>
          <div className="image-text">
            <span className="image">
              <img src="" />
            </span>

            <div className="text logo-text">
              <span className="name">My Portfolio</span>
              <span className="profession">Web Developer</span>
            </div>
          </div>

          <i className="bx bx-chevron-right toggle" onClick={toggleFunc}></i>
        </header>

        <div className="menu-bar">
          <div className="menu" >
            <ul>
              <li className="nav-link">
                <Link to="/My-Portfolio/" onClick={toggleFunc}>
                  <i className="bx bx-home-alt icon"></i>
                  <span className="text nav-text">Home</span>
                </Link>
              </li>

              <li className="nav-link" onClick={toggleFunc}>
                <Link to="/education">
                <i className='bx bx-user icon'></i>
                  <span className="text nav-text">About Me</span>
                </Link>
              </li>

              <li className="nav-link" onClick={toggleFunc}>
                <Link to="/skills">
                  <i className="bx bx-pie-chart-alt icon"></i>
                  <span className="text nav-text">Skills</span>
                </Link>
              </li>

              <li className="nav-link" onClick={toggleFunc}>
              <Link to="/projects">
              <i className='bx bx-chip icon'></i>
                  <span className="text nav-text">Projects & Others</span>
                </Link>
              </li>

              <li className="nav-link" onClick={toggleFunc}>
                <Link to="/contact">
                <i className='bx bx-message-detail icon'></i>
                  <span className="text nav-text">Contact to Me</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="bottom-content">

            <li className="mode">
              <div className="sun-moon">
                <i className={"bx bx-moon icon moon"}></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="mode-text text">{props.modeBody}</span>

              <div className="toggle-switch" onClick={props.func}>
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </div>}

</div>
  );
}
