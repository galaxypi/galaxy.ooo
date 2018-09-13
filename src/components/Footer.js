import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="mt-auto mx-auto text-center">
        <p className="mb-2 text-white-50 text-sm font-weight-bold" 
          style={{ 
            fontSize: '85%'
          }}>
          <a href="https://github.com/orgs/galaxypi/people"
            style={{
              color: '#fff'
            }}>
            Galaxy Core team
          </a>
          <br />
          Galaxy Labs Inc. &copy; 2018.
        </p>
      </footer>
    );
  }
}

export default Footer;