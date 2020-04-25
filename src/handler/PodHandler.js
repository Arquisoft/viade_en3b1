import ParserJsonLdToRoute from "../parser/ParserJsonLdToRoute";

const auth = require('solid-auth-client');
const FC = require('solid-file-client');
const fc = new FC(auth);
const parser = new ParserJsonLdToRoute();

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
        // let successCode = null;
        response.then(
            (response) => { callback(0); }
            , (error) => { callback(-1); }
        );
        // return successCode;
    }

    // async storeMedia(mediaList, callback = () => { }) {
    //     if (!mediaList.length) {
    //         return Promise.reject('No media to upload');
    //     }
    //     if (!validMediaType(mediaList)) {
    //         return Promise.reject('Media must be image or video');
    //     }

    //     let url = this.defaultFolder + this.resourcesFolder;

    //     let buildPath = '';
    //     Array.from(mediaList).forEach(file => {
    //         buildPath = url + file.name;
    //         this.storeMedia(buildPath, file, file.type, callback)
    //     });
    // }

    // storeMedia(url, data, contentType, callback) {
    //     let response = fc.putFile(url, data, contentType);
    //     response.then(
    //         (response) => { callback(response.url, response); }
    //         , (error) => { callback(null, error); }
    //     );
    // }

    async findAllRoutes() {
        let url = this.defaultFolder + this.routesFolder;

        var routes = [];
        
        if (await fc.itemExists(url)) {
            try {
                let contents = await fc.readFolder(url);
                let files = contents.files;

                for (let i = 0; i < files.length; i++) {
                    let fileContent = await fc.readFile(files[i].url);
                    routes.push(parser.parse(fileContent));
                }

            } catch (error) {
                // console.log("##### ERROR #####");
                // console.log(error);         // A full error response 
                // console.log(error.status);  // Just the status code of the error
                // console.log(error.message); // Just the status code and statusText
            }
        } else {
            alert("There is no routes directory");
        }

        // console.log("RUTAS");
        // console.log(routes);

        return routes;
    }
}

// const mediaType = {
//     image: /\.(jpe?g|gif|bmp|png|svg|tiff?)$/i,
//     video: /\.(mp4|webm|ogg)$/i
// }

// function validMediaType(mediaList) {
//     let valid = true;

//     mediaList.forEach(file => {
//         if (!(mediaType.image.test(file.name) || mediaType.video.test(file.name))) {
//             valid = false;
//         }
//     });

//     return valid;
// }



export default PodHandler;