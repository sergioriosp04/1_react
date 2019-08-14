import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation'
import Tarjeta from './components/Tarjeta'
import { tarjetas } from './tarjetas.json'


function App() {

  return (
    <div className="App">
      <Navigation />
      <Tarjeta />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

export default App;
