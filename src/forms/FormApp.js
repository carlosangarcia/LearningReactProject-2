import React from 'react'
class FormApp extends React.Component {

    constructor(args){
        super(args)
        this.state = {
            username:'carlos',
            name:'carlos garcía',
            language:'en',
            gender:'m',
            about:'soy nuevo',
            accept:true,            
            message:'',
            messageColor:''
        }
    }
    
    onChange(e) {
        if(e.target.name ==="accept"){
            this.setState({
                [e.target.name]:e.target.checked
            })
        } else {
            this.setState({
                [e.target.name]:e.target.value
            })
        }
    }
    
    onSave(e){
        if(!this.validate()) {
            return;
        }

        this.setState({
            message:"Guardado correctamente",
            messageColor:"green"
        })
    }

    validate(){
        if(this.state.accept != true){
            this.setState({
                message:"Acepte términos y condiciones",
                messageColor:"red"
            });            
            return false;
        } else {            
            return true;
        }
    }

    render(){
        return(
            <div>
                <label htmlFor="username">Nombre de usuario</label> 
                <input 
                    name="username" 
                    id="username" 
                    value = {this.state.username} 
                    onChange={this.onChange.bind(this)}
                    type="text" />

                <label htmlFor="nombre">Nombre persona</label> 
                <input 
                    name="name" 
                    id="name" 
                    value = {this.state.name} 
                    onChange={this.onChange.bind(this)}
                    type="text" />
                <label htmlFor="language">Idioma</label>
                <select 
                  id="language" 
                  name="language" 
                  value={this.state.language}
                  onChange={this.onChange.bind(this)}>
                    <option value="">Seleccione un valor</option>
                    <option value="en">Inglés</option>
                    <option value="es">Español</option>
                    <option value="de">Alemán</option>
                </select>    

                <label htmlFor="gender">Genero</label>
                <input type="radio" name="gender" value="m" onChange={this.onChange.bind(this)} checked={this.state.gender==='m'}/>Hombre
                <input type="radio" name="gender" value="w" onChange={this.onChange.bind(this)} checked={this.state.gender==='w'}/>Mujer

                <label htmlFor="about">Cuéntanos algo de ti</label>
                <textarea
                    id="about"
                    name="about"
                    value={this.state.about}
                    onChange={this.onChange.bind(this)}>
                </textarea>    
                <div>
                <input
                    id="accept"
                    name="accept"
                    type="checkbox"
                    value={this.state.accept}
                    onChange={this.onChange.bind(this)}
                    checked ={this.state.accept === true}/>Acepta condiciones de uso
                </div>

                <div>

                </div>
                    <button onClick={this.onSave.bind(this)}>Guardar</button>
                    <span style={{color:this.state.messageColor}}>{this.state.message}</span>
                <br/><br/><br/><br/>
                <div>
                <span>{JSON.stringify(this.state)}</span>
                </div>
           </div>
        )
    }
}
            
export default FormApp
