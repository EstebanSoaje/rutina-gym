import {BrowserRouter,Routes,Route} from "react-router-dom"
import {PaginaInicio} from "./pages/PaginaInicio.jsx"
import {Seleccionador} from "./pages/Seleccionador.jsx"


import "./App.css"

export const App = () => {

  return(
  <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<PaginaInicio/>}/>
        <Route path = "/seleccionador" element = {<Seleccionador/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}