import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import MyRouteCard from './MyRouteCard';
import { LoggedIn } from '@solid/react';
import cache from '../../cache/RoutesChache';

export class ListUserRoutes extends Component {
  constructor() {
    super();
    this.state = {
      routes: cache.getRoutesFromCache(),
    };
  }

  sizeFunction() {
    let size = [];
    for (let index = 0; index < 5; index++) {
      size.push(1);
    }
  }

  render() {
    const { routes } = this.state;

    return (
      <Grid container style={{ flexGrow: 1 }} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
        { routes.map(each => (
          <Grid item>
          <LoggedIn>
            <MyRouteCard route={each} />
          </LoggedIn>
        </Grid>
        ))}
        </Grid>
      </Grid>
    </Grid>
    )
  }
}

export default ListUserRoutes;