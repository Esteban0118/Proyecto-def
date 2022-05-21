import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import './LogOut.css';

export const LogoutBoutton = () => {
    const {logout} = useAuth0();

    return (
        <button className='btn-log' onClick={() =>logout({ returnTo: window.location.origin })}>
          Cerrar Sesion
        </button>
      );
}; 