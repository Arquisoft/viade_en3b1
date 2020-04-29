import auth from 'solid-auth-client';
import PodHandler from './PodHandler';
import { uploadMedia } from './MediaHandler';

export async function uploadRoute(route, callback) {
    let session = await auth.currentSession();
    let storageHandler = new PodHandler(session);
    let fileName = route.getName() + "@" + route.getId() + ".jsonld"; // change for final version
    
    if(route.getMedia().length !== 0) {
        await uploadMedia(route.getMedia());
    }

    // let successCode = -1; // -1 if error. 0 otherwise.
    storageHandler.storeRoute(fileName, route.toJsonLD(), (status) => {
        callback(status);
    });
}

export async function loadAllRoutes() {
    let session = await auth.currentSession();
    let storageHandler = new PodHandler(session);

    let loadedRoutes = await storageHandler.findAllRoutes();
    
    return loadedRoutes;
}

export async function deleteRoute(route) {
    let session = await auth.currentSession();
    let storageHandler = new PodHandler(session);
    let url = route.getUrl();
    
    await storageHandler.deleteRoute(url);
}