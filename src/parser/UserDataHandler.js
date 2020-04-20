import {useLDflexValue, useLDflexList } from '@solid/react';

export function GetUserName() {
    const name = useLDflexValue('user.name') || 'unknown';
    return name.value;
};

export async function GetUserProfileImage() {
    const photo = useLDflexValue('user.vcard_hasPhoto') || 'unknown';
    return photo.value;
};