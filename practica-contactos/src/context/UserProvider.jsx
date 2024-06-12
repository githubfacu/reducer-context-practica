import React, { useReducer } from 'react'
import { UserContext } from './UserContext'
import { contactoReducer } from '../reducer/ContactoReducer';

const UserProvider = ({children}) => {

    const contactosStorage = JSON.parse(localStorage.getItem('contactos'))

    const valorInicial = {
        contactos: contactosStorage ? contactosStorage.contactos : []
	};

    const [state, dispatch] = useReducer(contactoReducer, valorInicial);


    const agregarContactos = (contacto) => {
        dispatch({ type: 'Agregar_Contacto', payload: contacto })
    }

    const agregarFavorito = (id) => {
        dispatch({ type: 'Agregar_Favorito', payload: '' })
    }


  return (
    <UserContext.Provider value={{state, agregarContactos}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider