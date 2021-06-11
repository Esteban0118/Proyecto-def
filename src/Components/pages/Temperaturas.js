import React, { useState } from 'react';
import '../../App.css';
import { createAPIEndpoint, ENDPOINTS } from '../../api' ;


export default function Temperaturas(){
    const api ={
        key: "af5837a2ec2b4dd20f8afd96ea37698f",
        base: "https://api.openweathermap.org/data/2.5/"
    }

    const dateBuilder = (d) => {
        var separator='-';
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const fecha = dateBuilder(new Date());
    const [values] = useState({
        ciudad: '',
        temp: '',
        fecha: ''
    })
    

    const search = evt => {
        if (evt.key === "Enter") {
          fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
            .then(res => res.json())
            .then(result => {
              setWeather(result);
              setQuery('');
              console.log(result);
              if(result.message != "city not found"){
                var te = Math.round(result.main.temp);
                console.log(te);
                console.log(result.name);
                values.fecha = dateBuilder(new Date());
                values.ciudad = result.name;
                values.temp = te;
                createAPIEndpoint(ENDPOINTS.TEMPERATURA).create(values)
                .then(res =>{
                console.log(res);
                })
                .catch(err => console.log(err));
                console.log(values);
              }               
            });
        }
      }

    return <div className="temperaturas">
        <main className="maintemp">
            <div className="search-box">
                <input type="text" 
                className="search-bar" 
                placeholder="Buscar..." 
                onChange={e => setQuery(e.target.value)} 
                value={query}
                onKeyPress={search}
                />
            </div>
            {(typeof weather.main != "undefined") ? (
            <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
                <div className="weather-box">
                    <div className="temp">{Math.round(weather.main.temp)}°c</div>
                    <div className="weather">{weather.weather[0].main}</div>
                </div>
            </div>
            ) : ('')}
        </main>
    </div>
}