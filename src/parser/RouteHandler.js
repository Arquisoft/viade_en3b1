import auth from 'solid-auth-client';
import PodHandler from './PodHandler';

export async function uploadMedia(media) {
    let session = await auth.currentSession();
    let storageHandler = new PodHandler(session);
    await storageHandler.storeMedia(media, (urlInPod, response) => {
        let alertText = "";
        if (urlInPod === null) {
            alertText = "ERROR UPLOADING MEDIA"; // error
        } else {
            alertText = "SUCCESS UPLOADING MEDIA"; // success
        }
        alert(alertText);
    });
}

export async function uploadRoute(route, callback) {
    let session = await auth.currentSession();
    let storageHandler = new PodHandler(session);
    let fileName = route.getName() + "@" + route.getId() + ".jsonld";

    // let successCode = -1; // -1 if error. 0 otherwise.
    storageHandler.storeRoute(fileName, route.getJsonLD(), (status) => {
        callback(status);
    });
}

export async function loadAllRoutes() {
    let session = await auth.currentSession();
    let storageHandler = new PodHandler(session);

    let loadedRoutes = storageHandler.findAllRoutes();
    return loadedRoutes;
}