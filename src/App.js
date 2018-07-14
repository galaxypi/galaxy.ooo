import React, { Component } from 'react';
import Header from './components/Header';
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
        <Header />
        <div className="container-fluid cover-container text-center">
          <h1 className="text-white">Galaxy Pi</h1>
          <p className="lead text-white-50">Galaxy Pi is an open SDK and global network of dedicated Pi nodes for decentralized platforms & protocols</p>
        </div>
      </div>
    );
  }
}

export default App;
