import React, { Component } from 'react';
import logo from './logo.svg';
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
          paddingTop: '10%',
          paddingBottom: '40px'
        }}>
        <h1 className="h3 mb-3">Welcome to Galaxy</h1>
      </div>
    );
  }
}

export default App;
