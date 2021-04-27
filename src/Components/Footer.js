import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subcription-heading">
                   JOin The adventure newsletter 
                </p>
                <p className="footer-subcrption-text">
                   You can unsubscribe at any time 
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Escribe tu Correo" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Send</Button>
                    </form>

                </div>
                
            </section>

            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div classNam="footer-link-items" >
                        <h2>Acerca de Nosotros</h2>
                        <Link to='/sign-up'>Como funciona</Link>
                        <Link to='/'>Universidad Catolcia</Link> 
                        <h3>Texto de Nosotros</h3>
                    </div>  
                </div>
            </div>
            

            
        </div>
    )
}

export default Footer;