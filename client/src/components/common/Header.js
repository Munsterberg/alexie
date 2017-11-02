import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">Brand</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a href="/auth/google">Login</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;