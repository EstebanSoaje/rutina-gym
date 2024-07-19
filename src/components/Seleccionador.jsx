import React, { useState } from 'react';
import './Seleccionador.css'
import { RutinaHombre } from './RutinaHombre.jsx';
import { RutinaMujer } from './RutinaMujer.jsx';


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
    <div>
      <div className="botonera">
        <button className="botonHombre" onClick={handleShowComponent1}>Rutina Masculina</button>
        <button className="botonMujer" onClick={handleShowComponent2}>Rutina Femenina</button>
      </div>

      {showComponent1 && <RutinaHombre />}
      {showComponent2 && <RutinaMujer />}
    </div>
  );
};
