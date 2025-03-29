import { useReducer } from "react";

// Definir el estado inicial
const initialState = { count: 0 };

// Reducer: una función que maneja las acciones y actualiza el estado
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export function CounterWithReducer() {
  // Usar useReducer para manejar el estado del contador
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Contador: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Incrementar</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrementar</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reiniciar</button>
    </div>
  );
}
