import React, { useState, useEffect } from 'react';
import { Container, Typography, makeStyles, CssBaseline, Grid, AppBar, Divider, Paper, Card, Avatar, CardContent, Link, CardActionArea, CardActions, Button, CardMedia, CardHeader, IconButton, Backdrop } from '@material-ui/core';
import NavBar from '../../ui/main/NavBar';
import Footer from '../../ui/main/Footer';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { GetUserProfileImage, GetUserWebId, GetUserFriends } from '../../../parser/UserDataHandler';
import { Value } from '@solid/react';
import { LogOut } from '../../../parser/SessionHandler';
import cache from '../../../cache/UserCache';
import UserCache from '../../../cache/UserCache';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinkIcon from '@material-ui/icons/Link';

var friendsList = [];

export default function ProfileFriends() {
    const classes = useStyles();

    // #### WEBID ####
    const [webId, setWebId] = useState(0);

    GetUserWebId().then((url) => {
        setWebId(url);
    });


    // #### FRIENDS ####


    // useEffect(() => {
    //     const [friends, setFriends] = useState(0)
    //     friendsList = cache.getFriends();
    //     setFriends(friendsList);
    //     console.log(friends)
    //     // console.log(friendsList)
    // })

    // const [friendsList, setFriends] = useState(0);
    useEffect(() => {
        friendsList = cache.getFriends();
        // setFriends(cache.getFriends());
    }, []);

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
                        value={1}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab selected={false} label="General" href="#/profile" />
                        <Tab selected={true} label="Friends" href="#/profile/friends" />
                    </Tabs>
                </Paper>

                <Grid
                    container
                    spacing={2}
                    // direction="column"
                    alignItems="center"
                    justify="center"
                    className={classes.friends}
                >
                    {friendsList.map((each, index) => {
                        return (
                            <Grid item key={index}>
                                <FriendCard friend={each} />
                            </Grid>
                        )
                    })}

                </Grid>
            </Container>

            {/* <Footer /> */}
        </div>
    )
}

function FriendCard(props) {
    const classes = useStyles();

    const { friend } = props;

    var photo = friend.getPhoto();
    var name = friend.getName();
    var webid = friend.getWebId();

    return (
        <Card variant="outlined" className={classes.fCard}>
            <CardHeader
                // style={{alignItems: 'center'}}

                avatar={
                    <Avatar src={photo} style={{ marginLeft: 'auto', marginRight: 'auto' }} className={classes.fPhoto} />
                }
                action={
                    <IconButton aria-label="go to solid">
                        <Link style={{ color: "#7c4dff" }} href={webid}>
                            <LinkIcon />
                        </Link>
                    </IconButton>
                }
            // title={name}
            />
            <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h6" color="textSecondary" component="p">
                    {name}
                </Typography>
            </CardContent>
        </Card>
    );
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
    friends: {
        marginTop: theme.spacing(5),
    },
    photo: {
        width: theme.spacing(23),
        height: theme.spacing(23),
        margin: theme.spacing(3),
    },
    name: {
        margin: theme.spacing(12),
    },
    link1: {
        marginLeft: theme.spacing(5),
        color: theme.palette.secondary.dark,
    },
    fPhoto: {
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    fCard: {
        display: 'block',
        width: '15rem',
        height: theme.spacing(30)
    },
}));
