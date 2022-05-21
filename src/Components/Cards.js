import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>BIENVENIDOS A NUESTRA PAGINA</h1>
            <br></br>
            <h3>Aqui conoceras  todos los beneficios que tenemos para ti y para tus hermosos animales </h3>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                        <CardItem
                        src='images/ps1.jpg'
                        text='La bella capital de Colombia'
                        label='Bogota'
                        path='/'
                        />

                        <CardItem
                        src='images/ps2.jpg'
                        text='La ciudad de la Primavera'
                        label='Medellin'
                        path='/'
                        />

                        <CardItem
                        src='images/ps3.jpg'
                        text='La ciudad de la Primavera'
                        label='Bucaramanga'
                        path='/'
                        />
                    
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/ps4.jpg'
                        text='La sultana del hermoso Valle'
                        label='Cali'
                        path='/'
                        />

                        <CardItem
                        src='images/ps5.jpg'
                        text=' Bella Cartagena de Indias'
                        label='Cartagena'
                        path='/'
                        />
                        <CardItem
                        src='images/ps6.jpg'
                        text='La bella ciudad del ciclismo'
                        label='Tunja'
                        path='/'
                        />
                    
                    </ul>
                </div>
            </div>
            <div>
                <h1> Nuestra Historia </h1>
                <div className='history'> 
                    <ul >
                        <img className= 'img-above' src= '/images/images_luigi.jpg'/>
                    </ul>
                    <br></br>
                    <h3>
                        Hola buenos dias 
                    </h3>
                </div>

            </div>
        </div>
    )
}

export default Cards
