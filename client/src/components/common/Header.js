import React from 'react';
import { oneOfType, object, bool } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

Header.propTypes = {
  auth: oneOfType([object, bool])
};

function renderContent(auth) {
  switch(auth) {
    case null:
      return;
    case false:
      return <li><a href="/auth/google">Login</a></li>;
    default:
      return <li><a href="/api/logout">Logout</a></li>;
  }
}

function Header(props) {
  return (
    <header>
      <nav>
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">Brand</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            { renderContent(props.auth) }
          </ul>
        </div>
      </nav>
    </header>
  );
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);