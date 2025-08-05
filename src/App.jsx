import { useState } from 'react'
import './App.css'
import Banner from './components/banner'
import HouseList from './components/houselist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner text="Heello hi from app">HII</Banner>
      <Banner text="saaweasdas"></Banner>
      <HouseList></HouseList>
    </>
  )
}

export default App
