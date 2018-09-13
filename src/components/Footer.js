import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="mt-auto mx-auto text-center">
        <p className="mb-3 text-muted text-sm" 
          style={{ 
            fontSize: '85%',
            fontWeight: '700'
          }}>
          <a href="https://github.com/orgs/galaxypi/people"
            style={{
              color: '#fff'
            }}>
            Galaxy Core team
          </a>
          <br />
          Galxy Labs Inc. &copy; 2018.
        </p>
      </footer>
    );
  }
}

export default Footer;