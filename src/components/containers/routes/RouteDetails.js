import React, { Component } from 'react';
import NavBar from '../../ui/main/NavBar.js';
import RouteDetailsCard from "../../ui/RouteDetailsCard.js";
import cache from '../../../cache/RoutesCache';
import { LinearProgress, Typography } from '@material-ui/core';

export class RouteDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myroute: null,
      id: this.props.match.params.id,
      loading: true,
    };
  }

  componentDidMount() {
    cache.getRouteById(this.state.id).then((r) => {
      if (r === -1) {
        this.props.history.push("/404");
        return;
      }
      this.setState({
        myroute: r,
        loading: false,
      });
    });
  }

  render() {
    const { myroute } = this.state;

    if (this.state.loading) {
      return (
        <div style={{ textAlign: "center" }}>
          <LinearProgress />
          <Typography variant="h5">Loading your route...</Typography>
        </div>
      );
    }

    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <RouteDetailsCard route={myroute} ></RouteDetailsCard>
        </div>
      </div>
    );
  }
}

export default RouteDetails;