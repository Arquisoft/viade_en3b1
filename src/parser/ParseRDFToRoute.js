import Route from '../entities/Route.js';
import Media from '../entities/Media.js';
import Comment from '../entities/Comment.js';
import RouteElement from '../entities/RouteElement.js';
import { fromRDF } from 'jsonld';
//import {LoadFromPod} from 'LoadFromPod.js';

class ParseRDFToRoute{
    
    parse(file){    /*   
        let loadFromPod = new LoadFromPod();
        
        this.file=loadFromPod.loadFile(url);
        */
        var jsonRoute = JSON.parse( fromRDF(file) );

        var name = "";
        var description = "";
        var date = "";
        var time = "";
        var routeElements = [];
        var comments = [];
        var media = [];

        name = jsonRoute.getString("Name");
        description = jsonRoute.getString("Description");
        date = jsonRoute.getString("Date");
        time = jsonRoute.getString("Time");

        var jsonArray = jsonRoute.getJSONArray("elements");
        var element = new RouteElement("", 0, 0, 0);

        jsonArray.forEach((arrayElement) => {
            element.name = arrayElement.getString("name");
            element.elevation = arrayElement.getString("elevation");
            element.londitude = arrayElement.getString("longitude");
            element.latitude = arrayElement.getString("latitude");
            routeElements.push(element);
        });

        jsonArray = jsonRoute.getJSONArray("media");
        element = new Media("");

        jsonArray.forEach((arrayElement) => {
            element.url = arrayElement.getString("url");
            media.push(element);
        });

        jsonArray = jsonRoute.getJSONArray("comments");
        element = new Comment("");

        jsonArray.forEach((arrayElement) => {
            element.text = arrayElement.getString("text");
            comments.push(element);
        });

        
        return new Route(name, date, time, description, routeElements, comments, media);

    }

}

export default ParseRDFToRoute;