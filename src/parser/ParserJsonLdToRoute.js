import Route from '../entities/Route.js';
import TrackPoint from '../entities/TrackPoint.js';
import { loadMedia } from '../handler/MediaHandler.js';

class ParserJsonLdToRoute {

    async parse(file, fileUrl) {
        try {
            var route;
            try {
                route = JSON.parse(file);
            } catch (err) {
                return;
            }

            var name = route.name;
            var id = route.id;
            var date = new Date(route.date);
            var description = route.description;

            var points = route.points;
            var comments = [];
            var mediaData = route.media;

            let trackPoints = this.parsePoints(points);
            let media = await this.parseMedia(mediaData);

            let finalroute;
            try {
                finalroute = new Route(name, description, trackPoints, comments, null, date, id);
            } catch (err) {
                return;
            }

            finalroute.setMedia(media);
            finalroute.setUrl(fileUrl);

            return finalroute;
        } catch (err) {
            return;
        }
    }

    async parseImport(file) {
        try {

            var route;
            try {
                route = JSON.parse(file);
            } catch (err) {
                return;
            }

            var name = route.name;
            var date = new Date(route.date);
            var description = route.description;

            var points = route.points;
            var comments = [];

            let trackPoints = this.parsePoints(points);

            let finalroute;
            try {
                finalroute = new Route(name, description, trackPoints, comments, null, date, null);
            } catch (err) {
                return;
            }

            return finalroute;
        } catch (err) {
            return;
        }
    }

    async parseMedia(media) {
        let mediaList = [];
        for (let i = 0; i < media.length; i++) {
            let m = await loadMedia(media[i]);
            if (m !== null) {
                mediaList.push(m);
            }
        }

        mediaList = this.filterMedia(mediaList);

        return mediaList;
    }

    filterMedia(list) {
        let result = list.filter((item) => item !== undefined);
        return result;
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