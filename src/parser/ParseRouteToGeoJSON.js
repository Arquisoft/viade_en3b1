class ParseRouteToGeoJSON{
    constructor(route){
        this.route=route;
    }

    parse(){

        var strData = "{<ul><li>type: Route,</li>";
        strData += "<li>name: " + this.route.name + ",</li>";
    
        strData += "<li>trackpoints: [";
        for(var trackpoint in this.route.routeElements){
            strData += "{<li>type: TrackPoint,</li>";
            strData += "<li>properties: {"
            strData += "<li>name: " + trackpoint.name + "</li>},</li>";
            strData += "<li>geometry: {";
            strData += "<li>type: Point,<li>";
            strData += "<li>elevation: " + trackpoint.elevation + ",</li>";
            strData += "<li>coordinates: [" + trackpoint.longitude + "," + trackpoint.latitude + "]}";
            if(trackpoint !== this.route.routeElements[this.route.routeElements.length-1]){
                strData += ",";
            }
        }

        strData += "</ul>";

        strData += "]</li></ul>}";  
          
        return strData;
    }
}

export default ParseRouteToGeoJSON;