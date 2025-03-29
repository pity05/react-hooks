import { useState } from 'react'
import { ThemeProvider,ThemedButton } from './hooks/useContextEx' // Correct the import for ThemeContext
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider>
        <ThemedButton />
      </ThemeProvider>
    </>
  )
}

export default App
