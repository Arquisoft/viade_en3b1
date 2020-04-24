import Route from '../entities/Route.js';
import TrackPoint from '../entities/TrackPoint.js';

class ParserJsonLdToRoute {
    
    parse(file){   

        var route = JSON.parse( file );

        var name = route.name;
        var id = route.id;
        // var date = route.date;
        var description = route.description;

        var points = route.points;
        var comments = [];
        var media = [];
        
        let trackPoints = this.parsePoints(points);

        let finalroute = new Route(name, description, trackPoints, comments, media, null, id);
        
        // DATE null now.
        return finalroute;
    }

    parsePoints(points) {
        let trackPoints = [];
        for(var i = 0; i < points.length; i++ ){
            trackPoints.push(new TrackPoint(points[i].latitude, points[i].longitude, points[i].elevation));
        }
        return trackPoints;
    }
}

export default ParserJsonLdToRoute;