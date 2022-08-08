import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import DistanceCalc from './Components/DistanceCalc';
import {useJsApiLoader} from '@react-google-maps/api';
import LoadingSpinner from './Components/LoadingSpinner';

import LoadingContext from './Components/LoadingContext';


function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyD4xiMemZE2fDNxI0g-T5R4Lm4XJiD9Pb4",
    libraries: ["places"]
  });
  if (!isLoaded) {
    return <LoadingSpinner/>
  }

  return (
    <div className="App">
      <LoadingContext.Provider value={isLoaded}>
      <Navbar/>
      <DistanceCalc/>
      </LoadingContext.Provider>
    </div>
  );
}

export default App;
