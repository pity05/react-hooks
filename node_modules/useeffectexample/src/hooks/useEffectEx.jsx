import { useState, useEffect } from 'react';

function ChisteGato() {
  const [chiste, setChiste] = useState('');

  const obtenerChiste = () => {
    fetch('https://catfact.ninja/fact') // API que devuelve datos sobre gatos
      .then(response => response.json())
      .then(data => setChiste(data.fact));
  };

  useEffect(() => {
    obtenerChiste(); // Cargar un chiste al iniciar el componente
  }, []);

  return (
    <div>
      <p>{chiste}</p>
      <button onClick={obtenerChiste}>Nuevo Chiste</button>
    </div>
  );
}

export default ChisteGato;
