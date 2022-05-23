import React from 'react';
import '../App.css';
import './Inicio.css';
import {LoginButton} from './pages/InicioSesion';
import { LogoutBoutton } from './LogOut';
import { Profile } from './Profile';

function Inicio() {
    return (
        <div className='inicio-container'>
            <img className= 'gif ' src="/videos/fondo2.gif" autoPlay loop muted/>
            <h1>
                ¿Qué estás esperando?
            </h1>
            <p>
                Tus animales estaran contentos de conocernos
            </p>
            <br/>
            <div className="inicio-btns">
                <br/>
                    <LoginButton />
                    <br></br>
                    <Profile/>
                    <br/>
                    <LogoutBoutton/>
            </div>
        </div>
    )
}

export default Inicio

