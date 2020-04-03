import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Login from "../btns/login/Login.js";
import { LoggedOut, LoggedIn } from '@solid/react';
import { Link, Typography, Grid } from '@material-ui/core';
import "typeface-roboto";
import MisRutas from '../btns/mis-rutas/MisRutas.js';
import logo1 from '../../assets/img/logo/logo_2.svg';

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>

          {/* Home link */}
          <Grid className={classes.link}>
            <Grid container >
              <Link underline='none' color='inherit' href={'#/home'} >
                <Grid container>
                  <Grid item>
                    <img src={logo1} alt="Viade Logo" style={{ height: '4vh', width: '4vh' }} />
                  </Grid>
                  <Grid item>
                    <Typography variant='h4'>
                      Viade
                    </Typography>
                  </Grid>
                </Grid>
              </Link>
            </Grid>
          </Grid>

          <LoggedIn><MisRutas /></LoggedIn>

          <LoggedOut><Button className={classes.menuButton} href={"#/register"} color="inherit">Sign up</Button></LoggedOut>
          
          <Login />

        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: '3vh',
    // alignItems: 'flex-start',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    flexGrow: 1,
    // letterSpacing: 1,
  },
}));

export default NavBar;