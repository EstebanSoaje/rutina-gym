import { useState } from 'react'
import './RutinaHombre.css'

export const RutinaHombre = ()=>  {
    const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>Rutina Masculina</h1>
      <h3>----  Día 1  ----</h3>
      <h3>ESPALDA</h3>
      <p>Calentamiento</p>
      <ul>
        <li>Polea alta al pecho con agarre cerrado (ancho de hombros) 2x15</li>
        <li>Polea al pecho agarre abierto 3x12 pesadas</li>
      </ul>
      <p>Rutina</p>
      <ul>
        <li>Polea al pecho agarre abierto 3x12 pesadas</li>
        <li>Remo a un brazo en maquina hammer 4x12</li>
        <li>Remo T 15,12,10,10</li>
        <li>Pull pover con máquina o remo con barra agarre supino en polea 4x15 + 7x10 con 30” de descanso</li>
      </ul>
      <ul>
        <li>Curl a 1 brazo en banco Scott 3x12</li>
        <li>Curl con banco Scott polea sentado 3 series al fallo</li>
      </ul>
      <h3>----  Día 2  ----</h3>
      <h3>HOMBROS</h3>
      <p>Calentamiento</p>
      <ul>
        <li>Vuelo lateral a un razo con mancuerna 3x15</li>
      </ul>
      <p>Rutina</p>
      <ul>
        <li>Press militar en Smith o máquina superserie con vuelos laterales 4x12 +15 pesado el press, el vuelo
          con mancuerna que de para hacer 15repeticiones estrictas.</li>
        <li>Vuelo lateral a 1 brazo con mancuerna 3x12</li>
        <li>Remo a la barbilla con barra súper serie con vuelos frontales con barra 3x15</li>
        <li>Press arnold con mancuernas superserie con encogimientos 3x12+15</li>
      </ul>
      <h3>----  Día 3  ----</h3>
      <h3>CUADRICEPS</h3>
      <p>Calentamiento</p>
      <ul>
        <li>Bici fija con un poco de carga 5 a 7 minutos</li>
        <li>      Extensión de cudriceps en sillón 3x20 reps bien hechas con recorrido completo (poca carga solo la
          que mantenga la minima tensión)</li>
      </ul>
      <h3>GEMELOS</h3>
      <ul><li>
        Parado en maquina 4x15</li></ul>
      <h3>  RUTINA</h3>
      <ul><li>Sentadilla completa en maquina multipower 5x10 (solo la carga que me permita hacer el recorrido
        completo)</li>
        <li>      Extensión de cuádriceps a una pierna 3x12</li>
        <li>Prensa pies en la mitad del cajón 1x30 1x20 2x15 incrementando la carga</li>
        <li>
          Extensión de cuádriceps en sillón 4x15 ( pesadas recorrido completo.) + 12 descenso</li>
        <li>
          Camilla de Femorales 3x15</li>
      </ul>


      <h3>----  Día 4  ----</h3>
      <h3>PECHO</h3>
      <p>Calentamiento</p>
      <ul>
        <li>Peck deck 3x20</li>
      </ul>
      <p>Rutina</p>
      <ul>
        <li>Press inclinado en maquina 4x10</li>
        <li>Aperturas en banco plano 4x12</li>
        <li>Press en banco plano con barra bajando al cuello 15,12,10,10</li>
        <li>Fondos para pecho 3 series hasta no poder mas</li>
      </ul>
      <h3>TRICEPS</h3>
      <p>Rutina</p>
      <ul>
        <li>Press empuje para tríceps en banco plano 1x15 + 3x12 incrementando el peso</li>
        <li>Tríceps a 1 brazo.con mancuerna 3 x 12</li>
        <li>Extensionn de codo en polea con agarre recto 3x12+12 descendente</li>
      </ul>
      <h3>----  Día 5 ----</h3>
      <h3>HOMBROS</h3>
      <p>Calentamiento</p>
      <ul>
        <li>      Vuelo lateral a un razo con mancuerna 3x15</li>
      </ul>
      <p>Rutina</p>
      <ul>
        <li>      Press militar en Smith superserie con vuelos laterales 4x12 +15 pesado el press, el vuelo con mancuerna que de para hacer 15repeticiones estrictas.</li>
        <li>      Vuelo lateral a 1 brazo con mancuerna 3x12+12 descendente</li>
        <li>      Remo a la barbilla con barra súper serie con vuelos frontales con barra 3x15</li>
        <li>      Press arnold con mancuernas superserie con encogimientos 3x15</li>
      </ul>

    </>
  )
}
