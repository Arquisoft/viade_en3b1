import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MapSnapshot from '../map/MapSnapshot.js'
import Button from '@material-ui/core/Button';
import { Link, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 290,
    marginBottom: '2vh',
    marginTop: '2vh',
    background: '#f7f7f7'
  },
  pos: {
    // marginBottom: 12,
    // marginTop: 12,
    color: 'black'
  },
  link: {
    // marginBottom: 20,
    // marginTop: 10,
  },
});

function getDate(){
  let dates = ['2/4/2020', '12/3/2020', '1/4/2020', '6/3/2020', '22/2/2020'];
  let randomElement = dates[Math.floor(Math.random() * dates.length)];
  // console.log("SELECTED DATE: "+randomElement);
  return randomElement;
}

function getDistance(){
  let dist = ['3.63km', '6.3km', '25.4km', '7.96km', '5.42km'];
  let randomElement = dist[Math.floor(Math.random() * dist.length)];
  // console.log("SELECTED DIST: "+randomElement);
  return randomElement;
}

export default function MyRouteCard(props) {
  const classes = useStyles();
  // console.log(props.route);
  return (
    <Card elevation={5} className={classes.root}>
      <CardContent>
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <MapSnapshot route={props.route}></MapSnapshot>
          </Grid>

          <Grid item xs={12} >
            <Link underline='none' href={"#/RouteDetails/" + props.route.getId()}>
              <Typography className={classes.link} variant="h5" component="h2">
                {props.route.getName()}
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={12} sm={5}>
            <Typography className={classes.pos} color="textSecondary">
              {/* {props.route.getDate()} */}
              {getDate()}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={5}>
            <Typography className={classes.pos} color="textSecondary">
              {/* {props.route.getTotalDistance()} */}
              {getDistance()}
            </Typography>
          </Grid>

          <Button variant='outlined'
            // style={{ color: 'white', background: 'black' }} 
            href={"#/RouteDetails/" + props.route.getId()}
            color="inherit"
            style={{marginLeft:'auto', marginRight:'auto'}}>
            Details
          </Button>

        </Grid>
      </CardContent>
    </Card >
  );
}