import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';
import TemperaturasEst from './Components/pages/TemperaturasEst';
import Formulario from './Components/pages/Formulario';
import Walkers from './Components/pages/Walkers';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Walkers' component={Walkers} />
        <Route path='/temperaturaest' component={TemperaturasEst} />
        <Route path='/Formulario' component ={Formulario}/>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
