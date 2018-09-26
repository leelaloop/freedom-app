import React, { Component } from 'react';

import './AddLocationForm.css';

class AddLocationForm extends Component {
    constructor() {
        super();
        this.state = {
            showForm: false,
            spaceName: '',
        };
    
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            showForm: !state.showForm
        }));
    }

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    render() {
        return (
            <div id='formArea'>
                {/* {
                    !this.state.showForm ?
                    
                    <button onClick={this.handleClick}> Button </button> 
                    
                    :
                    
                    <button onClick={this.handleClick}> Form </button>
                } */}
                <form>
                    <input type="text" name="spaceName" placeholder="Name your space..." onChange={this.handleChange} value={this.state.spaceName} />
                    <button>Add Space</button>
                </form>
            </div>
        )
    }
}

export default AddLocationForm;