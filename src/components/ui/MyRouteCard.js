import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MapSnapshot from '../map/MapSnapshot.js'
import Button from '@material-ui/core/Button';
import { Link, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 290,
    marginBottom: '2vh',
    marginTop: '2vh',
    background: theme.palette.secondary.light,
  },
  pos: {
    color: 'black'
  },
}));

export default function MyRouteCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <MapSnapshot route={props.route}></MapSnapshot>
          </Grid>

          <Grid item xs={12} >
            <Link underline='none' href={"#/RouteDetails/" + props.route.getId()}>
              <Typography variant="h5" component="h2">
                {props.route.getName()}
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={12} sm={5}>
            <Typography className={classes.pos} color="textSecondary">
              {/* {props.route.getDate()} */}
              12/3/2020
            </Typography>
          </Grid>

          <Grid item xs={12} sm={5}>
            <Typography className={classes.pos} color="textSecondary">
              {/* {props.route.getTotalDistance()} */}
              3.63km
            </Typography>
          </Grid>

          <Button variant='outlined'
            href={"#/RouteDetails/" + props.route.getId()}
            onClick={() => props.route.calculateElevation()}
            // onClick={() => console.log(props.route)}
            color="inherit"
            style={{marginLeft:'auto', marginRight:'auto'}}>
            Details
          </Button>

        </Grid>
      </CardContent>
    </Card >
  );
}