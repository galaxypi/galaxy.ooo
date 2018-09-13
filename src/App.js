import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/Galaxy.css';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="d-flex w-100 h-100 p-3 mx-auto flex-column"
        style={{
        }}>
        <Header />
        <div className="mb-auto"></div>
        <main className="container text-center">
          <h1 className="text-white">Galaxy</h1>
          <p className="lead text-white-50 mb-5">Galaxy is a blockchain agnostic, always on, node network and protocol offering services to decentralized platforms</p>
          <a href="https://github.com/galaxypi/galaxy/" 
            className="btn btn-lg btn-light btn-block mx-auto"
            role="button"
            style={{
              maxWidth: '440px'
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
