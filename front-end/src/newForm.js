import React from 'react'
import {Button} from 'react-bulma-components'; 
class NewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            text:''
        }
    }
    handleNewSend =() => {
        console.log("wait for it")
    }
    handleNewAlleyText =(e) => {
        this.setState({text: e.target.value})
    }

    render() {
        let searchBar = <div className="field" id="nf">
                            <div className="control">
                                <input className="input" type="text" value={this.state.text} onChange={this.handleNewAlleyText}></input>
                                <Button id="post-button"   onClick={this.handleNewSend}>Post!</Button>
                            </div>
                        </div>
        return(<div>
             {searchBar}
        </div>)
    }
}
export default NewForm 