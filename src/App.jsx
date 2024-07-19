import { useState } from 'react'
import './App.css'
import {Seleccionador} from './components/Seleccionador.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Seleccionador/>
    </>
  )
}

export default App
