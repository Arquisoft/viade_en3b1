import auth from 'solid-auth-client';
import PodHandler from './PodHandler';

export async function uploadGroup(group, callback) {

    let session = await auth.currentSession();
    let storageHandler = new PodHandler(session);
    let fileName = group.getName() + "@" + group.getId() + ".jsonld"; // change for final version
    
    //  successCode --> -1 if error. 0 otherwise.
    storageHandler.storeGroup(fileName, group.toJsonLD(), (status) => {
        callback(status);
    });
}

export async function loadAllGroups() {
    let session = await auth.currentSession();
    let storageHandler = new PodHandler(session);

    let loadedGroups = await storageHandler.findAllGroups();

    return loadedGroups;
}