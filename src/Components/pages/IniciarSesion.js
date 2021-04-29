import React, {useState} from 'react';
import '../../Components/pages/IniciarSesion.css';
import LoginForm from './LoginForm';

export default function Temperaturas(){
const adminUser={
email:"admin@admin.com",
paswoord:"admin123"
}


const [user, setUSer] = useState({name: "", email: ""});
const [error, setError] = useState("");

const Login = details =>{
    console.log(details);
}

const Logout =()=>{
    console.Log("logout");
}

return(
    <div className = "IniciarSesion">
        {(user.email !="") ? (
        <div className =  "Bienvenido" >
            <h2>Bienvenido,<span>{user.name}</span></h2>
            <button>Salir</button>
        </div>
        ):(
            <LoginForm Login={Login} error={error}/>
        )}
    </div>
);

        }