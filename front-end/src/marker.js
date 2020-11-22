import React from 'react';
import {Marker } from '@react-google-maps/api';

class MyMarkers extends React.Component {
    constructor(props){
        super(props);
        
    }
    //35.9135412,-79.0552325
    getAlleys = () => {
        //function to get the alleys, return array of long/lat objs
        let list = [{
            _id:0,
            lat: 35.9079,
            lng: -79.0541
          }, { _id:1,
              lat: 35.9135412,
            lng: -79.0552325}]
        return list;
    }

    mapAlleys = (arr) => {
        let list = arr.map((alley) =>{
            let position = {
                lat: alley.lat,
                lng: alley.lng
            }
            return(<Marker key={alley._id} position = {position}/>

            )
        })
        return list;
    }

    render() {
        return this.mapAlleys(this.getAlleys())
    }
}
export default MyMarkers;