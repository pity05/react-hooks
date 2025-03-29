import { useState } from 'react';

function AgregarTarea({ onAgregar }) { // Recibe el callback `onAgregar`
  const [tarea, setTarea] = useState(''); // Estado local para el input

  const manejarEnvio = () => {
    if (tarea.trim() !== '') {
      onAgregar(tarea); // Llama al callback con la nueva tarea
      setTarea(''); // Limpia el input
    }
  };

  return (
    <div>
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={manejarEnvio}>Agregar</button>
    </div>
  );
}

export default AgregarTarea;
