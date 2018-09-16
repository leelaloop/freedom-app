import React, { Component } from 'react';
import './App.css';
import UserList from './UserList';
import map from './map'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={process.env.PUBLIC_URL + '/img/grandstack.png'} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to GRANDstack</h1>
        </div>
        
        <map />
        <UserList />
      </div>
    );
  }
}

export default App;
