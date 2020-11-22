import React from 'react';
import './data.json'
import alleyjpg from './alley.jpg' 
// const google = require()
// import {google} from 'google-maps';      
import MyMap from './maps.js'
//// AIzaSyCoUHqy6ISPhcFkuvW4PHE4zl09NnFROZ8
class BodyComponent extends React.Component {
    constructor(props) {
        super(props);

    }
    getReviews = () => {
        return [{"_id": "0",
        "name": "Alley 1",
    "location":"something",
    "rating": 1,
    "review":"smells ass",
    "image": alleyjpg,
    "__v":0},
    {"_id": "1",
        "name": "test",
    "location":"something",
    "rating": 1,
    "review":"smells ass",
    "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.wikihow.com%2Fimages%2Fthumb%2F5%2F59%2FEmbed-Pictures-Step-2-Version-3.jpg%2Fv4-460px-Embed-Pictures-Step-2-Version-3.jpg&imgrefurl=https%3A%2F%2Fwww.wikihow.com%2FEmbed-Pictures&tbnid=qv8zgiUEPleDLM&vet=12ahUKEwjRuIXZyJTtAhXCOFMKHeMxBrQQMygAegUIARCkAQ..i&docid=iWWfUbF7RFXiGM&w=460&h=347&q=embed%20image&ved=2ahUKEwjRuIXZyJTtAhXCOFMKHeMxBrQQMygAegUIARCkAQ",
    "__v":0}]
    }

    reviewObjs = (arr) => {
        let list = arr.map((alley)=> {
            
            return(<div id={alley._id} key={alley._id} className="review">
                   <div className="columns">
                       <div className="column">
                        <img src={alley.image}/>
                       </div>
                       <div className = "column">
                       <h3>{alley.name}</h3>
                        <p>{alley.review}</p>
                       </div>
                   
                   </div>
                   </div>)
        })
        
        return list;
    }   

    // initMapScript = () => {
    //     return ()
    // }
    
    

    getStructure = () => {
        return( <section>
            <div className="columns review-body">
                <div className="column is-two-fifths" id="reviews">
                    {this.reviewObjs(this.getReviews())}
                </div>
                <div className="column" id="map">
                    {/* <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCoUHqy6ISPhcFkuvW4PHE4zl09NnFROZ8&callback=initMap'>
                    </script> */}
                    <MyMap></MyMap>
                </div>
            </div>
        </section>);
    }

    // initMap() {
    //     let map = new google.maps.Map(document.getElementById("map"), {
    //       center: { lat: -34.397, lng: 150.644 },   
    //       zoom: 8,
    //     });
    // }

    render () {
        return(
            <div>
                {this.getStructure()}
            </div>
        );
    }
}
export default BodyComponent