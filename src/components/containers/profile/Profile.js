import React, { useState } from 'react';
import { Container, Typography, makeStyles, CssBaseline, Grid, AppBar, Divider, Paper, Card, Avatar, CardContent, Link, Button } from '@material-ui/core';
import NavBar from '../../ui/main/NavBar';
import Footer from '../../ui/main/Footer';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { GetUserProfileImage, GetUserWebId } from '../../../parser/UserDataHandler';
import { Value } from '@solid/react';
import { LogOut } from '../../../parser/SessionHandler';

export default function Profile() {
    const classes = useStyles();

    // #### PHOTO ####
    const [url, setUrl] = useState("");

    GetUserProfileImage().then((path) => {
        setUrl(path);
    });

    // #### WEBID ####
    const [webId, setWebId] = useState(0);

    GetUserWebId().then((url) => {
        setWebId(url);
    });

    return (
        <div className={classes.root}>
            <NavBar />
            <CssBaseline />
            <Container
                component="main"
                className={classes.main}
                maxWidth="md"
            >
                <Typography variant="h3">Your Profile</Typography>

                <Paper
                    // variant="outlined" // change for outline 
                    elevation={0}
                    className={classes.paper}>
                    <Tabs
                        value={0}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab label="General" />
                        <Tab label="Friends" href="#/profile/friends" />
                    </Tabs>
                </Paper>

                <Card
                    className={classes.card}
                    variant="outlined"
                >
                    <CardContent>
                        <Grid container>
                            <Grid item>
                                <Avatar alt="Profile photo" src={url} className={classes.photo} />
                            </Grid>

                            <Divider orientation="vertical" flexItem />

                            <Grid item >
                                <Typography className={classes.name} variant="h3" >
                                    <Value src="user.name" />
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

                <Card
                    className={classes.card}
                    variant="outlined"
                >
                    <CardContent>
                        <Grid container>
                            <Grid item>
                                <Typography variant="subtitle1" >Need to change anything?</Typography>
                            </Grid>

                            <Typography variant="subtitle1" className={classes.link1}>
                                Go to your {<Link style={{ color: "#7c4dff" }} href={webId}>Solid account</Link>}
                            </Typography>
                        </Grid>
                    </CardContent>
                </Card>

                <Card
                    className={classes.card}
                    variant="outlined"
                >
                    <CardContent>
                        <Grid container>
                            <Grid item>
                                <Typography variant="subtitle1" >
                                    Or you can also {<Link style={{ color: "#8693E3" }} href="" onClick={() => LogOut()}>sign out</Link>}.
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>

            {/* <Footer /> */}
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: "#8693E3"
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    paper: {
        borderBottom: '1px solid #e8e8e8',
        marginTop: theme.spacing(2),
        backgroundColor: "#fafafa",
        width: '100%'
    },
    card: {
        marginTop: theme.spacing(5),
    },
    photo: {
        width: theme.spacing(23),
        height: theme.spacing(23),
        margin: theme.spacing(3),
    },
    name: {
        margin: theme.spacing(12),
        // margin: "1%",
        // fontSize: '12rem'
    },
    link1: {
        marginLeft: theme.spacing(5),
        color: theme.palette.secondary.dark,
    }
}));
