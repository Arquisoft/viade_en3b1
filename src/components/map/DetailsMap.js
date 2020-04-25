import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

export default class DetailsMap extends Component {

  constructor(props) {
    super(props);
    this.points = this.props.route.getTrackPoints().map((point) => (
      [point.getLatitude(), point.getLongitude()]
    ));

    this.list = this.props.route.getTrackPoints();
    this.markers = [this.list[0], this.list[this.list.length-1]];
  }

  render() {
    return (
      <Map id="mapdetails" bounds={this.points} zoom={16} height={5}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline positions={this.points} color='blue' />

        {this.markers.map((point) => (
          <Marker 
            key={point.getLatitude()+','+point.getLongitude()} 
            position={[point.getLatitude(), point.getLongitude()]}>
            <Popup>
              <p>Latitude: {point.getLatitude()}</p>
              <p>Longitude: {point.getLongitude()}</p>
              <p>Elevation: {point.getElevation()}</p>
            </Popup>
          </Marker>
        ))}
      </Map>
    );
  }
}