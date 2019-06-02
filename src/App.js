import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import StatelesComponentB from './StatelessComponentB'
import StatefulComponentB from './StatefulComponentB'

class App extends Component {
    render(){
        return (
            <div>
                <StatelesComponentB />
                <StatefulComponentB />
            </div>
        )
    }
}
export default App;