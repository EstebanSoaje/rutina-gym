import { useState } from 'react'
import './RutinaMujer.css'

export const RutinaMujer = ()=>  {
    const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>Rutina Femenina</h1>

    <h3>----  Día 1  ----</h3>
    <p>Calentamiento</p>
    <ul>
      <li>Sentadillas en el lugar 2x20</li>
    </ul>
    <p>Rutina</p>
    <ul>
        <li>Sillón de cuádriceps 20,15,15,12,12,10 (subiendo el peso)</li>
        <li>Todo combinado con 15 sentadillas en el lugar</li>
        <li>Sentadilla péndulo o hack 20,15,12,8,8 (subiendo el peso) combinado con estocadas en el lugar o sentadillas x15/20 reps</li>
        <li>Prensa 45° 4x15</li>
        <li>Gemelos de pie con mancuerna o en el lugar + gemelos sentada 4x15</li>
    </ul>

    <h3>---- Día 2 ----</h3>
    <p>Calentamiento</p>

    <ul>
    <li>Vuelos laterales 1 brazo 2x15</li>
    </ul>
    <p>Rutina</p>
    <ul>
        <li>Press militar con mancuernas 4x12 + Vuelos laterales x10</li>
        <li>Remo al mentón + vuelos frontales 4x15</li>
        <li>Vuelos posteriores con mancuernas sentada 3x15</li>
        <li>Polea al pecho 4x15</li>
        <li>Remo bajo 4x15</li>
    </ul>

    <h3>---- Día 3 ----</h3>
    <p>Rutina</p>
    <ul>
        <li>Camilla de femorales + peso muerto con mancuernas 5x15 camilla + 10 reps peso muerto</li>
        <li>Femorales 1 pierna 4x12 sin descanso entre pierna y pierna</li>
        <li>Prensa frontal 1 pierna 4x10 lentas + 5 rápidas (así en las 4 series)</li>
        <li>Sentadilla búlgara 4x15-8 reps (entre 15 y 8 repeticiones)</li>
        <li>Sillón de aductores 4x10</li>
    </ul>

    <h3>---- Día 4 ----</h3>
    <p>Calentamiento</p>

    <ul>
    <li>Vuelos laterales 1 brazo 2x15</li>
    </ul>
    <p>Rutina</p>
    <ul>
        <li>Press militar con mancuernas 4x12 + Vuelos laterales x10</li>
        <li>Remo al mentón + vuelos frontales 4x15</li>
        <li>Vuelos posteriores con mancuernas sentada 3x15</li>
        <li>Polea al pecho 4x15</li>
        <li>Remo bajo 4x15</li>
    </ul>
    <h3>---- Día 5 ----</h3>
    <ul>
        <li>Patada de glúteo 1x20 + 4x15 pesadas</li>
        <li>Patada recta en polea 4x12</li>
        <li>Patada lateral en máquina 4x15 + sentadilla sumo con mancuerna x15 reps</li>
        <li>Elevación pélvica 4x15 + sillón de abductores x20 reps</li>
    </ul>

    <p>Circuito de ABS</p>
    <ul>
        <li>Abdominales cortos + plancha + 1 minuto de bici todo junto por 4-5 vueltas sin descanso</li>
        <li>Los ABS entre 15 y 10 reps</li>
    </ul>
    </>
  )
}

