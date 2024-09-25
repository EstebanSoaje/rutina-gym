import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import "./PaginaInicio.css"

export const PaginaInicio = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(()=>{
    console.log('effect', {enabled})

    const handleMove = (event) => {
      const {clientX, clientY} = event
      //console.log('handleMove', {clientX, clientY})
      setPosition({x: clientX, y: clientY})
    }
    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }), [enabled]

  return(
  <>
  <div style={{
    position: 'absolute' ,
    backgroundColor: ' #69f',
    borderRadius : '50%',
    opacity: 0.8,
    pointerEvents: 'none' ,
    left: -20,
    top: -20,
    width: 40,
    height: 40,
    transform: `translate(${position.x}px, ${position.y}px) `,
    transitionDelay: '0.01s'
  }}
  /> 
   <h1>PAGINA DE INICIO</h1>
  
   <button onClick={() => setEnabled(!enabled)}>
    {enabled ? 'Desactivar' : 'Activar'} seguir puntero
  </button>

  <Link to = "/seleccionador"><button className="button">Rutinas🏋️</button></Link>
  <Link to = "/tateti"><button className="button">TaTeTi</button></Link>
  </>
  )
}

/*
<Link to = "/login"><button className="button">Login🔓</button></Link>
<Link to = "/registro"><button className="button">Registro🔐</button></Link>
*/