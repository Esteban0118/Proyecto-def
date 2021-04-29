import React, {useState} from 'react';
import '../../Components/pages/IniciarSesion.css';

function LoginForm({Login,error}){
const [details,setDetails]= useState({name:"", email:"", password:""});
const submitHandler = e =>{
    e.preventDefault();
    Login(details);
}

    return(
        <form onSubmit={submitHandler}>
            <div className="form-inner">        
                <h2>iniciar sesion</h2>
                    <div className="form-group">
                        <label htmlfor="name">Nombre:</label>
                        <input type="text" name="name" id="name"/>
                    </div>    
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value })} value={details.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña:  </label>
                        <input type="password" name="password" id="password"/>
                    </div>
                    <input type="submit" value="iniciar" />
            </div>
        </form>
    )
}

export default LoginForm;