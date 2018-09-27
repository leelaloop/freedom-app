import React, { Component } from 'react';
import { Popup } from 'react-leaflet';

import './LocationPopup.css';

class LocationPopup extends Component {
    render() {
        return (
            <Popup>
                <p>{this.props.location.name}</p>
                <p>{this.props.location.latitude}</p>
                <p>{this.props.location.longitude}</p>
            </Popup>
        )
    }
}

export default LocationPopup;