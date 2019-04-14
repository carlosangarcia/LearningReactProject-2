import React from 'react'

class StatelessComponent extends React.Component{
    constructor(args){
        super(args)
        this.state = {}
    }

    render(){
        return(
            <h1>Hola mundo desde StatelessComponent</h1>
            )
    }
}
export default StatelessComponent;