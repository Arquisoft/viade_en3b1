import { v4 as uuid } from "uuid";
import RouteElement from "./RouteElement";

class Route {

    /**
     * Constructor for a new Route. 
     * An id will be automatically generated (uuid v4).
     * TotalDistance will also be automatically generated.
     * 
     * RouteElements have name, latitude, longitude and elevation.
     * 
     * @param {String} name Name of the route.
     * @param {Date} date Date of the route.
     * @param {String} description Description of the route.
     * @param {Array} routeElements List of RouteElement objects, which are the trackpoints.
     * @param {Array} comments List of comments
     * @param {Array<String>} media List of urls of media (on the POD)
     */
    constructor(name, description, routeElements, comments, media, date) {
        this.id = uuid().toString();
        this.name = name;
        this.date = date;
        this.description = description;

        this.media = media;
        this.totalDistance = null;

        if (comments === null) {
            this.comments = [];
        } else {
            this.comments = comments;
        }

        if (routeElements[0] instanceof RouteElement) {
            this.routeElements = routeElements;
        } else {
            this.routeElements = generateRouteElements(routeElements);
        }
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getDate() {
        return this.date;
    }

    getTime() {
        return this.time;
    }

    getDescription() {
        return this.description;
    }

    getRouteElements() {
        return this.routeElements;
    }

    getTotalDistance() {
        var total = 0;
        var aux = 0;

        for (let i = 1; i < this.routeElements.length; i++) {
            aux = this.routeElements[i].getLatitude() - this.routeElements[i - 1].getLatitude();
            total += this.addDistance(aux);
            aux = this.routeElements[i].getLongitude() - this.routeElements[i - 1].getLongitude();
            total += this.addDistance(aux);
            aux = this.routeElements[i].getElevation() - this.routeElements[i - 1].getElevation();
            total += this.addDistance(aux);
        }

        return total;
    }

    addDistance(aux) {
        if (aux < 0) {
            return -aux;
        } else {
            return aux;
        }
    }

    getComments() {
        return this.comments;
    }

    getMedia() {
        return this.media;
    }

    addMedia(media) {
        this.media.push(media);
    }

    addRouteElement(routeElement) {
        this.routeElements.push(routeElement);
    }

    getJsonLD() {
        let routePointsJson = [];
        this.routeElements.forEach((p) => routePointsJson.push(p.toJsonLatLng()));
        return JSON.stringify(
            {
                "@context": {
                    "@version": 1.1,
                    "comments": {
                        "@container": "@list",
                        "@id": "viade:comments"
                    },
                    "description": {
                        "@id": "schema:description",
                        "@type": "xs:string"
                    },
                    "media": {
                        "@container": "@list",
                        "@id": "viade:media"
                    },
                    "name": {
                        "@id": "schema:name",
                        "@type": "xs:string"
                    },
                    "points": {
                        "@container": "@list",
                        "@id": "viade:points"
                    },
                    "latitude": {
                        "@id": "schema:latitude",
                        "@type": "xs:double"
                    },
                    "longitude": {
                        "@id": "schema:longitude",
                        "@type": "xs:double"
                    },
                    "elevation": {
                        "@id": "schema:elevation",
                        "@type": "xsd:double"
                    },
                    "author": {
                        "@id": "schema:author",
                        "@type": "@id"
                    },
                    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
                    "schema": "http://schema.org/",
                    "viade": "http://arquisoft.github.io/viadeSpec/",
                    "xsd": "http://www.w3.org/2001/XMLSchema#"
                },
                "name": this.name,
                "author": this.author,
                "description": this.description,
                "comments": this.comments,
                "media": this.media,
                "points": routePointsJson
            }
        );
    }

}

/**
 * Method that receives a list of points and returns
 * a list of RouteElements
 * @param {Array} points List of points containing name, latitude, longitude, elevation. 
 */
function generateRouteElements(points) {
    let routeElements = [];
    points.forEach((p) => routeElements.push(new RouteElement(p.lat, p.lng)));
    return routeElements;
}

export default Route;