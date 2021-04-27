import React from 'react';
import'../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import Inicio from '../Inicio';


function Home (){
    return(
        <>
        <Inicio />
        <Cards />
        <Footer/>
        </>
    );
}

export default Home;