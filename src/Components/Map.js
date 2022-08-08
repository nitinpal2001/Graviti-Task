import React from 'react'
import { GoogleMap, Marker,DirectionsRenderer } from '@react-google-maps/api';


const center = { lat: 19.0760, lng: 72.8777 };
export default function Map({directionResponse}) {
  
  return (
    <div className='map'>
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{
          height: '63vh',
          width: '100%'
        }}
      >
        <Marker position={center} />
        {directionResponse && <DirectionsRenderer directions={directionResponse} />}
      </GoogleMap>
    </div>
  );
}
