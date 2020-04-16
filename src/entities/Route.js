import { v4 as uuid } from "uuid";
import Media from "./Media";
import TrackPoint from "./TrackPoint";

class Route {

    /**
     * Constructor for a new Route. 
     * An id will be automatically generated (uuid v4).
     * 
     * @param {String} name Name of the route.
     * @param {String} description Description of the route.
     * @param {Array} trackPoints List of trackpoints.
     * @param {Array} comments List of comments
     * @param {Array<Object>} media List of objects of media
     * @param {Date} date Date of the route.
     */
    constructor(name, description, trackPoints, comments, media, date, id) {
        this.name = name;
        this.date = date;
        this.description = description;

        this.id = null;
        this.totalDistance = null;
        this.media = null;
        this.trackPoints = null;
        this.comments = null;

        this.setID(id);
        this.setMedia(media);
        this.setTrackPoints(trackPoints);
        this.setComments(comments);
    }

    setID(id) {
        if(id === null) {
            this.id = uuid().toString();
        } else {
            this.id = id;
        }
    }

    setMedia(media) {
        if(media === null){
            this.media = [];
            return;
        }
        if(media[0] instanceof Media) {
            this.media = media;
            return;
        }
        let finalMedia = [];
        media.forEach((m) => {
            finalMedia.push(new Media(m, m.name, null));
        });
        this.media = finalMedia;
    }

    setTrackPoints(points) {
        if(points === null){
            this.trackPoints = [];
            return;
        }
        if(points[0] instanceof TrackPoint) {
            this.trackPoints = points;
            return;
        }
        let finalPoints = [];
        points.forEach((p) => {
            finalPoints.push(new TrackPoint(p.lat, p.lng));
        });
        this.trackPoints = finalPoints;
    }

    setComments(comments) {
        // CHANGE WHEN COMMENTS FEATURE
        if (comments === null) {
            this.comments = [];
        } else {
            this.comments = comments;
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

    getDescription() {
        return this.description;
    }

    getTrackPoints() {
        return this.trackPoints;
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

    deleteMedia(media) {
        this.media.splice(this.media.indexOf(media), 1);
    }

    toJsonLD() {
        let routePointsJson = [];
        let routeMediaJson = [];

        this.trackPoints.forEach((p) => routePointsJson.push(p.toJson()));
        this.media.forEach((m) => routeMediaJson.push(m.toJson()));

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
                    "date": {
                        "@id": "schema:DateTime",
                        "@type": "xsd:dateTime"
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
                "media": routeMediaJson,
                "points": routePointsJson
            }
        );
    }

}

export default Route;