import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import StatelesComponentB from './StatelessComponentB'
import StatefulComponentB from './StatefulComponentB'

class App extends Component {
    evento(e){
        console.log("this en evento");
        console.log(this);
        alert(e.target.value)
        this.evento2();
    }

    evento2(){
        alert('evento2')
    }

    render(){
        let calculo = 2 + 8;
        let style = {color:'red',backgroundColor:'blue'};
        return (
            <div>
                <h1>hola mundo jsx</h1>
                <input 
                    onClick={this.evento.bind(this)} 
                    type="txt" 
                    value="hola mundo" 
                    style={style}
                />
            {calculo + 2}
            </div>
        )
    }
}
export default App;