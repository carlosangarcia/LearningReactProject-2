import React, { Component } from 'react';
import './App.css';
import Item from './Item';

class App extends Component {

    constructor(args){
        super(args)

        this.state = {            
            username:"",
            name:"",
            language:"es",
            about:""
        }
    }

    onChange(e){
     this.setState(
     {
        [e.target.name]:e.target.value
     })   
    }


    render() {

        return (  
            <div>
                <label htmlFor="username">Nombre de usuario</label>
                <input 
                    id="username" name="username" 
                    value={this.state.username} 
                    type="text"
                    onChange={this.onChange.bind(this)} />


                <label htmlFor="name">Nombre de persona</label>
                <input id="name" 
                name="name" 
                value={this.state.name} 
                type="text" 
                onChange={this.onChange.bind(this)}/>

                <label htmlFor="language">Idioma</label>
                <select id="language" 
                  name="language" 
                  value={this.state.language}
                  onChange={this.onChange.bind(this)}>
                    <option value="">Seleccione un valor</option>
                    <option value="en">Inglés</option>
                    <option value="es">Español</option>
                    <option value="de">Alemán</option>

                </select>

                <label htmlFor="gender">Genero</label>
                <input type="radio" name="gender" value="h" onChange={this.onChange.bind(this)}/>Hombre
                <input type="radio" name="gender" value="w" onChange={this.onChange.bind(this)}/>Mujer

                <label htmlFor="about">Cuentanos algo sobre ti</label>                
                <textarea id="about" name="about" value={this.state.about} onChange={this.onChange.bind(this)}>
                
                </textarea>
                <p> {JSON.stringify(this.state)}
                </p>
           </div>
        );
      }
    }

export default App;
