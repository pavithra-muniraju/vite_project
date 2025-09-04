import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/banner'
import HouseList from './components/houselist'
import House from './components/house'

function App() {
  const [count, setCount] = useState(0)

  const [selectedHouse, setSelectedHouse] = useState(null);
  return (
    <>
      <Banner text="Heello hi from app">HII</Banner>
      <Banner text="saaweasdas"></Banner>
      <Suspense fallback={<h3>Loading....</h3>}>
        {/* <HouseList></HouseList> */}
        {selectedHouse ? <House house={selectedHouse} /> : <HouseList selectHouse={setSelectedHouse} />}

        
      </Suspense>
      
    </>
  )
}

export default App
