import React, { Component } from 'react';
import Header from './components/Header';
import './styles/Galaxy.css';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '40px',
          paddingBottom: '40px'
        }}>
        <Header />
        <div className="container-fluid col-11 col-md-10 col-lg-7 col-xl-5 text-center">
          <h1 className="text-white">Galaxy</h1>
          <p className="lead text-white-50 mb-5">Galaxy is a blockchain agnostic, always on, node network and protocol offering services to decentralized platforms</p>
          <div className="container-fluid">
            <div className="row justify-content-md-center">
              <a href="https://github.com/galaxypi/galaxy/" 
                className="btn btn-lg btn-light btn-block"
                role="button"
                style={{
                  maxWidth: '440px'
                }}>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
