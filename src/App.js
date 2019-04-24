import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StatelessComponent from './StatelessComponent';
import StatefulComponent from './StatefulComponent'
class App extends Component {

    evento(e){
        alert(e.target.value)
    }
    render() {
        let calculo = 1 + 1009;

        let style = null;
        if(calculo == 10){
            style = {color:'red'}
        } else {
            style = {color:'green'}
        }

        return (  
            <div>
              <h1>hola</h1>          
              <input 
              onClick={this.evento.bind(this)} 
              type="txt" 
              value="hola mundo" 
              className="green"
              style={style}/>
              {calculo == 10 ? "10":"no 10"}
            </div>
        );
      }
    }

export default App;
