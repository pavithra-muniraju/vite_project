import { useState } from 'react'
import './App.css'
import Banner from './components/banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner text="Heello hi from app"></Banner>
      <Banner text="saaweasdas"></Banner>
      
    </>
  )
}

export default App
