import {BrowserRouter,Routes,Route} from "react-router-dom"
import {PaginaInicio} from "./pages/PaginaInicio.jsx"
import {Seleccionador} from "./pages/Seleccionador.jsx"
import "./App.css"
import TaTeTi from "./pages/TaTeTi.jsx"

export const App = () => {

  return(
  <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<PaginaInicio/>}/>
        <Route path = "/seleccionador" element = {<Seleccionador/>}/>
        <Route path = "/tateti" element = {<TaTeTi/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}