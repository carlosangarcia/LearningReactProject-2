import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import StatelesComponentB from './StatelessComponentB'
import StatefulComponentB from './StatefulComponentB'

class App extends Component {
    evento(e){
        alert(e.target.value);
        console.log(this);
        //this.evento2();
    }

    evento2(){
        alert('hola mundo evento2')
    }

    render(){
        return (
            <div>
                <input onClick = {this.evento.bind(this)} type="txt" value="hola mundo" style = {{color:"red",backgroundColor:"blue"}} />
            </div>
        )
    }
}
export default App;