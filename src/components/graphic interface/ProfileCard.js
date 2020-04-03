import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { LoggedIn, LoggedOut, Value } from '@solid/react'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 50,
  },
  pos: {
    marginBottom: 12,
  },
});

// 

export default function CardProfile() {
  const classes = useStyles();

  //  const totalFriends = 0; Miguel, recordatory to make it so that
  //  it counts the friends. It's 2:37 AM right now, so not for the 0.1

  return (
    <Card elevation={5} className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Profile
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <LoggedOut>You are here as a guest.</LoggedOut>
          <LoggedIn>Logged in as <Value src="user.name" /></LoggedIn>
        </Typography>
        <LoggedIn>
          <Typography className={classes.pos} color="textSecondary">
            Activities:
        </Typography>
          <Divider />
          <Typography className={classes.pos} color="textSecondary">
            My last activity:
        </Typography>
        </LoggedIn>
        <Divider />
      </CardContent>
    </Card>
  );
}