import React, { useState } from 'react';
import {Link} from "react-router-dom"
import './Seleccionador.css'
import { RutinaHombre } from '../components/RutinaHombre.jsx';
import { RutinaMujer } from '../components/RutinaMujer.jsx';


export const Seleccionador = () => {
  const [showComponent1, setShowComponent1] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);

  const handleShowComponent1 = () => {
    setShowComponent1(true);
    setShowComponent2(false);
  };

  const handleShowComponent2 = () => {
    setShowComponent1(false);
    setShowComponent2(true);
  };

  return (
    <>

      <div className="botonera">
        
        <button className="botonHombre" onClick={handleShowComponent1}>Rutina Masculina</button>
          <Link to = "/"><button className="button">Inicio</button></Link>
        <button className="botonMujer" onClick={handleShowComponent2}>Rutina Femenina</button>
      </div>

      {showComponent1 && <RutinaHombre />}
      {showComponent2 && <RutinaMujer />}
    </>
  );
};
