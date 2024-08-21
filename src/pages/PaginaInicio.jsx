
import {Link} from "react-router-dom"
import "./PaginaInicio.css"

export const PaginaInicio = () => {

  return(
  <>
  <h1>PAGINA DE INICIO</h1>
  <Link to = "/seleccionador"><button className="button">Rutinas🏋️</button></Link>
  <Link to = "/otros"><button className="button">Otros🤔</button></Link>
  </>
  )
}

/*
<Link to = "/login"><button className="button">Login🔓</button></Link>
<Link to = "/registro"><button className="button">Registro🔐</button></Link>
*/