import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


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
                        TEMPERATURAS <i className='fab fa-typo3'/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={claseMobileMenu}>
                            Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/temperaturas' className='nav-links' onClick={claseMobileMenu}>
                            Ver Temperaturas
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={claseMobileMenu}>
                            Consultar Estadisticas
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='./Registrarse' className='nav-links-mobile' onClick={claseMobileMenu}>
                            Registrarse
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>REGISTRARSE</Button>}
                </div> 
            </nav>  
        </>
    );
}

export default Navbar;
