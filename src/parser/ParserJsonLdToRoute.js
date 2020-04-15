import Route from '../entities/Route.js';
import TrackPoint from '../entities/TrackPoint.js';

class ParserJsonLdToRoute {
    
    parse(file){    
        var route = JSON.parse( file );

        var name = route.name;
        var description = route.description;
        // var date = route.date;
        var points = route.points;
        var comments = [];
        var media = [];
        
        let trackPoints = this.parsePoints(points);

        return new Route(name, description, trackPoints, comments, media);
    }

    parsePoints(points) {
        let trackPoints = [];
        for(var i = 0; i < points.length; i++ ){
            trackPoints.push(new TrackPoint(points[i].latitude, points[i].longitude));
        }
        return trackPoints;
    }
}

export default ParserJsonLdToRoute;