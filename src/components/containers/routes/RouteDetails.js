import React from "react";
import NavBar from '../../graphic interface/NavBar.js';
import { useParams } from "react-router-dom";
import RouteDetailsCard from "../../graphic interface/RouteDetailsCard.js";
import cache from '../../../cache/RoutesChache';

const RouteDetails = () => {
  let { id } = useParams();

  let myroute=cache.getRoutesFromCache().filter((r) => (r.getId() === id));

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        { <RouteDetailsCard route={myroute[0]} ></RouteDetailsCard> }
      </div>
    </div>
  );
};

export default RouteDetails;