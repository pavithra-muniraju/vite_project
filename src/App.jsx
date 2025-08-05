import { useState } from 'react'
import './App.css'
import Banner from './components/banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner></Banner>
    </>
  )
}

export default App
