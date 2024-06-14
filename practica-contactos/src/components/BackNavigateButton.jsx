import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackNavigateButton = () => {

    const navigate = useNavigate()

    const backNavigate = () => {
        navigate(-1)
    }


  return (
    <button
      onClick={backNavigate}
      style={{backgroundColor:'white',
        alignSelf: 'end'
      }}
    >
      Regresar
    </button>
  )
}

export default BackNavigateButton