import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

export default class DetailsMap extends Component {
  points = this.props.route.getRouteElements().map(point => (
    [point.getLatitude(), point.getLongitude()]
  ));

  setPopup = () => { }

  render() {
    return (
      <Map id="map" bounds={this.points} zoom={16} height={5}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline positions={this.points} color='blue' />

        {this.props.route.getRouteElements().map((point) => (
          <Marker position={[point.getLatitude(), point.getLongitude()]}>
            <Popup>
              <p>{point.getName()}</p>
              <p>Latitude: {point.getLatitude()}</p>
              <p>Longitude: {point.getLongitude()}</p>
              <p>Elevation: {point.getElevation()}</p>
            </Popup>
          </Marker>
        ))}
      </Map>
    )
  }
}