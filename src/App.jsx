
import { useCallback, useState } from 'react';
import './App.css'
import Banner from './components/banner'
import ErrorBoundary from './components/errorBoundry'
import navValues from './navigation/navValues';
import HouseList from './components/houselist';
import navigationContext from './navigation/navigationContext';
import ComponentPicker from './components/componentPicker';
function App() {
  

  const navigate = useCallback(
    (navTo, param) => {setNav({ current: navTo, parm: param, navigate })},
    []
  );


  const [nav, setNav] = useState({current: navValues.home, navigate});
  return (
    <navigationContext.Provider value={nav}>
    <ErrorBoundary fallback="An error occured. Please try again later">
      <Banner text="Heello hi from app">HII</Banner>
      <Banner text="saaweasdas"></Banner>
      
      <ComponentPicker currentNavLocation={nav.current}></ComponentPicker>
      
    </ErrorBoundary>
    </navigationContext.Provider>
  )
}

export default App
