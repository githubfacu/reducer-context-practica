import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import FavButton from '../components/FavButton'
import BackNavigateButton from '../components/BackNavigateButton'

const Favoritos = () => {

  const {state, agregarFavorito} = useContext(UserContext)
  const contactosFavoritos = state.contactos.filter(cont => cont.favorito)

  console.log(contactosFavoritos);

  return (
    <div>
      <h2>Favoritos</h2>
      
      <BackNavigateButton />

      {
        contactosFavoritos &&
        contactosFavoritos.map(contacto => (
          <div key={contacto.id}>
            <h3>{contacto.nombre}</h3>
            <h4>{contacto.email}</h4>

            <FavButton agregarFavorito={agregarFavorito} contacto={contacto} />
          </div>
        ))
      }

    </div>
  )
}

export default Favoritos