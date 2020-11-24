import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'react-bulma-components/dist/react-bulma-components.min.css'
import {Button, Form} from 'react-bulma-components'; 
import { withRouter } from "react-router-dom";
   
// import {Input} from 'react-bulma-components/lib/components/form/components/input';
class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTemp: "",
            dropValue:'',
        };
        
    }
    

    handleLogout = (user) => {
        
    }

    handleSearchBar = (event) => {
        this.setState({searchTemp: event.target.value});
    }

    handleSearchSend = (event) => {
        alert("TODO: " + this.state.searchTemp);
    }
    //Happening after second click?

    handleDropDown = (event) => {
        console.log(event);
        this.setState({dropValue: event.value});
        console.log(this.state.dropValue);
    }

    
    render() {

        let options = [{value:"", label:"Our Picks"},{value:'best', label:'Best Alleyways'}, {value:'worst', label:'Worst Alleyways'}, {value:'contr', label:'Controversial Alleyways'}];
        // let dropdown = <Dropdown id="dropdown" options = {options} onChange={this.handleDropDown} value={options[0].label} placeholder="Select an option"/>

        let logoutButton = <a className="button is-dark" href='http://alleyway.herokuapp.com/users/login'>Log out</a>

        let searchBar = 
                        <div className="level">
                            <div className="level-left">
                                {logoutButton}
                            </div>

                            <div className="level-right">
                                <div className="field has-addons">
                                    <p className="control is-expanded">
                                        <input className="input" type="text" value={this.state.searchTemp} onChange={this.handleSearchBar} placeholder="Search"></input>
                                    </p>
                                    <p className="control">
                                        <Button  onClick={this.handleSearchSend}>Search</Button>
                                    </p>
                                </div>
                            </div>
                        </div>
        
        //afix to top of page
        //colors, better buttons, better search ----> STYLE
        //Drop downs
        return (
            <section id="head" className="hero top fixed ">
            <div className="hero-body">
                <div className="container">
                    {searchBar}
                     
                </div>
                
            </div>
            </section>
        );
    }
}

export default HeaderComponent;