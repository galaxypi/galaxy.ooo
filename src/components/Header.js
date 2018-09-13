import React, { Component } from 'react';
import logo from './../img/galaxy-logo-white.svg';

class Header extends Component {
  render() {
    return (
      <nav className="navbar fixed-top"
        style={{
          height: '80px',
          backgroundColor: '#000'
        }} >
        <a className="navbar-brand font-weight-bold text-white"
          href="/"
          style={{
            lineHeight: '2.5rem',
            fontSize: '1.2rem'
          }}>
          <img src={logo}
            alt="Galaxy"
            width="115"
          />
        </a>
        <form className="form-inline">
          <button className="btn btn-sm btn-outline-light font-weight-bold"
            type="button"
            disabled
            style={{
              marginRight: '10px',
              opacity: '0.35'
            }}>
            Log in
          </button>
          <button className="btn btn-sm btn-outline-light font-weight-bold"
            type="button"
            disabled
            style={{
              opacity: '0.35'
            }}>
            Sign up
          </button>
        </form>
      </nav>
    );
  }
}

export default Header;
