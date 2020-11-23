import React from 'react';
import {Marker } from '@react-google-maps/api';

class MyMarkers extends React.Component {
    constructor(props){
        super(props);
        
    }
    //35.9135412,-79.0552325
    getAlleys = () => {
        //function to get the alleys, return array of long/lat objs
        if(!global.locs) {
            return;
        }
        let list = global.locs.map((alley)=>{
            return alley.lat !=null
        })
        console.log(global.locs)
        return list;
    }
    clickHandle = (e) => {
        let lat = e.latLng.lat()
        // let lng = e.latLng.lng()
        // 913666116186704
        for(let i = 0;i < global.locs.length; i++) {
            if(Math.abs(lat- global.locs[i].lat) < .000000000000001) {
                console.log(global.locs[i]._id)
                console.log(lat- global.locs[i].lat)
                console.log(document.getElementById(global.locs[i]._id).getAttribute('class'))
                if (document.getElementById(global.locs[i]._id).getAttribute('class') ==='highlighted review'){
                    document.getElementById(global.locs[i]._id).setAttribute('class', ' review')
                } else {
                    let list=document.getElementsByClassName("highlighted review")
                    for(let j=0; j<list.length;j++) {
                        list[j].setAttribute('class', ' review')
                    }
                    // console.log(document.getElementsByClassName("highlighted review"))
                    
                    document.getElementById(global.locs[i]._id).setAttribute('class', 'highlighted review')
                }
            }
        }
    }

    mapAlleys = (arr) => {
        if(!global.locs) {
            return;
        }
        let list = global.locs.map((alley) =>{
            if(!alley.lat) {
                console.log("yep")
                return
            }
            console.log(alley);
            let position = {
                lat: parseFloat(alley.lat),
                lng: parseFloat(alley.lng)
            }
            return(<Marker alt="test"key={'d'+alley._id} position = {position} onClick={this.clickHandle}/>

            )
        })
        
        return list? list:null;
    }

    render() {
        return this.mapAlleys(this.getAlleys())? this.mapAlleys(this.getAlleys()): null
    }
}
export default MyMarkers;