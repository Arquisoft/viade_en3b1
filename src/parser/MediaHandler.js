import auth from 'solid-auth-client';
import PodHandler from './PodHandler';

export async function uploadMedia(media) {
    let session = await auth.currentSession();
    let storageHandler = new PodHandler(session);
    
    media.forEach((m) => {
        let url = storageHandler.storeMedia(m);
        console.log("######## MEDIA URL #########  " + m.getId());
        console.log(url);
        m.setUrl(url);
    });
}