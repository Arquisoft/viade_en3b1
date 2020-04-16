import React, { Component } from 'react';
import NavBar from '../../ui/main/NavBar.js';
import { withRouter } from "react-router-dom";
import RouteDetailsCard from "../../ui/RouteDetailsCard.js";
import cache from '../../../cache/RoutesChache';

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
      console.log("### ID ### "+this.state.id);
      console.log(selectedRoute);
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

export default withRouter(RouteDetails);