import React, {useState} from 'react';
import '../../Components/pages/IniciarSesion.css';
import '../../App.css'
import LoginForm from './LoginForm';

export default function Temperaturas(){
const adminUser = {
    email: "admin@admin.com",
    password: "123"
}


const [user, setUSer] = useState({name: "", email: ""});
const [error, setError] = useState("");

const Login = details =>{
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
        console.log("Inicio correcto");
        setUSer({
            name: details.name, 
            email : details.email
        })
    } else {
        console.log("Inicio fallido");
        setError("Inicio fallido"); 
    }
}

const Logout = () => {
    setUSer({name: "", email: ""});
}

return(
    <div className = "IniciarSesion">
        {(user.email !="") ? (
        <div className =  "Bienvenido" >
            <h2>Bienvenido,<span>{user.name}</span></h2>
            <button onClick={Logout}>Salir</button>
        </div>
        ):(
            <LoginForm Login={Login} error={error}/>
        )}
    </div>
);

        }