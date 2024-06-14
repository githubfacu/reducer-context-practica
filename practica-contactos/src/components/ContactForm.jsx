import React, { useEffect, useState } from 'react'

const ContactForm = ({initialValue, onSubmitForm, type}) => {

    const [initialVal, setInitialVal] = useState(initialValue)

    const [form, setForm] = useState(initialVal)

    useEffect(() => {
        console.log(initialValue);
        console.log(initialVal);
        setInitialVal(initialValue)
    }, [initialValue])

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(form.nombre === '' || form.email === '' || form.telefono === ''){
            return alert('Debe completar todos los campos')
        }

        if (type === 'Actualizar') {
            onSubmitForm(form)
            return setForm(initialValue)
        }

        if (type === 'Agregar') {
            onSubmitForm(form)
            return setForm(initialValue)
        }
    }

    return (
        <form onSubmit={onSubmit} style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <label htmlFor="name">Nombre</label>
            <input value={form.nombre} name='nombre' onChange={handleChange} id='name' type="text" />

            <label htmlFor="mail">Email</label>
            <input value={form.email} name='email' onChange={handleChange} id='mail' type="email" />

            <label htmlFor="phone">Teléfono</label>
            <input value={form.telefono} name='telefono' onChange={handleChange} id='phone' type="number" />

            <button type='submit'>{type} Contacto</button>
        </form>
    )
}

export default ContactForm