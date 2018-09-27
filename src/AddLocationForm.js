import React, { Component } from 'react';
import firebase from "./firebase.js"

import './AddLocationForm.css';

class AddLocationForm extends Component {
    constructor() {
        super();
        this.state = {
            showForm: false,
            name: '',
            latitude: '',
            longitude: '',
        };
    
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick() {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        firebase.firestore().collection("locations").add({
            name: this.state.name,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        }); 
        
        this.setState({
            showForm: false,
            name: '',
            latitude: '',
            longitude: '',
        })
    }

    render() {
        return (
            <div id='formArea'>
                {
                    !this.state.showForm ?
                    
                    <button onClick={this.handleClick}> Add Location </button> 
                    
                    :
                    
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name your space..." 
                            onChange={this.handleChange} 
                            value={this.state.name} 
                        />
                        <input 
                            type="text" 
                            name="latitude" 
                            placeholder="Latitude" 
                            onChange={this.handleChange} 
                            value={this.state.latitude} 
                        />
                        <input 
                            type="text" 
                            name="longitude" 
                            placeholder="Longitude" 
                            onChange={this.handleChange} 
                            value={this.state.longitude} 
                        />
                        <button>Add Space</button>
                    </form>
                }
            </div>
        )
    }
}

export default AddLocationForm;