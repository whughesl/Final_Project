import React from 'react';
import './data.json'
import alleyjpg from './alley.jpg' 

import Overlay from './nAO2'      
import MyMap from './maps.js'
import MyNewMap from './newAlleyOverlay'
import newForm from './newForm'
import NewForm from './newForm';
// import getPosititon from './maps'
//// AIzaSyCoUHqy6ISPhcFkuvW4PHE4zl09NnFROZ8
class BodyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm:false
        }
        this.mymap =<div onClick={this.getPosition}><MyNewMap ></MyNewMap></div>
        this.OverlayForm = <NewForm/>
    }
    getPosition =() => {
        this.setState({showForm: !this.state.showForm})
        console.log(global.position);
    }

    getStars = (num) => {
        let left = num % 1;
        let whole = num-left
        let rate =''
        switch(whole) {
            // case 0: return '☆☆☆☆☆'
            case 5: rate+= '★';     
            case 4: rate+= '★';
            case 3: rate+= '★';
            case 2: rate+= '★';
            case 1: rate+= '★';
        }
        if (left >= .75) {
            rate+= '✭';
        } else if (left >= .25) {
            rate += '✬'
        }
        while(rate.length < 5) {
            rate += '☆'
        }
        return rate;
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
    "rating": 2.5,
    "review":"smells ass",
    "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.wikihow.com%2Fimages%2Fthumb%2F5%2F59%2FEmbed-Pictures-Step-2-Version-3.jpg%2Fv4-460px-Embed-Pictures-Step-2-Version-3.jpg&imgrefurl=https%3A%2F%2Fwww.wikihow.com%2FEmbed-Pictures&tbnid=qv8zgiUEPleDLM&vet=12ahUKEwjRuIXZyJTtAhXCOFMKHeMxBrQQMygAegUIARCkAQ..i&docid=iWWfUbF7RFXiGM&w=460&h=347&q=embed%20image&ved=2ahUKEwjRuIXZyJTtAhXCOFMKHeMxBrQQMygAegUIARCkAQ",
    "__v":0},{"_id": "2",
    "name": "Alley 1",
"location":"something",
"rating": 3.4,
"review":"smells ass",
"image": alleyjpg,
"__v":0},{"_id": "3",
"name": "Alley 1",
"location":"something",
"rating": 0.75,
"review":"smells ass",
"image": alleyjpg,
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
                        <p className="review-text">{alley.review}</p>
                        <p>{this.getStars(alley.rating)}:{alley.rating}</p>
                       </div>
                   
                   </div>
                   </div>)
        })
        
        return list;
    }   

    // initMapScript = () => {
    //     return ()
    // }
    showForm = (e) => {
        // console.log(this.getMapState())
        this.setState({showForm: !this.state.showForm})
    }
    renderForm = () => {
        return this.state.showForm? this.OverlayForm: null
    } 
    getPosititon = (position) => {
        console.log(position)
    }
    

    getStructure = () => {
        
        return( <section id="map-review">
            
            <div className="columns page-body">
                
                <div className="column is-two-fifths review-body" id="reviews" >
                    {this.reviewObjs(this.getReviews())}
                </div>
                <div className="column" id="map" onClick={(e)=>this.showForm(e)}>
                    {this.mymap}
                    
                </div>
            </div>
            {/* {this.state.showForm ? this.renderForm() : null} */}
            
        </section>);
    }

    

    render () {
        return(
            <div className="body-comp">
                {this.getStructure()}
                {this.renderForm()}
            </div>
        );
    }
}
export default BodyComponent