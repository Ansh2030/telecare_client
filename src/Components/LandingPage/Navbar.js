import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

import { useAuth } from '../../Context/authContext';
import { doSignOut } from '../../Firebase/auths';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const {user, logedin} = useAuth();
  const navigate = useNavigate();
  const [iconActive, setIconActive] = useState(false);

  return (
    <header>

{
  logedin?
  <>
<nav>
        <h2 className="nav-logo">
          <NavLink to={"/"}>TeleCare</NavLink>
        </h2>
        <ul className="nav-links">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/doctor"}>Doctors</NavLink>
          </li>
          <li>
            <NavLink to={"/appointments"}>Appointments</NavLink>
          </li>
         
          <li>
            <NavLink to={"/doctorapply"}>Apply for doctor</NavLink>
          </li>
          <li>
            <NavLink to={"/#contact"}>Contact Us</NavLink>
          </li>
          <li>
            <NavLink to={"/patientdetails"}>Profile</NavLink>
          </li>
          <li>
            <NavLink className="btn" onClick={()=>{ doSignOut().then(()=>{ navigate('/')})}}>
              Log Out
            </NavLink>


          </li>
          {/* <li>
            <NavLink className="btn" to={"/register"}>
              Register
            </NavLink>
          </li> */}
        </ul>
      </nav>
  </>:
  <>
<li>
            <NavLink className="btn" to={"/login"}>
              Login
            </NavLink>
          </li>

  </>
}
      
      {/* <div className="menu-icons">
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
      </div> */}
    </header>
  );
};

export default Navbar;
