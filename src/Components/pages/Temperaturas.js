import React, { useState } from 'react';
import '../../App.css';
const api ={
    key: "af5837a2ec2b4dd20f8afd96ea37698f",
    base: "https://api.openweathermap.org/data/2.5/"
}
export default function Temperaturas(){

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if (evt.key === "Enter") {
          fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
            .then(res => res.json())
            .then(result => {
              setWeather(result);
              setQuery('');
              console.log(result);
            });
        }
      }

    const dateBuilder = (d) => {
        let date = String(new window.Date())
        date = date.slice(3,15)

        return `${date}`
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