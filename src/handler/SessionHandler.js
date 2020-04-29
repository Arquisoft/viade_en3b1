
const auth = require('solid-auth-client');

export function LogOut() {
    auth.logout();
    let uri = `${window.location.origin}`;
    window.location.replace(uri);
} 