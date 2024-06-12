import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

export const AgregarContacto = () => {

    const initialValor = {
        nombre: "",
        email: "",
        telefono: "",
        favorito: false,
        id: Math.floor(Math.random()*10000000)
    }

    const [form, setForm] = useState(initialValor)
    const { agregarContactos, state } = useContext(UserContext)

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    const onSubmit = (e) => {
        e.preventDefault()

        agregarContactos(form)
        console.log(state);       
    }

  return (

    <div>
        <h2>Agregar Contacto</h2>

        <form onSubmit={onSubmit} style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <label htmlFor="name">Nombre</label>
            <input value={form.nombre} name='nombre' onChange={handleChange} id='name' type="text" />

            <label htmlFor="mail">Email</label>
            <input value={form.email} name='email' onChange={handleChange} id='mail' type="email" />

            <label htmlFor="phone">Teléfono</label>
            <input value={form.telefono} name='telefono' onChange={handleChange} id='phone' type="number" />

            <button type='submit'>Agregar Contacto</button>
        </form>

    </div>
  )
}