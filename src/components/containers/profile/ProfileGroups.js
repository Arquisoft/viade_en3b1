import React, { useState, useEffect } from 'react';
import { Container, Typography, makeStyles, CssBaseline, Grid, Paper, Link, Backdrop, CircularProgress } from '@material-ui/core';
import NavBar from '../../ui/main/NavBar';
import Footer from '../../ui/main/Footer';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import GroupsCache from '../../../cache/GroupsCache';
import GroupCard from '../../ui/GroupCard';

export default function ProfileGroups() {

    const classes = useStyles();

    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GroupsCache.getGroups().then((gList) => {
            let groupsList = [];
            // gList.forEach((g) => {
            //     groupsList.push(g);
            //     console.log(g)
            // })
            groupsList.push(groupsList);
            setGroups(gList);
            setLoading(false);
        })
    }, [])

    return (
        <div className={classes.root}>
            <NavBar />
            <CssBaseline />
            <Container
                component="main"
                className={classes.main}
                maxWidth="md"
            >
                <Typography variant="h3">Your Groups</Typography>

                <Paper
                    elevation={0}
                    className={classes.paper}>
                    <Tabs
                        value={2}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab selected={false} label="General" href="#/profile" />
                        <Tab selected={true} label="Friends" href="#/profile/friends" />
                        <Tab label="Groups" href="#/profile/groups" />
                    </Tabs>
                </Paper>

                {(loading) ? (
                    <div style={{ height: '30rem' }}>
                        <Backdrop style={{ color: '#5c5585' }} open={loading} invisible>
                            <CircularProgress color="inherit" hidden={loading} />
                        </Backdrop>
                    </div>
                ) : (
                        (groups) ? (
                            <GroupsList groups={groups} />
                        ) : (
                                <DefaultPlaceHolder />
                            )
                    )}

            </Container>

            <Footer />
        </div>
    )
}

function DefaultPlaceHolder() {
    return (
        <div style={{ textAlign: 'center', marginTop: '15rem', marginBottom: '15rem' }}>
            <Typography variant="h6">You don't have any groups yet.</Typography>
            <Typography variant="h6">Want to {<Link style={{ color: "#7c4dff" }} href={"#/profile/groups/create"}>add</Link>} some?</Typography>
        </div>
    );
}

function GroupsList(props) {
    const { groups } = props;
    const classes = useStyles();

    return (
        <Grid
            item
            xs={false}
            sm={12}
            md={12}
            className={classes.groups}
        >

            <main className={classes.layout}>
                    {groups.map((each, index) => (
                        <div key={index}>
                            <GroupCard group={each} />
                        </div>
                    ))}
            </main>

        </Grid>
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
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper2: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        backgroundColor: "#fafafa",
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
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

// export default withStyles(useStyles)(ProfileGroups);