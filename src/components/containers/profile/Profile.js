import React, {Component} from 'react';
import { LoggedIn, LoggedOut, Value, List } from '@solid/react';

class Profile extends Component {  
    render() {

        const childrenTrimmed = (item, index) =>
            <li key={index}>
                <a href = {item}>
                    {`${item}`.split('.')[0].split('//')[1]}
                </a>
            </li>;

        return (
            <div>
                <h2>Your profile</h2>
                <p>
                    <LoggedOut>You are here as a guest.</LoggedOut>
                    <LoggedIn>Logged in as <Value src="user.name"/>
                    <ul>
                        <li>Name:   <Value src="user.vcard_fn"/></li>
                        <li>Friends: {'$user.vcard_url'}
                            <List src = "user.vcard_url"
                                children = {childrenTrimmed} >
                            </List>
                        </li>
                    </ul>
                    </LoggedIn>  
                </p>
            </div>
        );
    }
}

export default Profile;