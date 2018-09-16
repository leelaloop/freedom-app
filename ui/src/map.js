// eslint-disable-next-line

import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { GoogleMapReact, GoogleApiWrapper, Map, Marker, InfoWindow} from 'google-maps-react';

export class MapContainer extends React.Component {
  render () {
    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick} name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    //map
    //marker
    //toggle buttons: private, network, public, user, location, object listings
    //default: selected private, network, public location listings
    //search bar
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyCYTGmxqoqwLdVwZK3z3wLt5t85QLPpnHs")
})(MapContainer)

/*
render() {
    return (
      <div className='google-map'>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 40.7473310 }
            lng={ -73.8517440 }
            text={ 'Where's Waldo?' }
          />
        </GoogleMapReact>
      </div>
    )
  }
}
*/