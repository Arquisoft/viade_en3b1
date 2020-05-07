import { parseGpx } from "viade-gpx-parse";
import Route from "../entities/Route";
import TrackPoint from "../entities/TrackPoint";

export function parseGpxToRoutes(gpxString, callback) {

    try {
        parseGpx(gpxString, ((error, gpxData) => {
            var routes = [];
            var tracks = gpxData.tracks;
    
            tracks.forEach((track) => {
                let route = parseRouteTrack(track);
                routes.push(route);
            });
    
            return callback(routes);
        }));
    } catch(TypeError) {
        return [];
    }
    
}

function parseRouteTrack(track) {
    var trackpoints = parseTrackpoints(track);

    var name = track.name;
    var description = track.description;

    let newRoute = new Route(name, description, trackpoints, null, null, null, null, null);
    return newRoute;
}

function parseTrackpoints(track) {
    var pointsList = [];
    track.segments.forEach((segment) => {
        segment.forEach((trackPoint) => {
            pointsList.push(new TrackPoint(trackPoint.lat, trackPoint.lon, parseInt( trackPoint.elevation, 10 )));
        });
    });
    return pointsList;
}
