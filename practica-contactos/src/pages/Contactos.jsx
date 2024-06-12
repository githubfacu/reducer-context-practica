import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Contactos = () => {

  const {state} = useContext(UserContext)

  const contactos = state.contactos

  console.log(contactos);

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h2>Contactos</h2>

      {
        contactos &&
        contactos.map(contacto => (
          <div key={contacto.id}>
            {contacto.nombre}
          </div>
        ))
      }
    </div>
  )
}

export default Contactos