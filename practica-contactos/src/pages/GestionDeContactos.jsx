import React from 'react'
import { Link } from 'react-router-dom'

const GestionDeContactos = () => {

  return (
    <>
        <h1 style={{margin: 0}}>Geatión de Contactos</h1>

        <ul>
            <li><Link to={'/contactos'}>Contactos</Link></li>
            <li><Link to={'/favoritos'}>Favoritos</Link></li>
            <li><Link to={'/agregarcontacto'}>Agregar Contacto</Link></li>
        </ul>
    </>
  )
}

export default GestionDeContactos