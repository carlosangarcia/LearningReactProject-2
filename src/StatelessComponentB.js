import React from 'react'

class StatelesComponentB extends React.Component{
    constructor(args){
        super(args)
        this.state = {}
    }

    render(){
        return(
            <h1>Hola mundo desde statelessComponenteB</h1>
        )
    }
}
export default StatelesComponentB