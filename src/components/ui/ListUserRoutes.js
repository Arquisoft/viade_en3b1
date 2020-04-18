import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import MyRouteCard from './MyRouteCard';
import cache from '../../cache/RoutesCache';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

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

    return (
      <Grid container >
        <Grid item xs={'auto'} >
          <Grid container justify="center" spacing={2}>

            <Backdrop style={{color: '#5c5585'}} open={loading} invisible>
              <CircularProgress color="inherit" hidden={loading} />
            </Backdrop>

            {routes.map(each => (
              <Grid item>
                <MyRouteCard route={each} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default ListUserRoutes;