import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';
import Temperaturas from './Components/pages/Temperaturas';
import TemperaturasEst from './Components/pages/TemperaturasEst';
import IniciarSesion from './Components/pages/IniciarSesion';
import Registrarse from './Components/pages/Registrarse';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='Temperaturas' component={Temperaturas} />
        <Route path='TemperaturaEst' component={TemperaturasEst} />
        <Route path='/iniciarsesion' component={IniciarSesion} />
        <Route path='Registrarse' component={Registrarse} />
        <Route path='/temperaturas' component={Temperaturas} />
        <Route path='/temperaturaest' component={TemperaturasEst} />
        <Route path='/iniciarsesion' component={IniciarSesion} />
        <Route path='/registrarse' component={Registrarse} />
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
