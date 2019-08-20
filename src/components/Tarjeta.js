import React, { Component } from 'react'

import './styles/Tarjeta.css'

class Tarjeta extends Component {  
    render(){
        const tarjeta = this.props.tarjeta.map( (tarjeta) => {
            return (
                <div className="card" key={tarjeta.id}>
                    <div className="card-header">
                        <h3>{tarjeta.title}</h3>
                        <span className="badge badge-pill badge-danger">{tarjeta.priority}</span>
                    </div>
                    <div className="card-body">
                        <p>{tarjeta.description}</p>
                        <p>{tarjeta.responsible}</p>
                        {/* <p>id: {tarjeta.id}</p> */}
                    </div>
                    <div className="card-footer">
                        <button 
                            className="btn btn-danger"
                            onClick={this.props.handleRemove.bind(this, tarjeta.id)}
                            >
                            Delete
                        </button>
                    </div>
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