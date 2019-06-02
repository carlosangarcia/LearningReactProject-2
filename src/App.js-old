import React, { Component } from 'react';
import './App.css';
import Item from './Item';

class App extends Component {

    constructor(args){
        super(args)
        this.state = {
         username:'',
         name:'',
         language:'',
         gender:'',
         about:'',
         accept:''
        }
    }
    onChange(e) {
        if(e.target.name ==="accept"){
            this.setState({
                [e.target.name]:e.target.checked
            })
        } else {
        this.setState({
            [e.target.name]:e.target.value
        })
      }
    }

    render() {

        return (  
            <div>
                <label htmlFor="username">Nombre de usuario</label> 
                <input 
                    name="username" 
                    id="username" 
                    value = {this.state.username} 
                    onChange={this.onChange.bind(this)}
                    type="text" />

                <label htmlFor="nombre">Nombre persona</label> 
                <input 
                    name="name" 
                    id="name" 
                    value = {this.state.name} 
                    onChange={this.onChange.bind(this)}
                    type="text" />
                <label htmlFor="language">Idioma</label>
                <select 
                  id="language" 
                  name="language" 
                  value={this.state.language}
                  onChange={this.onChange.bind(this)}>
                    <option value="">Seleccione un valor</option>
                    <option value="en">Inglés</option>
                    <option value="es">Español</option>
                    <option value="de">Alemán</option>
                </select>    

                <label htmlFor="gender">Genero</label>
                <input type="radio" name="gender" value="m" onChange={this.onChange.bind(this)}/>Hombre
                <input type="radio" name="gender" value="w" onChange={this.onChange.bind(this)}/>Mujer

                <label htmlFor="about">Cuéntanos algo de ti</label>
                <textarea
                    id="about"
                    name="about"
                    value={this.state.about}
                    onChange={this.onChange.bind(this)}>
                </textarea>    
                <div>
                <input
                    id="accept"
                    name="accept"
                    type="checkbox"
                    value={this.state.accept}
                    onChange={this.onChange.bind(this)}/>Acepta condiciones de uso
                </div>
                <div>
                <span>{JSON.stringify(this.state)}</span>
                </div>
           </div>
        );
      }
    }

export default App;
