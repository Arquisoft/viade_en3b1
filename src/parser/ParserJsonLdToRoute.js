import Route from '../entities/Route.js';
import TrackPoint from '../entities/TrackPoint.js';
import { loadMedia } from '../handler/MediaHandler.js';

class ParserJsonLdToRoute {

    async parse(file) {
        try {
            var route = JSON.parse(file);

            var name = route.name;
            var id = route.id;
            var date = new Date(route.date);
            var description = route.description;

            var points = route.points;
            var comments = [];
            var mediaData = route.media;

            let trackPoints = this.parsePoints(points);
            let media = await this.parseMedia(mediaData);

            let finalroute = new Route(name, description, trackPoints, comments, null, date, id);

            finalroute.setMedia(media);
            // DATE null now.
            return finalroute;
            
        } catch (e) {
            alert(e);
        }
    }

    async parseMedia(media) {
        let mediaList = [];
        for (let i = 0; i < media.length; i++) {
            let m = await loadMedia( media[i] );
            mediaList.push(m);
        }
        return mediaList;
    }

    parsePoints(points) {
        let trackPoints = [];
        for (let i = 0; i < points.length; i++) {
            trackPoints.push(new TrackPoint(points[i].latitude, points[i].longitude, points[i].elevation));
        }
        return trackPoints;
    }
}

export default ParserJsonLdToRoute;