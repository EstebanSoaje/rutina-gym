import {Ejercicio} from "./Ejercicio"


export const Sesion = ({sesion}) => {



    return (
       <>
            <h3> --- Rutina del día {sesion.dia} --- </h3>

            <h3>{sesion.area}</h3>
            <p><strong>Calentamiento</strong></p>
            <Ejercicio ejercicio = {{   nombre: 'Polea al pecho cerrado',
                                        descripcion: 'Polea alta al pecho con agarre cerrado (ancho de hombros)',
                                        series: 2,
                                        repeticiones: 15
                                    }} />
            
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
    


            <Ejercicio ejercicio = {{   nombre: 'Press de banco plano',
                                        descripcion: 'Para trabajar el pectoral',
                                        series: 3,
                                        repeticiones: 15
                                    }} />

       </> 
    )

}