import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'react-bulma-components/dist/react-bulma-components.min.css'
import {Button, Form} from 'react-bulma-components'; 
   
// import {Input} from 'react-bulma-components/lib/components/form/components/input';
class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTemp: "test",
            dropValue:'',
        };
        
    }
    

    handleClick = () => {
        alert("Unimplemented");
    }
    handleSignUp = () => {
        return(<Button>Submit</Button>)
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
        let dropdown = <Dropdown id="dropdown" options = {options} onChange={this.handleDropDown} value={options[0].label} placeholder="Select an option"/>

        let loginButton = <Button className="is-dark" onClick={this.handleClick}>Login</Button>
        let signUpButton = <Button  onClick={this.handleSignUp}>Sign Up</Button>

        let searchBar = <div className="field">
                            <div className="control">
                                <input className="input" type="text" value={this.state.searchTemp} onChange={this.handleSearchBar}></input>
                                <Button  onClick={this.handleSearchSend}>Search</Button>
                                {loginButton}
                                {signUpButton}
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
                    {dropdown}  
                </div>
                
            </div>
            </section>
        );
    }
}

export default HeaderComponent;