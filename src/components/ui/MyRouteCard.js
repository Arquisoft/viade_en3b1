import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MapSnapshot from '../map/MapSnapshot.js'
import Button from '@material-ui/core/Button';
import { Link, Grid, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 290,
    marginBottom: '2vh',
    marginTop: '4vh',
    background: theme.palette.secondary.light,
  },
  pos: {
    color: 'black'
  },
}));

export default function MyRouteCard(props) {
  const classes = useStyles();
  const { route } = props;

  var name = route.getName();

  return (
    <Card elevation={5} className={classes.root}>
      <CardMedia>
        <MapSnapshot route={props.route}></MapSnapshot>
      </CardMedia>
      <CardContent style={{ textAlign: "center" }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="center"
        >

          <Grid item xs={12} >
            <Link underline='none' href={"#/RouteDetails/" + props.route.getId()}>
              <Typography variant="h5" component="h2">
                {name}
              </Typography>
            </Link>
          </Grid>

          <Grid item>
            <Button variant='outlined'
              href={"#/RouteDetails/" + props.route.getId()}
              color="inherit"
              style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              Details
          </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card >
  );
}