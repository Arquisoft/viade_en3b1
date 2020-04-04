import React from "react";
import NavBar from '../../ui/NavBar.js';
import ListUserRoutes from '../../ui/ListUserRoutes';
import { Grid, Container } from "@material-ui/core";
import MyRouteBanner from "../../ui/banner/MyRouteBanner.js";

const UserRoutes = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <MyRouteBanner />
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
      >
        {/* <Grid item>
          <MyRouteBanner />
        </Grid> */}
        <Grid item style={{maxWidth:'75rem'}}>
          <ListUserRoutes />
        </Grid>
      </Grid>


    </div>
  );
};

export default UserRoutes;