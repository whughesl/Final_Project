import React from 'react'
import { GoogleMap, LoadScript, Marker, OverlayView } from '@react-google-maps/api';
import MyMarkers from './marker.js'
import OverLay from './nAO2'
import BodyComponent from './pageBody'

class MyNewMap extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            
            show:false,
            lat: 0,
            lng: 0, 
            containerStyle: {
                width: '800px',
                height: '400px'
            }
        }
        this.getPosi = this.getPosi.bind(this)
    }
    
    center = {
        lat: 35.9135412,
        lng: -79.0552325
    };
    getPosi() {
        
        return this.state.lng, this.state.lat
    }

    // const [map, setMap, lat, lng] = React.useState(null)
   
    onLoad = (map) => {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
    //   setMap(map)
    }
   
    onUnmount = (map) => {
    //   setMap(null)
    }

    handleClick = (e) => {
        //myOverlay = <OverLay >{state.lat}{state.lng}</OverLay>
        // let newdiv = <div>Test</div>
        // document.createElement(newdiv)
        let lat = e.latLng.lat()
        let lng = e.latLng.lng()
        this.setState( {show: true,lat: lat, lng: lng})
        global.position = {lat: lat, lng: lng}
        // Form();
        console.log("doing the thing")
        
    }
    render() {
        return (
            <div>
                {/* <Form></Form> */}
          <LoadScript
            googleMapsApiKey="AIzaSyCoUHqy6ISPhcFkuvW4PHE4zl09NnFROZ8"
            googleMapsClientId="bcec7b04084195ee"
          >
            <GoogleMap
              mapContainerStyle={this.state.containerStyle}
              center={this.center}
            
              onClick={this.handleClick}
              onRightClick={this.handleClick}
              zoom={19}
            
            >
              { /* Child components, such as markers, info windows, etc. */ }
              <MyMarkers/>  
              
              <></>
            </GoogleMap>
          </LoadScript>
          
          
          </div>
        )
    }
    
  }
   
  export default MyNewMap