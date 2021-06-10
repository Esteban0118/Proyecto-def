import React, {useState} from 'react';
import '../../Components/pages/Formulario.css';



export default function Formulario() {

    const [nombre, setNombre] = useState("Escriba su Nombre");
    const [Ciudad, setCiudad] = useState("Escriba la Ciudad");
    const [Temp, setTemperatura] = useState("Escriba la Temperatura");
    const [date, setFecha] = useState("Escriba la Temperatura");


    return(
    <>
        <div className="Formulario">
        <h1>Formulario</h1>
        
        <form>
            <label htmlFor="nombre">Nombre y Apellido</label>
            <input type="text" id="nombre" name="nombre" 
            value={nombre} onChange={(e) => setNombre(e.target.value)}
            />
        </form>
        <form >
            <label htmlFor="Ciudad">Ingrese la Ciudad</label>
            <input type="text" id="Ciudad" name="Ciudad" 
            value={Ciudad} onChange={(e) => setCiudad(e.target.value)}
            />
        </form>
        <form >
            <label htmlFor="Temp">Temperatura  (Celsius) </label>
            <input type="number" id="Temp" name="Temp" 
            value={Temp} onChange={(e) => setTemperatura(e.target.value)}
            />
        </form>
        <form >
            <label htmlFor="Fecha">Fecha</label>
            <input type="date" id="Fecha" name="Fecha" 
            value={date} onChange={(e) => setFecha(e.target.value)}
            />
        </form>
        <button>Guardar</button>
        </div>
    </>
    );

}

