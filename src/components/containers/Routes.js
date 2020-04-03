import React, { Fragment } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Welcome  from "./welcome/Welcome.js";
import PageNotFound from "./pagenotfound/PageNotFound.js";
import Register from '../services/register/Register.js';
import UserRoutes from './routes/UserRoutes.js';
import RouteDetails from './routes/RouteDetails.js';
import NewRouteForm from "./newrouteform/NewRouteForm.js";

const Routes = () => (
  <HashRouter>
    <Fragment>
      <Switch>
        <Route exact path="/404" component={PageNotFound} />
        <Redirect exact from="/" to="/welcome" />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/myroutes" component={UserRoutes} />
        <Route exact path="/register" component={Register}/>
        <Route exact path="/newRoute" component={NewRouteForm}/>
        <Route exact path="/RouteDetails/:id" component={RouteDetails}/>
        <Redirect to="/404" />
      </Switch>
    </Fragment>
  </HashRouter>
);

export default Routes;
