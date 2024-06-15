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

  const contactFormShow = (contact) => {
    setCurrentContact(contact)
    setSwitchForm(true)
  }

  const onClickUpdate = (contacto) => {
    actualizarContacto(contacto)
    setSwitchForm(false)
    return alert('Contacto actualizado')
  }

  return (
    <div style={{width: '90%', display: 'flex', flexDirection: 'column'}}>
      <h2>Contactos</h2>

      <BackNavigateButton />

      <div style={{width: '80%', display: 'flex', justifyContent: 'space-between',  borderTop: '2px solid #003049'}}>
        <section style={{paddingBottom: '16px'}}>
          {
            contactos &&
            contactos.map(contacto => (
              <article key={contacto.id} style={{display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '8px', borderBottom: '2px solid #003049', paddingLeft: '16px', flexWrap: 'wrap'}}>
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
              </article>
            ))
          }
        </section>

        {
          switchForm && 
        <section style={{border: '2px solid #003049',  padding: 16}}>
          <ContactForm initialValue={currentContact} onSubmitForm={onClickUpdate} type='Actualizar'/>
        </section>
        }

      </div>





    </div>
  )
}

export default Contactos