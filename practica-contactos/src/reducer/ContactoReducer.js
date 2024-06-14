export const contactoReducer = (state, action) => {

	switch (action.type) {

		case 'Agregar_Contacto':
			return {
                ...state,
				contactos: [...state.contactos, action.payload],
			};

		case 'Eliminar_Contacto':
			return {
				...state,
				contactos: state.contactos.filter(contacto => contacto.id !== action.payload)
			};

		case 'Actualizar_Contacto':
			return {
				...state,
				contactos: state.contactos.map(contacto => 
					contacto.id === action.payload.id ? action.payload : contacto
				)
			};

        case 'Agregar_Favorito':

            return {
				...state,
				contactos: state.contactos.map(contacto => 
					contacto.id === action.payload.id ? action.payload : contacto
				)
            };
	}

};