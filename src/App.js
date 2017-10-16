import React, { Component } from 'react';
import socketClient from 'socket.io-client';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
    const socket = socketClient(`http://localhost:4321?token=8894754b1dfcc51a92e034e61212f84b26dc2f0e`);

    socket.on('test', () => {
      console.log('test was successful');
    });
  
  }

  createRoom() {
    window.fetch('http://localhost:8080/rooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Dennys Room',
        totalSize: 100,
        player: {_id: 1}
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.createRoom}>Create Room</button>
      </div>
    );
  }
}

export default App;
