import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, test } from 'vitest'
import { AgregarContacto } from './AgregarContacto'
import UserProvider from '../context/UserProvider'
import { MemoryRouter } from 'react-router-dom'


describe('Pagina de agregar contacto', () => {

    beforeEach(() => {
        render(
            <MemoryRouter>
                <UserProvider>
                    <AgregarContacto />
                </UserProvider>                
            </MemoryRouter>
        )
    })

    test('titulo visible', () => {
        const title = screen.getByRole('heading', {level: 2})
        expect(title.textContent).toEqual('Agregar Contacto')
    })

    test('boton del formulario', () => {
        const button = screen.getByTestId('addbutton')
        expect(button).toBeInTheDocument()
        expect(button.textContent).toEqual('Agregar Contacto')
    })
})
