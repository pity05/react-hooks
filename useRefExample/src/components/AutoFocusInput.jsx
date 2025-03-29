import { useRef } from "react";

export function FocusInput() {
  // Creamos una referencia para el campo de texto
  const inputRef = useRef(null);

  // Función que pone el foco en el campo de texto
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Enfoca el campo de texto
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Haz clic en el botón para enfocarme"
      />
      <button onClick={focusInput}>Enfocar Input</button>
    </div>
  );
}

