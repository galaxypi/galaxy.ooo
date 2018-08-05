import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar fixed-top"
        style={{
          height: '80px'
        }} >
        <a className="navbar-brand font-weight-bold"
          href="#"
          style={{
            lineHeight: '2.5rem',
            fontSize: '1.2rem',
            color: '#fff'
          }}>
          {/*
          <img src="#"
            className="brand-image"
            alt=""
            width="38"
            height="38"
            style={{
              marginRight: '5px'
            }} />
          */}
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