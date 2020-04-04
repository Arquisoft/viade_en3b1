import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Divider from '@material-ui/core/Divider';
import DemoMap from '../map/DemoMap.js';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
});

const mainUseStyles = makeStyles(theme => ({
  root: {
    marginTop: '5vh',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 550,
    height: 550,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));

function CardMain() {
  const classes = useStyles();

  return (
    <Card elevation={5} className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Username
        </Typography>
        <Typography variant="h5" component="h2">
          Route Name
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Distance: 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Time: 
        </Typography>
        <Divider />
        <Typography variant="h5" component="h2">
          <DemoMap></DemoMap>
        </Typography>
        <Divider />
      </CardContent>
    </Card>
  );
}

export default function CentralPanel(){
  const classes = mainUseStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={220} spacing={2} className={classes.gridList}>
          <GridListTile cols={2} rows={2}>
            <CardMain />
          </GridListTile>
          <GridListTile cols={2} rows={2}>
            <CardMain />
          </GridListTile>
          <GridListTile cols={2} rows={2}>
            <CardMain />
          </GridListTile>
      </GridList>
    </div>
  );
}