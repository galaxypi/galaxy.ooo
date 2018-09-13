import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="mt-auto mx-auto text-center">
        <p className="mb-2 text-white-50 text-sm" 
          style={{ 
            fontSize: '85%'
          }}>
          <div className="mb-2">
            <a href="https://github.com/galaxypi/galaxy" className="text-white font-weight-bold">
              GitHub
            </a>
            &nbsp;&nbsp;&middot;&nbsp;&nbsp;
            <a href="https://github.com/orgs/galaxypi/people" className="text-white font-weight-bold">
              Core team
            </a>
            &nbsp;&nbsp;&middot;&nbsp;&nbsp;
            <a href="https://twitter.com/GalaxyPiLab" className="text-white font-weight-bold">
              Twitter
            </a>
          </div>
          Galaxy Labs Inc. &copy; 2018.
        </p>
      </footer>
    );
  }
}

export default Footer;