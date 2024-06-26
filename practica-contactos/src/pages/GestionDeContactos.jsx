import React from 'react'
import { Link } from 'react-router-dom'

const GestionDeContactos = () => {

  return (
    <>
        <h1 style={{margin: 0}}>Gestión de Contactos</h1>

        <ul style={{
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          gap: '20px',
          fontSize: '22px',
          color: '#d62828'
          }}>
            <li><Link to={'/contactos'}>Contactos</Link></li>
            <li><Link to={'/favoritos'}>Favoritos</Link></li>
            <li><Link to={'/agregarcontacto'}>Agregar Contacto</Link></li>
        </ul>
    </>
  )
}

export default GestionDeContactos