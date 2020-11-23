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
                height: '400px',
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
      
      const styles = new window.google.maps.StyledMapType([
          { elementType: "geometry.stroke", stylers: [{ color: "#ebe3cd" }] },
          {elementType: "labels.icon", stylers:[{visibility: "off"}]},
          {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [{ color: "#000000" }],},
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#c9b2a6" }],
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "geometry.stroke",
            stylers: [{ color: "#000000" }],
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [{ color: "#ae9e90" }],
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#4c5667" }],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#dfd2ae" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#93817c" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#a5b076" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#447530" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#f5f1e6" }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#fdfcf8" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#f8c967" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#e9bc62" }],
          },
          {
            featureType: "road.highway.controlled_access",
            elementType: "geometry",
            stylers: [{ color: "#e98d58" }],
          },
          {
            featureType: "road.highway.controlled_access",
            elementType: "geometry.stroke",
            stylers: [{ color: "#db8555" }],
          },
          {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{ color: "#806b63" }],
          },
          {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [{ color: "#dfd2ae" }],
          },
          {
            featureType: "transit.line",
            elementType: "labels.text.fill",
            stylers: [{ color: "#8f7d77" }],
          },
          {
            featureType: "transit.line",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ebe3cd" }],
          },
          {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [{ color: "#dfd2ae" }],
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#b9d3c2" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#92998d" }],
          },
          
        ],
        { name: "Styled Map" }
      );
      map.mapTypes.set("styled_map", styles)
      map.setMapTypeId("styled_map");
      // setMap(map)  
      // map.mapOptions({"zoom": 1})
      const bounds = new window.google.maps.LatLngBounds({
        lat: 35.91354,
        lng: -79.05523
      });
      
      map.fitBounds(bounds);
      

    // console.log(map.getCenter().lat())
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
            <div id="map">
                {/* <Form></Form> */}
          <LoadScript
            googleMapsApiKey={"AIzaSyCoUHqy6ISPhcFkuvW4PHE4zl09NnFROZ8"}
            // mapIds={["bcec7b04084195ee"]}
            mapIds={["bcec7b04084195ee"]}
          >
            <GoogleMap
              
              id="myMap"
              onLoad={this.onLoad}
              mapContainerStyle={this.state.containerStyle}
              
              // mapIds="bcec7b04084195ee"
              mapTypeIds={["roadmap", "satellite", "hybrid", "terrain", "styled_map"]}
              onClick={this.handleClick}
              zoom={18}
              onRightClick={this.handleClick}           
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