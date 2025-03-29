import { useState } from 'react'
import DatosAPI from './hooks/useEffectEx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DatosAPI/>
    </>
  )
}

export default App
