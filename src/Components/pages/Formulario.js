import React, {useState} from 'react';
import '../../Components/pages/Formulario.css';
import { createAPIEndpoint, ENDPOINTS } from '../../api' ;
export default function Formulario() {

    const [values, setValues] = useState({
        ciudad: '',
        temp: '',
        fecha: ''
    })
    const handleChange = e =>{
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }
    const enviarTemp = () => {
        values.temp = parseInt(values.temp);
        createAPIEndpoint(ENDPOINTS.TEMPERATURA).create(values)
        .then(res =>{
            console.log(res);
            alert("Envio de temperatura exitoso");
        })
        .catch(err => console.log(err));
        console.log(values);
    }

    return(
    <>
        <div className="Formulario">
        <h1>Formulario</h1>
        
        <form >
            <label htmlFor="ciudad">Ingrese la Ciudad</label>
            <input type="text" name="ciudad" onChange={handleChange} />
        </form>
        <form >
            <label htmlFor="temp">Temperatura  (Celsius) </label>
            <input type="number" name="temp" onChange={handleChange} />
        </form>
        <form >
            <label htmlFor="fecha">Fecha</label>
            <input type="date" name="fecha"onChange={handleChange} />
        </form>
        <button onClick={() => enviarTemp()}>Guardar</button>
        </div>
    </>
    );

}

