import React from 'react';
import '../App.css';
import './Inicio.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Inicio() {
    return (
        <div className='inicio-container'>
            <video src="/videos/video-3.mp4" autoPlay loop muted/>
            <h1>
                ¿Qué estás esperando?
            </h1>
            <p>
                Consultar la temperatura de tu país nunca ha sido tan fácil
            </p>
            <div className="inicio-btns">
                
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Ver Temperatura
                </Button>
                
            </div>
        </div>
    )
}

export default Inicio

