import React from 'react'
import { GoogleMap, LoadScript, Marker, OverlayView } from '@react-google-maps/api';
import MyMarkers from './marker.js'
import OverLay from './nAO2'
import BodyComponent from './pageBody'
const containerStyle = {
    width: '800px',
    height: '400px'
  };
   
  const center = {
    lat: 35.9079,
    lng: -79.0541
  };

  let position = {
      show:false,
    lat: 0,
    lng: 0
  }
  
  export function getPosition() {
    console.log(position)
    return position;
  }
//   function Form() {
//     if(!position.show) {
//         return <div show={position.show}>I think?</div>
//     } else {
//         return <div show={position.show}>I think?</div>
//     }
//   }
  function MyMap() {
      
    let state = {
        show:true,
        lat: 0,
        lng: 0,
    }
    let myOverlay;

    const [map, setMap, lat, lng] = React.useState(null)
   
    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
    //   setMap(map)
    }, [])
   
    const onUnmount = React.useCallback(function callback(map) {
    //   setMap(null)
    }, [])

    const handleClick = (e) => {
        myOverlay = <OverLay >{state.lat}{state.lng}</OverLay>
        // let newdiv = <div>Test</div>
        // document.createElement(newdiv)
        let lat = e.latLng.lat()
        let lng = e.latLng.lng()
        state = {show: true,lat: lat, lng: lng}
        position.lat= lat;
        position.lng =lng;
        position.show=true;
        
        // Form();
        // console.log(state)
        // return testModal(lat);
        // console.log(document.getElementById('newform')  )
        return <div>Testing</div>;
    }
    const divStyle = {
        background: 'white',
        border: '1px solid #ccc',
        padding: 15
    };
   
    return (
        <div>
            {/* <Form></Form> */}
      <LoadScript
        // googleMapsApiKey="AIzaSyCoUHqy6ISPhcFkuvW4PHE4zl09NnFROZ8"
        // googleMapsClientId="bcec7b04084195ee"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          onLoad={onLoad}
          onClick={handleClick}
          onRightClick={handleClick}
          zoom={20}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          {/* <Marker
          position={position}/> */}
          <MyMarkers/>
          <OverlayView
            position={center}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
            <div style={divStyle}>
            <h1>OverlayView</h1>
            
             <button type='button'>Click me </button>
             </div>
        </OverlayView>

          
          <></>
        </GoogleMap>
      </LoadScript>
      
      
      </div>
    )
  }
   
  // export default MyMap