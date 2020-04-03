import Route from '../entities/Route.js';
import RouteElement from '../entities/RouteElement.js';

class ParserJsonLdToRoute {
    
    parse(file){    
        var route = JSON.parse( file );

        var name = route.name;
        var description = route.description;
        // var date = route.date;
        var points = route.points;
        var comments = [];
        var media = [];
        
        let routeElements = this.parsePoints(points);

        
        return new Route(name, description, routeElements, comments, media);
    }

    parsePoints(points) {
        let routeElements = [];
        for(var i = 0; i < points.length; i++ ){
            routeElements.push(new RouteElement(points[i].latitude, points[i].longitude));
        }
        return routeElements;
    }
}

export default ParserJsonLdToRoute;