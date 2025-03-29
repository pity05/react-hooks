import { useState, useMemo } from "react";

export function ExpensiveCalculation() {
  // Estado para mantener el número
  const [number, setNumber] = useState(0);

  // Función para realizar un cálculo costoso (simulando una operación pesada)
  const expensiveCalculation = (num) => {
    console.log("Calculando...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };

  // Usamos useMemo para memorizar el cálculo
  const memoizedResult = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <h1>Resultado Memorized: {memoizedResult}</h1>
      <button onClick={() => setNumber(number + 1)}>Incrementar Número</button>
    </div>
  );
}
