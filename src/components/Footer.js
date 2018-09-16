import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="mt-auto mx-auto text-center">
        <div className="mb-2 text-white-50 text-footer font-weight-bold">
          <div className="mb-2">
            <a href="https://github.com/galaxypi/galaxy" className="text-white">
              GitHub
            </a>
            &nbsp;&nbsp;&middot;&nbsp;&nbsp;
            <a href="https://github.com/orgs/galaxypi/people" className="text-white">
              Core team
            </a>
            &nbsp;&nbsp;&middot;&nbsp;&nbsp;
            <a href="https://twitter.com/GalaxyPiLab" className="text-white">
              Twitter
            </a>
            &nbsp;&nbsp;&middot;&nbsp;&nbsp;
            <a href="https://discord.gg/36K9nan" className="text-white">
              Chat (Discord)
            </a>
          </div>
          Galaxy Labs Inc. &copy; 2018.
        </div>
      </footer>
    );
  }
}

export default Footer;