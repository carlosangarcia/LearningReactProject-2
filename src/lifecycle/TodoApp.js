import React from 'react'
//import TodoItem from './TodoItem'
import './TodoApp.css'


class TodoApp extends React.Component {
    constructor(args){
        super(args)
        this.state = {
            readonly:false,
            todos:[]
        }
    }

    render() {
        return(
            <div>
             hola
             </div>
        )
    }
}

export default TodoApp