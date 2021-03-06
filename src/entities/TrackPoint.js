class TrackPoint {

    /**
     * 
     * @param {Number} latitude 
     * @param {Number} longitude 
     * @param {String} name 
     * @param {Number} elevation 
     */
    constructor(latitude, longitude, elevation) {

        this.latitude = latitude;
        this.longitude = longitude;

        if(!elevation){
            this.elevation = "";
        } else {
            this.elevation = elevation;
        }
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

    setElevation(num) {
        this.elevation = num;
    }

    toJson() {
        return {
            "latitude": this.latitude,
            "longitude": this.longitude,
            "elevation": this.elevation,
        };
    }
}

export default TrackPoint;