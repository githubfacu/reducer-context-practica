import React from 'react'

const FavButton = ({agregarFavorito, contacto}) => {

    const favValue = contacto.favorito

    const onClickFavorito = (id) => {

        agregarFavorito(id)

        if (contacto.favorito) {
            return alert(`${contacto.nombre} se eliminó de tus favoritos`)
        }
        return alert(`${contacto.nombre} se agregó a tus favoritos`)
    }


    return (
        <button onClick={() => onClickFavorito(contacto.id)}>
            {
                !favValue ? 'Agregar Favorito' : 'Remover Favorito'
            }
        </button>
    )
}

export default FavButton