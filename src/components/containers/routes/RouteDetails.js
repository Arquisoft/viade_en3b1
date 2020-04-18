import React, { Component } from 'react';
import NavBar from '../../ui/main/NavBar.js';
import RouteDetailsCard from "../../ui/RouteDetailsCard.js";
import cache from '../../../cache/RoutesCache';

export class RouteDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myroute: null,
      id: this.props.match.params.id,
    }
  }

  componentDidMount() {
    cache.getRoutes().then((rList) => {
      let selectedRoute = rList.find((r) =>  r.getId() === this.state.id );
      this.setState({
        myroute: selectedRoute,
      });
    });
  }

  render() {
    const { myroute } = this.state;
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <RouteDetailsCard route={myroute} ></RouteDetailsCard>
        </div>
      </div>
    )
  }
}

export default RouteDetails;