import React from 'react';
import {Bar} from 'react-chartjs-2';
import './TemperaturasEst.css';


export default function TemperaturasEst(){
    const data ={   
        labels: ['Bogota', 'Cartagena', 'Tunja' , 'Cali' , 'Buenaventura'], backgroundColor:'white',
        datasets:[{
            label: 'Temperatura por Ciudades',
            backgroundColor:'rgba(202, 39, 199, 1)',
            borderColor: 'blue',
            boderWidth: 10,
            hoverBackgroundColor:'white',
            hoverBorderColor:'black',
            data:[35,45,15,18,32]

        }]
    };
    const opciones={
        maintainAspectRatio: false,
        responsive: true 
    }
    return (
        <div className="TemperaturasEst" style={{width:'80%', height:'600px'}}>
            <h2>Poblacion en Millones de Habitantes</h2>
                <Bar data={data} options={opciones}/>

        </div>
    );

}