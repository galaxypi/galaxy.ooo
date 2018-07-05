import React, { Component } from 'react';
import './App.css';

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
        <div className="container-fluid cover-container text-center">
          <h1 className="font-weight-bold text-white">Welcome to Galaxy</h1>
          <p className="text-white-50">Galaxy is a network of tiny computers running various decentralized and crypto services, cryptocurrencies and networks around the world. These tiny computers provide networks to quickly bootstrap to a galaxy of nodes.</p>
        </div>
      </div>
    );
  }
}

export default App;
