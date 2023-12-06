import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    
    if(counter <= 19)
    {
      setCounter(counter + 1)
    }
    else{
      useState(false)
    }
  }

  const removeValue = () => {
    
    if(counter >= 1)
    {
      setCounter(counter - 1)
    }
    else{
      useState(false)
    }
  }


  return (
    <>
    <h1>Counter value: {counter}</h1>

    <button onClick={addValue}>Add value {counter}</button>

    <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
