import AgregarTarea from './AgregarTarea';
import useListaTareas from '../hooks/useListaTareas';

function ListaTareas() {
  const { tareas, agregarTarea } = useListaTareas(); // Usa el Hook personalizado

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <AgregarTarea onAgregar={agregarTarea} />  {/* Se pasa la función como prop */}
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li> // Muestra cada tarea en la lista
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
