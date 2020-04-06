import React, { Component } from 'react';
import NavBar from '../../ui/main/NavBar.js';
import ListUserRoutes from '../../ui/ListUserRoutes';
import { Grid, Container } from "@material-ui/core";
import MyRouteBanner from "../../ui/banner/MyRouteBanner.js";
import Footer from "../../ui/main/Footer.js";

export class UserRoutes extends Component {

  constructor() {
    super();
    this.state = {
      hidden: true,
    };
  }

  toggleBackground = () => {
    this.setState({hidden: false});
  }

  render() {

    const { hidden } = this.state;

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
          <Grid item hidden={hidden}>
            <MyRouteBanner />
          </Grid>

          <Grid item style={{ maxWidth: '75rem' }}>
            <ListUserRoutes toggleBackground={this.toggleBackground} />
          </Grid>

          <Grid
            item
            // xs={12}
            sm={12}
            md={12}
            style={{ marginTop: '10rem' }}
            hidden={hidden}
          >
            <Footer />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default UserRoutes