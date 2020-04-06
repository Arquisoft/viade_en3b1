import React from 'react';
import NavBar from '../../ui/main/NavBar.js';
import { Typography, Grid, Divider, CssBaseline } from '@material-ui/core';
import logo1 from '../../../assets/img/logo/logo_1.svg';
import Footer from '../../ui/main/Footer';

const Welcome = () => {

    return (
        <div>
            <CssBaseline />
            <NavBar />
            <Grid container>
                <Grid
                    item
                    container
                    // spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ 
                        marginTop: '20rem',
                        marginBottom: '30rem',
                        // height: '80rem'
                     }}
                    >
                    <Grid item xs={3} style={{ marginBottom: '2vh' }}>
                        <img src={logo1} alt="Viade Logo" style={{ height: '6.5rem', width: '6.5rem' }} />
                    </Grid>

                    <Grid item xs={3}>
                        <Typography style={{ marginBottom: '10px' }} variant="h4" color="inherit" align="center">Welcome to Viade.</Typography>
                        <Divider />
                        <Typography style={{ marginTop: '10px' }} variant="body1" color="inherit" align="center">The first routes management system based on SOLID technology.</Typography>
                    </Grid>
                </Grid>


                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                // style={{marginTop: '30rem'}}
                >
                    <Footer />
                </Grid>

            </Grid>
        </div>
    );
};

export default Welcome;
