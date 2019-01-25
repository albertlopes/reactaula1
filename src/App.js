import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <div> coisas abaixo </div>
          
          <Routes />

        </div>
      </Router>
    );
  }
}

export default App;
