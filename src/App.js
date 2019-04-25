import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StatelessComponent from './StatelessComponent';
import StatefulComponent from './StatefulComponent'
class App extends Component {

    constructor(args){
        super(args)

        this.state = {
            counter: 32
        }
    }

    sumar() {
        this.setState({
            counter: this.state.counter+1
        })
    }
    
    restar() {
        this.setState({
            counter: this.state.counter-1
        })
    }    

    render() {

        return (  
            <div>
                <span>Contador {this.state.counter} </span>
                <div>
                    <button onClick={this.sumar.bind(this)}> + </button>
                    <button onClick={this.restar.bind(this)}> - </button>
                </div>
            </div>
        );
      }
    }

export default App;
