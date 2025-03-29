import { useState } from 'react';

function useListaTareas() {
  const [tareas, setTareas] = useState([]);  // Estado para almacenar las tareas

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);  // Agrega una nueva tarea al array de tareas
  };

  return { tareas, agregarTarea };  // Retorna el estado y la función para modificarlo
}

export default useListaTareas;
