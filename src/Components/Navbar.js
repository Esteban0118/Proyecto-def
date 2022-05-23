import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import { LogoutBoutton } from './LogOut';
import {Profile} from './Profile'
import { LoginButton } from './pages/InicioSesion';


function Navbar() {
    const [click, setClick]= useState(false);
    const [button,setButton]= useState(true)


    const handleClick = () => setClick(!click);
    const claseMobileMenu = () => setClick(false);  

    const showButton = () =>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton();
    },[])

    window.addEventListener('resize',showButton);
    
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' onClick={claseMobileMenu}>
                        <img className='image-logo' src = 'images/Logo.PNG' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/Walkers' className='nav-links' onClick={claseMobileMenu}>
                            Paseadores
                            </Link>
                        </li>
                        
                        <li className='nav-item'>
                            <Link to='./Formulario' className='nav-links' onClick={claseMobileMenu}>
                            Registrate
                            </Link>
                        </li>
                        <li >
                            <Link to= './InicioSesion' className='nav-sign' >
                                <LoginButton />
                            </Link>
                        </li>
                        
                    </ul>
                </div> 
            </nav>  
        </>
    );
}

export default Navbar;
