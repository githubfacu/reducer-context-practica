export const contactoReducer = (state, action) => {

	switch (action.type) {
		case 'Agregar_Contacto':

            localStorage.setItem('contactos', JSON.stringify({
                ...state,
				contactos: [...state.contactos, action.payload],
			}))

			return {
                ...state,
				contactos: [...state.contactos, action.payload],
			};

		case 'Eliminar_Contacto':
			return {

			};

		case 'Actualizar_Contacto':
			return {

			};

        case 'Agregar_Favorito':
            return {

            };
	}


};