import React, { Component } from 'react';
import NavBar from '../../ui/main/NavBar.js';
import RouteDetailsCard from "../../ui/RouteDetailsCard.js";
import cache from '../../../cache/RoutesCache';
import { Redirect } from "react-router-dom";

export class RouteDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myroute: null,
      id: this.props.match.params.id,
    };
  }

  componentDidMount() {
    cache.getRouteById(this.state.id).then((r) => {
      this.setState({
        myroute: r,
      });
    });
  }

  render() {
    const { myroute } = this.state;

    if(!myroute){
      return(<Redirect to="/404" />);
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