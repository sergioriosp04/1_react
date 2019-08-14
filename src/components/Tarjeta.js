import React, { Component } from 'react'

import { tarjetas } from '../tarjetas.json'
import './styles/Tarjeta.css'

class Tarjeta extends Component {
    constructor(){
        super()
        this.state = {
            tarjetas: tarjetas    
    }
    }        
    render(){
        const tarjeta = this.state.tarjetas.map( (tarjeta) => {
            return (
                <div className="card">
                    <div className="card-header">
                        <h3>{tarjeta.title}</h3>
                        <span className="badge badge-pill badge-danger">{tarjeta.priority}</span>
                    </div>
                    <p>{tarjeta.description}</p>
                    <p>{tarjeta.responsible}</p>                   
                </div>
            )
        })
        return (
            <div className="card-container">
                {tarjeta}
            </div>    
        )
    }
}

export default Tarjeta