import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import './App.css';

import SearchBar from './SearchBar';
import AddLocationForm from './AddLocationForm';

class App extends Component {
  state = {
    lat: 37.7755499,
    lng: -122.414423,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <div className="container">
        <SearchBar/>
        <AddLocationForm/>

        <Map style={{height:'100vh'}} center={position} zoom={this.state.zoom}>
          
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Us
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}

export default App;
