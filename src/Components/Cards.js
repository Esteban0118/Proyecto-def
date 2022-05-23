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
                        text='Comprometida con los animales '
                        label='Dogs Kers'
                        path='/'
                        />

                        <CardItem
                        src='images/ps2.jpg'
                        text='Empresa responsable y confiable'
                        label='Dogs Kers'
                        path='/'
                        />

                        <CardItem
                        src='images/ps3.jpg'
                        text='Seguridad al 100% recomendada'
                        label='Dogs Kers'
                        path='/'
                        />
                    
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/ps4.jpg'
                        text='Servicio Nacional e Internacional'
                        label='Dogs Kers'
                        path='/'
                        />

                        <CardItem
                        src='images/ps5.jpg'
                        text=' Funcionamiendo las 24hrs del dia '
                        label='Dogs Kers'
                        path='/'
                        />
                        <CardItem
                        src='images/ps6.jpg'
                        text='Seguro todo riesgo en mascotas'
                        label='Dogs Kers'
                        path='/'
                        />
                    
                    </ul>
                </div>
            </div>
            <div>
                <h1> Nuestra Historia </h1>
                <div className='history'> 
                    <br></br>
                    <br></br>
                    <ul >
                        <img className= 'img-above' src= '/images/Logo.PNG'/>
                    </ul>
                    <br></br>
                    <div>
                        <h3>
                            Dogs Kers es una empresa comprometida con las mascotas y animales 
                            
                        </h3>
                        <h3>
                             Dispuesta a dar el mayor de los servicios en cada pais
                        </h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cards
