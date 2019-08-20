import React, {Component} from 'react'

class Formu extends Component {

    state = {
        title: '',
        responsible: '',
        description: '',
        priority: '',
        id: ''
    }

    handleInput = e =>{
        //console.log(e.target.value, e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
      }
    
    handleSubmit = e =>{
        e.preventDefault();
        //console.log(this.state)
        this.props.newTarjeta(this.state)
      }

    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="title"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Tiltleee"
                            
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="responsible"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="resposible"
                            
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="description"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="description of the task"
                            
                        />
                    </div>
                    <div className="form-group">
                        <select 
                            name="priority" 
                            className="form-control"
                            onChange={this.handleInput}
                        >
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div> 
                    <div className="form-group">
                        <button className="btn btn-success">
                            Crear
                        </button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default Formu