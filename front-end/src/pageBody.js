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
import axios from 'axios'
class BodyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm:true,
            reviews:null,
        }
        this.mymap =<div onClick={this.getPosition}><MyNewMap ></MyNewMap></div>
        this.OverlayForm = <NewForm getReviews={this.getReviews}/> // passes the function along
        this.getReviews();
    }
    reviews=[]
    getPosition =() => {
        this.setState({showForm: true})
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
        return rate + ':';
    }
    getReviews = async () => {
        let list =[]
        let response = await axios({
            method: 'get',
            url: 'https://alleyway.herokuapp.com/alleyways'
        }).then((response) => list[0]=response);

        this.reviews=list[0].data;
        global.locs = list[0].data.map((data)=>{
            return {_id:data._id, lng:data.longitude,lat:data.latitude}
        })
        console.log(global.locs)
        console.log(this.reviews)
        
        this.setState({reviews: list[0]})
        console.log(this.state.reviews)

        return this.reviews;
    }

    reviewObjs =  (arr) => {
        let list = arr.map((alley)=> {
            
            return(<div id={alley._id} key={alley._id} className="review">
                   <div className="columns">
                       <div className="column">
                        <img src={alley.image}/>
                       </div>
                       <div className = "column">
                       <h3>{alley.name}</h3>
                        <p className="review-text">{alley.review}</p>
                        <p>{alley.rating? this.getStars(alley.rating): null}{alley.rating}</p>
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
        this.setState({showForm: true})
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
                    {/* {this.reviewObjs(this.getReviews())} */}
                    {this.reviewObjs(this.reviews)}
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
                <div id="filler">{this.renderForm()}</div>
            </div>
        );
    }
}
export default BodyComponent