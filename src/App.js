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
        <div className="container-fluid cover-container text-center">
          <h1 className="text-white">Galaxy</h1>
          <p className="lead text-white-50">Galaxy is a network of decentralized nodes offering services for decentralized platforms</p>
        </div>
      </div>
    );
  }
}

export default App;
