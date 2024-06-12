import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GestionDeContactos from '../pages/GestionDeContactos'
import Contactos from '../pages/Contactos'
import Favoritos from '../pages/Favoritos'
import {AgregarContacto} from '../pages/AgregarContacto'


const AppRouter = () => {

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px', paddingLeft: 0
    }}>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<GestionDeContactos />}/>
                <Route path={'/contactos'} element={<Contactos />}/>
                <Route path={'/favoritos'} element={<Favoritos />}/>
                <Route path={'/agregarcontacto'} element={<AgregarContacto />}/>
            </Routes>
        </BrowserRouter>        
    </div>

  )
}

export default AppRouter