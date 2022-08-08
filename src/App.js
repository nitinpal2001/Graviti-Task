import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import DistanceCalc from './Components/DistanceCalc';
import {useJsApiLoader} from '@react-google-maps/api';
import LoadingSpinner from './Components/LoadingSpinner';

import LoadingContext from './Components/LoadingContext';


function App() {
  const ApiKey=process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: ApiKey,
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
