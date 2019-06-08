import React from 'react'

class StatelesComponentB extends React.Component{
    constructor(args){
        super(args)
        this.state = {}
    }

    render(){
        return(
            <h3>Hola mundo desde statelessComponenteB</h3>
        )
    }
}
export default StatelesComponentB