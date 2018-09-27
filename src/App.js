import React, { Component } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import firebase from './firebase';

import './App.css';

import SearchBar from './SearchBar';
import AddLocationForm from './AddLocationForm';
import LocationPopup from './LocationPopup';

class App extends Component {
  state = {
    lat: 37.7755499,
    lng: -122.414423,
    zoom: 13,
    markers: [],
  }

  constructor() {
    super()

    this.createMarkerForLocation = this.createMarkerForLocation.bind(this);
    this.getMarkers = this.getMarkers.bind(this);
  }

  componentDidMount() {
    this.getMarkers();
  }

  createMarkerForLocation(location) {
    const position = [location.latitude, location.longitude]

    return (
      <Marker position={position}>
        <LocationPopup location={location}/>
      </Marker>
    )
  }

  getMarkers() {
    // Dummy Data for testing
    //
    // const Garfield = {
    //   name: "Garfield Square Park",
    //   latitude: "37.749755",
    //   longitude: "-122.411972",
    // }
    // const MoB = {
    //   name: "Manor of Being",
    //   latitude: "37.748830",
    //   longitude: "-122.408930",
    // }
    // const Illuminatum = {
    //   name: "Illuminatum",
    //   latitude: "37.752898",
    //   longitude: "-122.409593",
    // }

    // const garfieldMarker = this.createMarkerForLocation(Garfield);
    // const mobMarker = this.createMarkerForLocation(MoB);
    // const illMarker = this.createMarkerForLocation(Illuminatum);

    // var markers = [garfieldMarker, mobMarker, illMarker];

    // this.setState({
    //   markers: markers,
    // });

    var markers = [];

    firebase.firestore().collection("locations").get().then((snapshot) => {
      snapshot.forEach((doc) => {
        
        markers.push(this.createMarkerForLocation(doc.data()))
      });

      this.setState({
        markers: markers,
      });
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
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

          { this.state.markers }

        </Map>
      </div>
    )
  }
}

export default App;
