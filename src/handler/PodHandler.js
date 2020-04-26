import Media from "../entities/Media";
import ParserJsonLdToRoute from "../parser/ParserJsonLdToRoute";

const auth = require('solid-auth-client');
const FC = require('solid-file-client');
const fc = new FC(auth);
// const parser = new ParserJsonLdToRoute();

class PodHandler {

    constructor(session) {
        this.session = session;

        this.pod = session.webId.split("profile")[0];
        this.viadeFolder = "viade/";

        this.defaultFolder = this.pod + this.viadeFolder;

        this.routesFolder = "routes/";
        this.resourcesFolder = "resources/"; // for photos and videos 
        this.commentsFolder = "comments/";
    }

    storeRoute(fileName, routeJson, callback = () => { }) {
        let url = this.defaultFolder + this.routesFolder + fileName;
        this.storeFile(url, routeJson, callback);
    }

    storeMedia(media, callback = () => { }) {
        let url = this.defaultFolder + this.resourcesFolder + media.getId() + media.getExtension();
        this.storeFile(url, media.getContent(), callback);
        return url;
    }

    storeFile(url, data, callback) {
        let response = fc.createFile(url, data);
        response.then(
            (response) => { callback(0); }
            , (error) => { callback(-1); }
        );
    }

    async findAllRoutes() {
        let url = this.defaultFolder + this.routesFolder;

        var routes = [];
        
        if (await fc.itemExists(url)) {
            try {
                let contents = await fc.readFolder(url);
                let files = contents.files;

                for (let i = 0; i < files.length; i++) {
                    let fileContent = await fc.readFile(files[i].url);
                    routes.push(await new ParserJsonLdToRoute().parse(fileContent));
                }

            } catch (error) {
                alert(error);
            }
        } else {
            alert("There is no routes directory");
        }

        return routes;
    }

    async findMedia(urlJson) {
        
        let url = urlJson["@id"]; 
        let media;

        if(await fc.itemExists(url)) {
            try {
                let file = await fc.readFile(url);
                media = new Media(file, urlJson["name"]);
                media.setUrl(url);
            } catch(error) {
                alert(error);
            }
        } else {
            alert(`Media doesn't exist: ${url}`);
        }

        return media;
    }
}

export default PodHandler;