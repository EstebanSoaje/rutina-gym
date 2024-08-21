import {BrowserRouter,Routes,Route} from "react-router-dom"
import {PaginaInicio} from "./pages/PaginaInicio.jsx"
import {Seleccionador} from "./pages/Seleccionador.jsx"
import {Otros} from "./pages/Otros.jsx"

import {Login} from "./pages/Login.jsx"
import {Registro} from "./pages/Registro.jsx"

import "./App.css"

export const App = () => {

  return(
  <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<PaginaInicio/>}/>
        <Route path = "/seleccionador" element = {<Seleccionador/>}/>
        <Route path = "/otros" element = {<Otros/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}