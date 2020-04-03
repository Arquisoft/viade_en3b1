import React, { Component } from 'react';
import { Map, TileLayer, Polyline } from 'react-leaflet';

export default class MapSnapshot extends Component {
  points = this.props.route.getRouteElements().map((point) => (
    [point.getLatitude(), point.getLongitude()]
  ));

  setPopup = () => { }

  render() {
    return (
      <Map bounds={this.points} doubleClickZoom={false} dragging={false} keyboard={false}
        scrollWheelZoom={false} tap={false} touchZoom={false} zoomControl={false} boxZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline positions={this.points} color='blue' />
        ))}
      </Map>
    );
  }
}