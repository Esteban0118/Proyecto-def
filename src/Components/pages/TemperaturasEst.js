import React, { useState, useEffect } from 'react';
import {Bar} from 'react-chartjs-2';
import './TemperaturasEst.css';
import { createAPIEndpoint, ENDPOINTS } from '../../api' ;


export default function TemperaturasEst(){
    const [ciudades, setCiudades] = useState([]);
    const [tempe, setTempe] = useState([]);
    const data ={   
        labels: ciudades,
        datasets:[{
            label: 'Temperatura por Ciudades',
            backgroundColor:'rgba(202, 39, 199, 1)',
            borderColor: 'white',
            boderWidth: 10,
            hoverBackgroundColor: 'white',
            scaleFontColor:"blue",
            data:tempe

        }]

    };
    const opciones={
        maintainAspectRatio: false,
        responsive: true,
        color: 'white',
        indexAxis: 'y',
        scales: {
            xAxis: {
                ticks:{
                    color: 'white',
                    font: {
                        size: 20
                    }
                },
            },
            yAxis: {
                ticks:{
                    color: 'white',
                    font: {
                        size: 20
                    }
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 20
                    }
                }
            }
        }
        
    }
    const consultarTemp = () => {
        createAPIEndpoint(ENDPOINTS.TEMPERATURA).fetchAll()
        .then(res =>{
            var respuesta = res.data;
            var auxCiudades = [], auxTempe = [];
            respuesta.map(elemento=>{
                auxCiudades.push(elemento.ciudad);
                auxTempe.push(elemento.temp);
            });
            setCiudades(auxCiudades);
            setTempe(auxTempe);
        })
        .catch(err => console.log(err));
    }
    useEffect(()=>{
        consultarTemp();
    },[])


    return (
        <div className="TemperaturasEst" style={{width:'80%', height:'600px'}}>
            <h2>Temperatura por Ciudades</h2>
                <Bar data={data} options={opciones}/>

        </div>
    );

}