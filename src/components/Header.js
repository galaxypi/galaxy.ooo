import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-light bg-light"
        style={{
          height: '80px',
          borderBottom: '1px solid #eeeeee'
        }} >
        <a className="navbar-brand font-weight-bold"
          href="#"
          style={{
            lineHeight: '2.5rem',
            fontSize: '1.2rem'
          }}>
          <img src="#"
            className="brand-image"
            alt=""
            width="38"
            height="38"
            style={{
              marginRight: '5px'
            }} />
          Galaxy
        </a>
        {/*
        <form className="form-inline">
          <button className="btn btn-sm btn-outline-primary"
            type="button"
            style={{
              marginRight: '10px'
            }}>
            Sign in
          </button>
          <button className="btn btn-sm btn-outline-primary"
            type="button">
            Sign up
          </button>
        </form>
        */}
      </nav>
    );
  }
}

export default Header;
