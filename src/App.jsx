import { useState } from 'react'
import './App.css'
import StartQuestions from './pages/StartQuestions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <StartQuestions/>
  )
}

export default App
