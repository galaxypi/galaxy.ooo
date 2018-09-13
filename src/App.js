import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/Galaxy.css';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="d-flex w-100 h-100 mx-auto p-4 flex-column">
        <Header />
        <div className="mb-auto"
          style={{
            paddingTop: '80px'
          }}></div>
        <main role="main" className="mx-auto text-center"
          style={{
            maxWidth: '685px'
          }}>
          <h1 className="text-white">Galaxy</h1>
          <p className="lead text-white-50 font-weight-bold">Galaxy is a blockchain agnostic, always on, node network and protocol offering services to decentralized platforms</p>
          <a href="https://github.com/galaxypi/galaxy/" 
            className="btn btn-lg btn-light btn-block mb-5 mx-auto"
            role="button"
            style={{
              maxWidth: '440px',
              marginTop: '35px'
            }}>
            GitHub
          </a>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
