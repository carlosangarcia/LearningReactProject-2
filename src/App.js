import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StatelessComponent from './StatelessComponent';
import StatefulComponent from './StatefulComponent'
class App extends Component {
  render() {
    return (  
        <div>      
            <StatelessComponent />
            <StatefulComponent />
        </div> 
    );
  }
}

export default App;
