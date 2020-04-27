import React from 'react';
import {  Container, Card, CssBaseline, makeStyles, CardContent } from '@material-ui/core';
import { ProviderLogin } from "@inrupt/solid-react-components";
import NavBar from '../../ui/main/NavBar';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(20)
    }
}));

export default function Login() {

    const classes = useStyles();

    return (
        <div>
        <NavBar />
            <Container component="main" maxWidth="sm">
                <Card className={classes.root} elevation={4}>
                    <CssBaseline />
                    <CardContent>
                        <ProviderLogin
                            className='solid-provider-login-component'
                            callbackUri={`${window.location.protocol}//${window.location.host}/viade_en3b1/#/home`}
                            selectPlaceHolder='Select your Provider'
                            inputPlaceholder='Introduza la url de su webId'
                            formButtonText='Login'
                            btnTxtWebId='Log In with WebId'
                            btnTxtProvider='Log In with Provider'
                            errorsText={{
                                unknown: 'Something is wrong, please try again...',
                                webIdNotValid: 'WebID is not valid',
                                emptyProvider: 'Solid Provider is required',
                                emptyWebId: 'Valid WebID is required'
                            }}
                        />
                        </CardContent>
                </Card>
            </Container>
        </div>
    );

}