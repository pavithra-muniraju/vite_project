import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/banner'
import HouseList from './components/houselist'
import House from './components/house'
import ErrorBoundary from './components/errorBoundry'

function App() {
  const [count, setCount] = useState(0)

  const setSelectedHouseWrapper = (house) => {
    setSelectedHouse(house);
  };

  const [selectedHouse, setSelectedHouse] = useState(null);
  return (
    <ErrorBoundary fallback="An error occured. Please try again later">
      <Banner text="Heello hi from app">HII</Banner>
      <Banner text="saaweasdas"></Banner>
      <Suspense fallback={<h3>Loading....</h3>}>
        {/* <HouseList></HouseList> */}
        {selectedHouse ? <House house={selectedHouse} /> : <HouseList selectHouse={setSelectedHouseWrapper} />}

        
      </Suspense>
      
    </ErrorBoundary>
  )
}

export default App
