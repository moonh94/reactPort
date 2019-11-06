
import React from "react";
import { NavLink } from "react-router-dom";
import home from "../../images/home.png"
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Navbar extends React.Component {
  
  render () {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{justifyContent:"right"}}>
      <NavLink className="navbar-brand" to="/">
        <img src={home} alt="homepage" />
      </NavLink>
      <div>
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <NavLink
              to="/"
              activeClassName="active"
              className="nav-link"
              isActive={() => window.location.pathname === '/' || window.location.pathname === "/"}
            >
              Home
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink
              to="/about"
              activeClassName="active"
              className="nav-link"
              isActive={() => window.location.pathname === '/about'}
            >
              About Me
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              activeClassName="active"
              className="nav-link"
              isActive={() => window.location.pathname === '/contact'}
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/projects"
              activeClassName="active"
              className="nav-link"
              isActive={() => window.location.pathname === '/projects'}
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}
}

export default Navbar;
