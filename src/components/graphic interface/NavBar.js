import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Login from "../services/login/Login.js";
import { LoggedOut, LoggedIn } from '@solid/react';
import { Link } from '@material-ui/core';
import "typeface-roboto";
import MisRutas from './MisRutas.js';
import logo1 from '../../assets/img/logo/logo1.svg';

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar >
          <Link underline='none' color='inherit' href={'#/welcome'} className={classes.title}>
            <img src={logo1} alt="Viade Logo" style={{ height: '3vh', width: '3vh' }} /> Viade
          </Link>

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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: 20,
    letterSpacing: 1,
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  menu: {
    width: 150,
  }
}));

export default NavBar;