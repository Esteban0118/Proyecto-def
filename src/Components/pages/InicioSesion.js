import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import '../../App.css';
import '../Footer.css'
import '../pages/InicioSesion.css'

export const LoginButton = () =>{
    const {loginWithRedirect} = useAuth0();

    return <button className='btn-sg' onClick={()=>loginWithRedirect()}>Iniciar Sesion</button>

}


