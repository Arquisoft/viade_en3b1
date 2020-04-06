import React from "react";
import NavBar from '../../ui/main/NavBar.js';
import ListUserRoutes from '../../ui/ListUserRoutes';
import { Grid, Container } from "@material-ui/core";
import MyRouteBanner from "../../ui/banner/MyRouteBanner.js";
import Footer from "../../ui/main/Footer.js";

const UserRoutes = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <Grid
        container
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <MyRouteBanner />
        </Grid>
        <Grid item style={{ maxWidth: '75rem' }}>
          <ListUserRoutes />
        </Grid>
        <Grid
          item
          // xs={12}
          sm={12}
          md={12}
        style={{marginTop: '10rem'}}
        >
          <Footer />
        </Grid>
      </Grid>

    </div>
  );
};

export default UserRoutes;