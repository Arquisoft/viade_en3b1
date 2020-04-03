import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavBar from '../../graphic interface/NavBar.js';
import Card from '@material-ui/core/Card';
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';
import ContactsIcon from '@material-ui/icons/Contacts';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin: 50,
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
        backgroundColor: theme.palette.warning.main,
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
    link:{
        margin: theme.spacing(1, 0, 2),
    }
}));

export default function Register() {
    const classes = useStyles();

    return (
        <div>
            <NavBar />
            <Container component="main" maxWidth="sm">
                <Card className={classes.root} elevation={4}>
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <AccountCircleIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">Hi! Welcome to Solid.</Typography>
                        <div className={classes.form}>
                             
                            <Button
                                fullWidth
                                color="primary"
                                className={classes.link}
                                startIcon={<EmojiPeopleIcon/>}
                                onClick={() => window.open('https://solid.inrupt.com/how-it-works')}
                            >How to choose a Provider?</Button>

                            <Button
                                fullWidth
                                variant="outlined"
                                color="primary"
                                className={classes.submit}
                                startIcon={<ContactsOutlinedIcon/>}
                                onClick={() => window.open('https://inrupt.net/register')}
                            >Inrupt</Button>

                            <Button
                                fullWidth
                                variant="outlined"
                                color="primary"
                                className={classes.submit}
                                startIcon={<ContactsIcon/>}
                                onClick={() => window.open('https://solid.community/register')}
                            >Solid Community</Button>

                        </div>
                    </div>
                </Card>
            </Container>
        </div>
    );
}