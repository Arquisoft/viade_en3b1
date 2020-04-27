import React from 'react';
import UserCache from '../../../cache/UserCache';
import Login from './Login';

function LoginPage() {
    UserCache.loadFriends();
    return <Login />
}

export default LoginPage;