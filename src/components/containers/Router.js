import React, { Fragment } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Welcome  from "./welcome/Welcome.js";
import PageNotFound from "./pagenotfound/PageNotFound.js";
import Register from './register/Register.js';
import UserRoutes from './routes/UserRoutes.js';
import RouteDetails from './routes/RouteDetails.js';
import NewRouteForm from "./newrouteform/NewRouteForm.js";
import Profile from "./profile/Profile.js";

const Router = () => (
  <HashRouter>
    <Fragment>
      <Switch>
        <Route exact path="/404" component={PageNotFound} />
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home" component={Welcome} />
        <Route exact path="/dashboard" component={UserRoutes} />
        <Route exact path="/register" component={Register}/>
        <Route exact path="/create-route" component={NewRouteForm}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/RouteDetails/:id" component={RouteDetails}/>
        <Redirect to="/404" />
      </Switch>
    </Fragment>
  </HashRouter>
);

export default Router;
