import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>BIENVENIDOS A NUESTRA PAGINA</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                        <CardItem
                        src='images/Bogota.jpg'
                        text='La bella capital de Colombia'
                        label='Bogota'
                        path='/'
                        />

                        <CardItem
                        src='images/Medellin.jpg'
                        text='La ciudad de la Primavera'
                        label='Medellin'
                        path='/'
                        />

                        <CardItem
                        src='images/Bucaramanga.jpg'
                        text='La ciudad de la Primavera'
                        label='Bucaramanga'
                        path='/'
                        />
                    
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/CALI.jpg'
                        text='La sultana del hermoso Valle'
                        label='Cali'
                        path='/'
                        />

                        <CardItem
                        src='images/Cartagena.jpg'
                        text=' Bella Cartagena de Indias'
                        label='Cartagena'
                        path='/'
                        />
                        <CardItem
                        src='images/Tunja.jpg'
                        text='La bella ciudad del ciclismo'
                        label='Tunja'
                        path='/'
                        />
                    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
