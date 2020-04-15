class TrackPoint {

    /**
     * 
     * @param {Number} latitude 
     * @param {Number} longitude 
     * @param {String} name 
     * @param {Number} elevation 
     */
    constructor(latitude, longitude, name, elevation) {

        this.latitude = latitude;
        this.longitude = longitude;

        if (name === null) {
            this.name = "";
        } else {
            this.name = name;
        }

        if(elevation === null){
            this.elevation = "";
        } else {
            this.elevation = elevation;
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

    toJson() {
        return {
            "latitude": this.latitude,
            "longitude": this.longitude,
        };
    }
}

export default TrackPoint;