import React from 'react';

const Header =()=>{
    return(
        <nav>
          <div className="nav-wrapper #006064 cyan darken-4">
            <a href="/" className="brand-logo">QDine-In</a>
            <ul id="nav-mobile" className="right">
              <li><a href="/auth/google">Sign Up</a></li>
              <li><a href="/api/logout">Logout</a></li>
              <li><a href="/profile">Profile</a></li>
            </ul>
          </div>
        </nav>
    )
}

export default Header;