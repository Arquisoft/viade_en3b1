import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import MyRouteCard from './MyRouteCard';
import cache from '../../cache/RoutesCache';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography, Link } from '@material-ui/core';

export class ListUserRoutes extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      routes: [],
    };
  }

  componentDidMount() {
    cache.getRoutes().then((routesList) => {
      this.setState({
        routes: routesList,
        loading: false,
      });
      this.props.toggleBackground();
    });
  }

  render() {
    const { routes, loading } = this.state;

    if (loading) {
      return (
        <Backdrop style={{ color: '#5c5585' }} open={loading} invisible>
          <CircularProgress color="inherit" hidden={loading} />
        </Backdrop>
      );
    }

    if (!loading && routes.length === 0) {
      return (
        <div style={{ textAlign: 'center', marginTop: '15rem', marginBottom: '15rem' }}>
          <Typography variant="h6">You don't have any routes yet.</Typography>
          <Typography variant="h6">Want to {<Link style={{ color: "#94E8B4" }} href={"#/create-route"}>create</Link>} some?</Typography>
        </div>
      );
    }

    return (
      <Grid container >
        <Grid item xs={'auto'} >
          <Grid container justify="center" spacing={6}>

            {routes.map((each) => (
              <Grid key={each.getId()} item>
                <MyRouteCard key={each.getId()} route={each} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default ListUserRoutes;