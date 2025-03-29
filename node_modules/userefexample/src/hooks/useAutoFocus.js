import { useRef } from "react";

export function useAutoFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Enfoca el input directamente
    }
  };

  return { inputRef, focusInput };
}
