import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import FavButton from '../components/FavButton'
import BackNavigateButton from '../components/BackNavigateButton'
import ContactForm from '../components/ContactForm'


const Contactos = () => {

  const [switchForm, setSwitchForm] = useState(false)
  const [currentContact, setCurrentContact] = useState({})
  const {state, eliminarContacto, agregarFavorito, actualizarContacto } = useContext(UserContext)
  const contactos = state.contactos

  const onClickDelete = (id) => {
    eliminarContacto(id)
    return alert('Contacto eliminado')
  }

  // const contactFormHidden = () => {
  //   setCurrentContact({})
  //   setSwitchForm(false)
  // }

  const contactFormShow = (contact) => {
    // contactFormHidden()
    setCurrentContact(contact)
    setSwitchForm(true)
  }

  const onClickUpdate = (contacto) => {
    actualizarContacto(contacto)
    setSwitchForm(false)
    return alert('Contacto actualizado')
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h2>Contactos</h2>

      <BackNavigateButton />

      {
        contactos &&
        contactos.map(contacto => (
          <div key={contacto.id}>
            <h3>{contacto.nombre}</h3>
            <p>{contacto.email}</p>
            <h4>{contacto.telefono}</h4>

            <FavButton agregarFavorito={agregarFavorito} contacto={contacto} />
            
            <button onClick={() => onClickDelete(contacto.id)}>
              Eliminar
            </button>
            <button onClick={() => contactFormShow(contacto)}>
              Actualizar
            </button>
          </div>
        ))
      }

      {
        switchForm && <ContactForm initialValue={currentContact} onSubmitForm={onClickUpdate} type='Actualizar'/>
      }

    </div>
  )
}

export default Contactos