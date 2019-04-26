import React, { Component } from 'react';
import './App.css';
import Item from './Item';

class App extends Component {

    constructor(args){
        super(args)

        this.state = {
            users: []
        }
    }

    add(e){
        const nameInput = document.getElementById('name');
        const roleInput = document.getElementById('role');
        const telInput = document.getElementById('tel');

        let newUser = {
            name: nameInput.value,
            role: roleInput.value,
            tel: telInput.value
        }
        console.log(newUser);
        
        let users = this.state.users;

        console.log(users);

        users.unshift(newUser);

        console.log(users);     

        this.setState({users:users});

        nameInput.value = '';
        roleInput.value = '';
        telInput.value = '';

    }  

    delete(id){
        console.log("delete =>");

        let userIndex = this.state.users.map(x => {return x.id}).indexOf(id)

        let users = this.state.users

        users.splice(userIndex, 1)

        this.setState({
          users: users
        })
    }


    render() {

        return (  
            <div>
                <label>Nombre</label>
                <input id="name" type="text" />

                <label>Rol</label>
                <input id="role" type="text" />

                <label>Tel</label>
                <input id="tel" type="text" />

                <button onClick={this.add.bind(this)}>Agregar</button>

                <ul>
                    {this.state.users.map(user => {
                        return <Item key={user.id}
                            id={user.id}
                            user={user}
                            deleteOp={this.delete.bind(this)}
                            />

                    })}
                </ul>

           </div>
        );
      }
    }

export default App;
