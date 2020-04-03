class RouteElement {
    constructor(latitude, longitude, name, elevation) {

        this.latitude = latitude;
        this.longitude = longitude;
        this.elevation = elevation;

        if (name === undefined) {
            this.name = "";
        } else {
            this.name = name;
        }

    }

    getName() {
        return this.name;
    }

    getLatitude() {
        return this.latitude;
    }

    getElevation() {
        return this.elevation;
    }

    getLongitude() {
        return this.longitude;
    }

    toJsonLatLng() {
        return {
            "latitude": this.latitude,
            "longitude": this.longitude,
        };
    }
}

export default RouteElement;