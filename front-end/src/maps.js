import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import MyMarkers from './marker.js'
const containerStyle = {
    width: '800px',
    height: '400px'
  };
   
  const center = {
    lat: 35.9079,
    lng: -79.0541
  };

  const position = {
    lat: 35.9079,
    lng: -79.0541
  }
   
  function MyMap() {
    const [map, setMap] = React.useState(null)
   
    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      setMap(map)
    }, [])
   
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
   
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyCoUHqy6ISPhcFkuvW4PHE4zl09NnFROZ8"
        googleMapsClientId="bcec7b04084195ee"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          
          onLoad={onLoad}
          center={center}
          zoom={20}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          {/* <Marker
          position={position}/> */}
          <MyMarkers/>

          
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
   
  export default React.memo(MyMap)