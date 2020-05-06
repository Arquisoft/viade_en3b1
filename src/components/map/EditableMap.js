import React, { Component } from 'react';
import { Map, Polyline, TileLayer, Marker } from 'react-leaflet';
import ReactLeafletSearch from 'react-leaflet-search';

export class EditableMap extends Component {

    constructor() {
        super();
        this.state = {
            points: []
        };
        this.firstPoint = true;

    }

    componentDidMount() {
        this.setState({ points: [] });
    }

    addPoint = (e) => {
        this.state.points.push(e.latlng);
        const { points } = this.state;
        this.setState({ points: points.slice() });
        // this.state.points = points;

        if (this.firstPoint === true) {
            this.props.openNotif("You can move a point by dragging it and delete it just clicking on it.");
            this.firstPoint = false;
        }
    }

    updatePoint = (event) => {
        var id = event.target.options.marker_index;
        var position = event.target.getLatLng();
        this.updatePointById(id, position);
    }

    updatePointById = (id, position) => {
        const { points } = this.state;

        points[id] = position;
        this.setState({ points: points.slice() });
    }

    removePoint = (event) => {
        var id = event.target.options.marker_index;
        this.removePointById(id);
    }

    removePointById = (id) => {
        const { points } = this.state;
        points.splice(id, 1);
        this.setState({ points: points.slice() });
    }

    getTrackPoints() {
        return this.state.points.slice();
    }

    render() {
        const position = [43.3619145, -5.8493887];
        const { points } = this.state;

        return (
            <React.Fragment>
                <Map
                    data-testid="test-map-leaflet"
                    id="test-map-leaflet"
                    center={position}
                    zoom={12}
                    style={{ width: "34.5rem", height: "20rem" }}
                    onClick={this.addPoint}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />

                    <Polyline positions={points} color='#09012f' />

                    {points.map((position, index) =>
                        <Marker
                            key={index}
                            marker_index={index}
                            position={position}
                            draggable={true}
                            ondrag={this.updatePoint}
                            onclick={this.removePoint}
                        >
                        </Marker>
                    )}

                    <ReactLeafletSearch
                        position="topleft"
                        provider="OpenStreetMap"
                        // providerOptions={{ region: "gb" }}
                    />
                </Map>
            </React.Fragment>
        );
    }
}

export default EditableMap;
