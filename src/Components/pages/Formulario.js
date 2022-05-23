import React, {useState} from 'react';
import '../../Components/pages/Formulario.css';
import Footer from '../Footer';
import { useForm } from 'react-hook-form';
    
const Formulario = () => {

    const {register,formState:{errors},handleSubmit} = useForm();


    const onSubmit = (data) =>{
        console.log(data);
    }


    

    return (
    
        <>
        <form className="Formulario" onSubmit={handleSubmit(onSubmit)}>
            <h1>Registrate</h1>
            <br></br>
            <div >
                <label htmlFor="name-people">Nombre Completo</label>
                <input type="text" {...register('name-people',{
                    required: true,
                    maxLength: 20,
                })} />
                {errors.name?.type ===  'required' && <p> El campo es requerido</p>}
            </div >
            <div  >
                <label htmlFor="name"> Nombre de tu animalito </label>
                <input type="text" {...register('name',{
                    required: true,
                    maxLength: 20,
                })} />
            </div >
            <div  >
                <label htmlFor="email">Email</label>
                <input type="email" {...register('email',{
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>El formato de email es incorrecto</p>}
            </div >
            <div  >
                <label htmlFor="date">Fecha de nacimiento </label>
                <input type="date" {...register('date',{
                    required: true,
                })} />
            </div >
            <div >
                <label htmlFor= "addres">Direccion de residencia</label>
                <input type="text" {...register('addres',{
                    required: true,
                    maxLength: 15,
                })} /> 
            </div >
            <div >
                <label htmlFor = "cellphone">Numero Celular</label>
                <input type="number" {...register('cellphone',{
                    required: true,
                })} ></input>
            </div >
            <div>
                <label htmlFor="Country">Pais</label>
                <select {...register('country')}>
                    <option value = "es">España</option>
                    <option value = "mx">Mexico</option>
                    <option value = "co">Colombia</option>
                    <option value = "ar">Argentina</option>
                    <option value = "ur">Uruguay</option>

                </select>
            </div>
            <div>
            {errors.name?.type ===  'required' && <p> El campo es requerido</p>}
            {errors.name?.type === 'maxLength' && <p> El campo ha pasado el limite de caracteres</p>}
            </div>
                <button>Guardar</button>
        </form>

        <Footer/>

        </>

    )

}

export default Formulario;


