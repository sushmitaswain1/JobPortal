import React from "react";
import { Link } from "react-router-dom";
import { auth } from '../firebase/firebase.utils';
const NavBar = ({ currentUser }) => {
  return (
    <div>
      <nav class="navbar is-link"  role="navigation" aria-label="main navigation">
       
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <Link to="/home" class="navbar-item">
              Home
            </Link>
            <Link to="/jobs" class="navbar-item">
              Find Jobs
            </Link>
            <Link to="/companies" class="navbar-item">
              See Companies
            </Link>
            <Link to="/profile" class="navbar-item">
              My Profile
            </Link>

            {currentUser ? (
              <div class="navbar-item" onClick={() => auth.signOut()}>
                Sign out
              </div>
            ) : (
              <Link  class="navbar-item" to="/signin">Sign In</Link>
            )}
            
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
