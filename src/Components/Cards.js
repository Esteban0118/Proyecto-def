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
                        src='images/medellin-colombia.jpg'
                        text='Medellin la cuidad de la eterna primavera'
                        label='Medellin'
                        path='/'
                        />
                    
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/CALI.jpg'
                        text='La bella capital de Colombia'
                        label='Cali'
                        path='/'
                        />
                        <CardItem
                        src='images/cartagena-de-indias.jpg'
                        text='Medellin la cuidad de la eterna primavera'
                        label='Medellin'
                        path='/'
                        />
                    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
