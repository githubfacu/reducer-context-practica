import React, { useEffect, useReducer } from 'react'
import { UserContext } from './UserContext'
import { contactoReducer } from '../reducer/ContactoReducer';

const UserProvider = ({children}) => {

    const contactosStorage = JSON.parse(localStorage.getItem('contactos'))

    const valorInicial = {
        contactos: contactosStorage ? contactosStorage.contactos : []
	};

    const [state, dispatch] = useReducer(contactoReducer, valorInicial);

    useEffect(() => {
        console.log(state);
	    localStorage.setItem('contactos', JSON.stringify(state))
    }, [state])


    const agregarContacto = (contacto) => {
        dispatch({ type: 'Agregar_Contacto', payload: contacto })
    }

    const eliminarContacto = (id) => {
        dispatch({ type: 'Eliminar_Contacto', payload: id })
    }

    const actualizarContacto = (contacto) => {
        dispatch({ type: 'Actualizar_Contacto', payload: contacto })
    }

    const agregarFavorito = (id) => {

        const contactoFav = state.contactos.find((contacto) => contacto.id === id)
        const favValue = contactoFav.favorito
        const contactoActualizado = {...contactoFav, favorito: !favValue}

        dispatch({ type: 'Agregar_Favorito', payload: contactoActualizado })
    }


  return (
    <UserContext.Provider value={{state, agregarContacto, agregarFavorito, eliminarContacto, actualizarContacto}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider