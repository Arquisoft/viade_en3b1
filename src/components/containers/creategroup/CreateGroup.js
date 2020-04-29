import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavBar from '../../ui/main/NavBar.js';
import Card from '@material-ui/core/Card';
import { Grid, TextField, CardContent, Checkbox, Snackbar, IconButton } from '@material-ui/core';
import Footer from '../../ui/main/Footer.js';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import UserCache from '../../../cache/UserCache.js';
import Group from '../../../entities/Group.js';
import GroupsCache from '../../../cache/GroupsCache.js';
import { uploadGroup } from '../../../handler/GroupHandler.js';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin: theme.spacing(5),
        marginTop: theme.spacing(15)
    },
    paper: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#7c4dff',
    },
    form: {
        width: '80%',
        marginTop: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    submit: {
        margin: theme.spacing(1, 0, 2),
    },
    link: {
        margin: theme.spacing(1, 0, 2),
    }
}));

export default function CreateGroup() {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [members, setMembers] = useState([]);
    const friends = UserCache.getFriends();

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("");
    const vertical = 'top';
    const horizontal = 'center';

    function submit(e) {
        e.preventDefault();

        let webIdList = [];
        members.forEach((m) => {
            webIdList.push(m.getWebId());
        });

        let group = new Group(name, webIdList);

        GroupsCache.clearGroups();
        GroupsCache.addGroup(group);
        let statusCode = new Promise((resolve) => {
            uploadGroup(group, (response) => resolve(response));
        });

        statusCode.then((code) => {
            checkStatusCode(code);
        });
    };

    const checkStatusCode = (code) => {
        switch (code) {
            case -1: // error
                openNotif("Couldn't create your new group", 'error');
                break;
            case 0: // success
                openNotif("Your group was successfully saved", 'success');
                break;
            default:
                throw new Error('Unknown Success Code ' + code);
        }
    };

    const openNotif = (text, newSeverity) => {
        setMessage(text);
        setSeverity(newSeverity);
        setOpen(true);
    };

    const closeNotif = () => {
        setOpen(false);
    };

    const handleChange = (index) => {
        let memberList = members; // splice(index, 1)
        let friend = friends[index];
        if (memberList.includes(friend)) {
            let indexOfFriend = memberList.indexOf(friend);
            memberList.splice(indexOfFriend, 1);
        } else {
            memberList.push(friend);
        }

        setMembers(memberList);
    };

    return (
        <div>
            <NavBar />

            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                action={
                    <React.Fragment>
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            onClick={() => closeNotif()}
                        >
                            <CloseIcon />
                        </IconButton>
                    </React.Fragment>
                }
            >
                <Alert onClose={() => closeNotif()} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>

            <Container component="main" maxWidth="sm">
                <Card className={classes.root} elevation={4}>
                    <CssBaseline />
                    <div className={classes.paper}>
                        <SupervisedUserCircleIcon fontSize="large" style={{ fill: '#7c4dff', }} />
                        <Typography component="h1" variant="h5">Want a new group of friends?</Typography>
                        <div className={classes.form}>
                            <form onSubmit={(e) => submit(e)}>
                                <TextField
                                    required
                                    id="name"
                                    name="name"
                                    label="Name"
                                    fullWidth
                                    defaultValue={name}
                                    autoComplete="routename"
                                    onChange={(e) => setName(e.target.value)}
                                />

                                
                                <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                                <Typography variant="subtitle1" color="inherit">Select the members of your group:</Typography>
                                    <div style={{ textAlign: "center"}}>
                                    {friends.map((each, index) => (
                                        <Grid key={index} container style={{ textAlign: "center", marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                                            <Checkbox
                                                onChange={() => handleChange(index)}
                                                color="primary"
                                            />
                                            <Card variant="outlined"
                                                style={{ width: '18rem' }}
                                            >
                                                <CardContent>
                                                    <Typography>{each.getName()}</Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                    </div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <Button
                                        data-testid="btn-create-group"
                                        id="btn-create-group"
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                        type="submit"
                                    >Create</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Card>
            </Container>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                style={{ marginTop: '36rem' }}
            >
                <Footer />
            </Grid>
        </div>
    );
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}