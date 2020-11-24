import Axios from 'axios';
import React from 'react'
import {Button} from 'react-bulma-components'; 
class NewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            text:'',
            name:'',
            rate: 0,
        }
    }

    handleNewSend = async() => {
        try {
            let longlat = global.position;
            let response = await Axios({
                method:'post',
                url: 'https://alleyway.herokuapp.com/alleyways',
                data: {
                    name: this.state.name,
                    review: this.state.text,
                    latitude: longlat.lat,
                    longitude: longlat.lng,
                    rating: this.state.rate
                }
            })
            this.props.getReviews()
        } catch (err) {
            
        }
        
    }
    handleNewAlleyText =(e) => {
        this.setState({text: e.target.value})
    }
    handleNewAlleyName =(e) => {
        this.setState({name: e.target.value})
    }
    handleNewAlleyRate = (e) => {
        let rate =e.target.value
        if(rate > 5) {
            rate=5;
        }

        if (rate < 0) {
            rate=0;
        }
       
        this.setState({rate: rate})
    }

    render() {
        
        let searchBar = <div className="field" id="nf">
                            <div className="control">
                                <input className="input" type="text" value={this.state.name} onChange={this.handleNewAlleyName} placeholder="Name"></input>
                                <input className="input" type="text" value={this.state.text} onChange={this.handleNewAlleyText} placeholder="Review"></input>
                                <input className="input" type="number" value={this.state.rate} onChange={this.handleNewAlleyRate} placeholder="0"></input>
                                <Button id="post-button"   onClick={this.handleNewSend}>Post!</Button>
                            </div>
                        </div>
        return(<div>
             {searchBar}
        </div>)
    }
}
export default NewForm 