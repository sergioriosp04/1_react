import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
// components
import Navigation from './components/Navigation'
import Tarjeta from './components/Tarjeta'
import Formu from './components/Formu'

// json
import { tarjetas } from './tarjetas.json'


class App extends Component{
  
  state= {
    tarjetas: tarjetas
  }

  newTarjeta= (newState) => {
    //let newTask = newState
    // la siguiente linea es para agregarle el id a este nuevo objeto
    let newTask = Object.defineProperty(newState,"id",{value: this.state.tarjetas.length})
    console.log(newTask)
    this.setState({
      tarjetas: [...this.state.tarjetas, newTask]
    })

    console.log(this.state)
  }

  handleRemove = id =>{
    if (window.confirm('Are you sure you want to delete the task')){
      const newTarjetas = this.state.tarjetas.filter(t => t.id !== id)
      this.setState({
        tarjetas: newTarjetas
      })
    }
  }


  render(){
    return(
      <div className="App">
        <Navigation nTask={this.state.tarjetas.length} />
        <Formu newTarjeta={this.newTarjeta} />
        <Tarjeta 
          tarjeta={this.state.tarjetas}
          handleRemove={this.handleRemove}
          />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

export default App;
