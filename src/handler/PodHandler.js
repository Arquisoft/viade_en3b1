import Media from "../entities/Media";
import ParserJsonLdToRoute from "../parser/ParserJsonLdToRoute";
import ParserJsonLdToGroup from "../parser/ParserJsonLdToGroup";
import { toast } from 'react-toastify';

const auth = require('solid-auth-client');
const FC = require('solid-file-client');
const fc = new FC(auth);

class PodHandler {

    constructor(session) {
        this.session = session;

        this.pod = session.webId.split("profile")[0];
        this.viadeFolder = "viade/";

        this.defaultFolder = this.pod + this.viadeFolder;

        this.routesFolder = "routes/";
        this.resourcesFolder = "resources/"; // for photos and videos 
        this.commentsFolder = "comments/";
        this.groupsFolder = "groups/";
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

    storeGroup(fileName, groupJson, callback = () => { }) {
        let url = this.defaultFolder + this.groupsFolder + fileName;
        this.storeFile(url, groupJson, callback);
    }

    storeFile(url, data, callback) {
        let response = fc.createFile(url, data);
        response.then(
            (response) => { callback(0); }
            , (error) => { callback(-1); }
        );
    }

    async deleteRoute(routeUrl) {
        if (routeUrl !== null) {
            this.deleteFile(routeUrl);
        } else {
            alert('Route url cannot be null');
        }
    }

    async deleteFile(url) {
        if (await fc.itemExists(url)) {
            try {
                fc.delete(url);
            } catch (error) {
                alert(error);
            }
        }
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
                    let route = await new ParserJsonLdToRoute().parse(fileContent, files[i].url);
                    routes.push(route);
                }

            } catch (error) {
                // alert("EN POD HANDLER");
            }
        } else {
            // There is no routes directory
            await fc.createFolder(url);
        }       

        if(routes.includes(undefined)) {
            toast.warn("Some of your routes couldn't be listed.", {toastId:'1', autoClose:10000 })
        }

        return routes.filter((r) => r !== undefined);
    }

    async findMedia(urlJson) {

        let url = urlJson["@id"];
        let media;

        let fileExists = await fc.itemExists(url).catch((err) => {
            return null;
        });


        if (fileExists) {
            try {
                let file = await fc.readFile(url);
                media = new Media(file, urlJson["name"]);
                media.setUrl(url);
            } catch (error) {
                // alert(error);
                return null;
            }
        } else {
            // Media doesn't exist
        }

        return media;
    }

    async findAllGroups() {
        let url = this.defaultFolder + this.groupsFolder;

        var groups = [];

        if (await fc.itemExists(url)) {
            try {
                let contents = await fc.readFolder(url);
                let files = contents.files;

                for (let i = 0; i < files.length; i++) {
                    let fileContent = await fc.readFile(files[i].url);
                    groups.push(new ParserJsonLdToGroup().parse(fileContent));
                }

            } catch (error) {
                // alert(error);
            }
        } else {
            // There is no groups directory
            await fc.createFolder(url);
        }

        return groups;
    }
}

export default PodHandler;