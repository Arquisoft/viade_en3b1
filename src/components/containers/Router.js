import React, { Fragment } from "react";
import { HashRouter, Switch, Redirect } from "react-router-dom";
import Welcome  from "./welcome/Welcome.js";
import PageNotFound from "./pagenotfound/PageNotFound.js";
import Register from './register/Register.js';
import UserRoutes from './routes/UserRoutes.js';
import RouteDetails from './routes/RouteDetails.js';
import NewRouteForm from "./newrouteform/NewRouteForm.js";
import ImportRouteForm from "./importrouteform/ImportRouteForm";
import Profile from "./profile/Profile.js";
import ProfileFriends from "./profile/ProfileFriends.js";
import Login from "./login/Login.js";
import PrivateLayout from "../layouts/PrivateLayout.js";
import PublicLayout from "../layouts/PublicLayout.js";
import NotLoggedInLayout from "../layouts/NotLoggedInLayout.js";
import ProfileGroups from "./profile/ProfileGroups.js";
import CreateGroup from "./creategroup/CreateGroup.js";
import Help from "./help/Help.js";

const Router = () => (
  <HashRouter>
    <Fragment>
      <Switch>
        <PublicLayout exact path="/404" component={PageNotFound} />
        <PublicLayout exact path="/help" component={Help} />
        <Redirect exact from="/" to="/home" />
        <PublicLayout exact path="/home" component={Welcome} />
        <PrivateLayout exact path="/dashboard" component={UserRoutes} />
        <NotLoggedInLayout exact path="/register" component={Register}/>
        <NotLoggedInLayout exact path="/login" component={Login} />
        <PrivateLayout exact path="/create-route" component={NewRouteForm}/>
        <PrivateLayout exact path="/import-route" component={ImportRouteForm}/>
        <PrivateLayout exact path="/profile" component={Profile}/>
        <PrivateLayout exact path="/profile/friends" component={ProfileFriends}/>
        <PrivateLayout exact path="/profile/groups" component={ProfileGroups}/>
        <PrivateLayout exact path="/profile/groups/create" component={CreateGroup}/>
        <PrivateLayout exact path="/RouteDetails/:id" component={RouteDetails}/>
      </Switch>
    </Fragment>
  </HashRouter>
);

export default Router;
