import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [iconActive, setIconActive] = useState(false);

  return (
    <header>
      <nav className={iconActive ? "nav-active" : ""}>
        <h2 className="nav-logo">
          <NavLink to={"/"}>TeleCare</NavLink>
        </h2>
        <ul className="nav-links">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/doctors"}>Doctors</NavLink>
          </li>
          <li>
            <NavLink to={"/appointments"}>Appointments</NavLink>
          </li>
          <li>
            <NavLink to={"/notifications"}>Notifications</NavLink>
          </li>
          <li>
            <NavLink to={"/applyfordoctor"}>Apply for doctor</NavLink>
          </li>
          <li>
            <NavLink to={"/#contact"}>Contact Us</NavLink>
          </li>
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
          <li>
            <NavLink className="btn" to={"/login"}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="btn" to={"/register"}>
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="menu-icons">
        {!iconActive ? (
          <FiMenu
            className="menu-open"
            onClick={() => {
              setIconActive(true);
            }}
          />
        ) : (
          <RxCross1
            className="menu-close"
            onClick={() => {
              setIconActive(false);
            }}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
