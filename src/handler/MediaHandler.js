import auth from 'solid-auth-client';
import PodHandler from './PodHandler';
import Media from '../entities/Media';

export async function uploadMedia(media) {
    if(!(media[0] instanceof Media)) {
        throw new Error("Media must be of Object Media to be uploaded");
    }

    let session = await auth.currentSession();
    let storageHandler = new PodHandler(session);
    
    media.forEach((m) => {
        let url = storageHandler.storeMedia(m);
        m.setUrl(url);
    });
}

export async function loadMedia(mediaJson) {

    let session = await auth.currentSession();
    let storageHandler = new PodHandler(session);

    let loadedMedia = await storageHandler.findMedia(mediaJson);

    return loadedMedia;
}