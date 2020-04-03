import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardProfile from './ProfileCard';
import CardRouteManagement from './RoutesManagementCard';
import FriendsManagement from './FriendsCard';
import CentralPanel from './MainCard';
import { LoggedIn } from '@solid/react';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // backgroundColor: grey[300],
  },
}));

export default function SpacingGrid() {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <Grid item>
            <CardProfile />
            <LoggedIn>
              <CardRouteManagement />
            </LoggedIn>
          </Grid>
          <Grid item>
            <LoggedIn>
              <CentralPanel />
            </LoggedIn>
          </Grid>
          <Grid item >
            <LoggedIn>
              <FriendsManagement />
            </LoggedIn>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}