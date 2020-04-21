import React from 'react';
import { Button } from '@material-ui/core';
import { LoggedIn, LoggedOut } from '@solid/react';
import UserCache from '../../../cache/UserCache';

const auth = require('solid-auth-client');

export class Login extends React.Component {

    async popupLogin(auth) {
        let session = await auth.currentSession();
        let popupUri = 'https://solid.community/common/popup.html';
        if (!session) {
            session = await auth.popupLogin({ popupUri });
        }

        // if(session){
        //     UsersManager.createUserAndLoadRoutes(`${session.webId}`);
        // }
        return (`${session.webId}`); // example of getting user's name. returns something like: "https://pablocanalsuarez.solid.community/profile/card#me"
    }

    render() {
        return (
            <div>
                <LoggedOut>
                    <Button variant="outlined" color="inherit" onClick={() => this.popupLogin(auth)}>Sign in</Button>
                </LoggedOut>
            </div>
        );
    }
}

export default Login;