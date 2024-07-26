
import {Link} from "react-router-dom"
import "./PaginaInicio.css"

export const PaginaInicio = () => {

  return(
  <>
  <h1>PAGINA DE INICIO</h1>
  
  <Link to = "/seleccionador"><button className="button">Rutinas🏋️</button></Link>
  </>
  )
}