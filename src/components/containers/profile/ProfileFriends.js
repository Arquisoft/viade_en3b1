import React, { useEffect, useState } from 'react';
import { Container, Typography, makeStyles, CssBaseline, Grid, Paper, Card, Avatar, CardContent, Link, CardHeader, IconButton } from '@material-ui/core';
import NavBar from '../../ui/main/NavBar';
import Footer from '../../ui/main/Footer';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import cache from '../../../cache/UserCache';
import LinkIcon from '@material-ui/icons/Link';
import UserCache from '../../../cache/UserCache';
import { GetUserWebId } from '../../../parser/UserDataHandler';

// var friendsList = [];

export default function ProfileFriends() {
    const classes = useStyles();

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

                <FriendCardList />
            </Container>

            <Footer />
        </div>
    )
}

function FriendCardList() {
    const classes = useStyles();

    // #### WEBID ####
    const [webId, setWebId] = useState(0);

    GetUserWebId().then((url) => {
        setWebId(url);
    });

    // #### FRIENDS ####
    const [friendsList, setFriendsList] = useState([]);
    useEffect(() => {
        // (async function () {
        //     const list = cache.getFriends();
        //     setFriendsList(list);
        // })();
        // cache.getFriends().then((list) =>{
        //     setFriendsList(list);
        // });
        const list = cache.getFriends();
        setFriendsList(list);
        console.log(list);

    }, []);

    if (!friendsList.length) {
        return (
            <div className={classes.friendsList}>
                <Typography variant="h6">
                    Oops, it seems you don't have any friends yet.
                </Typography>
                <Typography variant="subtitle1">
                    You can add new friends in <Link style={{ color: "#7c4dff" }} target="_blank" href={webId}>your profile</Link>.
                </Typography>

            </div>
        );
    }

    return (
        <Grid
            container
            spacing={2}
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
    );
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
                avatar={
                    <Avatar src={photo} className={classes.fPhoto} />
                }
                action={
                    <IconButton aria-label="go to solid">
                        <Link style={{ color: "#7c4dff" }} target="_blank" href={webid}>
                            <LinkIcon />
                        </Link>
                    </IconButton>
                }
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
    fPhoto: {
        width: theme.spacing(13),
        height: theme.spacing(13),
        marginLeft: '3rem',
        marginTop: '1rem'
    },
    fCard: {
        display: 'block',
        width: '15rem',
        height: theme.spacing(30)
    },
    friendsList: {
        textAlign: 'center',
        marginTop: theme.spacing(7),
        marginBottom: theme.spacing(50)
    }
}));
