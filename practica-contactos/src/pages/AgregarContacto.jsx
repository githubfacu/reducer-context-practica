import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import BackNavigateButton from '../components/BackNavigateButton'
import ContactForm from '../components/ContactForm'

export const AgregarContacto = () => {

    const initialValue = {
        nombre: "",
        email: "",
        telefono: "",
        favorito: false,
        id: Math.floor(Math.random()*10000000)
    }

    const { agregarContacto } = useContext(UserContext)


  return (

    <div>
        <h2>Agregar Contacto</h2>

        <BackNavigateButton />

        <ContactForm initialValue={initialValue} onSubmitForm={agregarContacto} type='Agregar'/>
    </div>
  )
}