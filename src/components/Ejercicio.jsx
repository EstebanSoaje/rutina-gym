export const Ejercicio = ({ejercicio}) => {
  /* 
  Modelo:
    ejercicio = {{  
        nombre: 'Polea al pecho cerrado',
        series: 2,
        repeticiones: 15
        comentario: 'Polea alta al pecho con agarre cerrado (ancho de hombros)',
                }}
  */
  
return (
    <>

      <p><strong>Ejercicio:</strong> {ejercicio.nombre}</p>
      <p><strong>Descripción:</strong> {ejercicio.descripcion}</p>
      <p><strong>Series:</strong> {ejercicio.series}</p>
      <p><strong>Repeticiones:</strong> {ejercicio.repeticiones}</p>
      
    </>
  );
}
