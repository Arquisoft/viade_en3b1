import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DetailsMap from '../map/DetailsMap.js';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function RouteDetails(props) {
    const classes = useStyles();

    if(props.route === null) {
        return null;
    }
    
    return (
        <Grid container className={classes.root} spacing={1}>
            <Grid item xs={6}>
                <Card elevation={5} className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {props.route.getName()}
                        </Typography>

                        <DetailsMap route={props.route}></DetailsMap>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Grid container direction="column" spacing={1} alignItems="stretch" justify="flex-start">
                    <Grid item xs={12}>
                        <Card elevation={5} className={classes.root}>
                            <CardContent>
                                <Typography className={classes.pos} >
                                    {/* Date: {props.route.getDate()} */}
                                    Date: 22/3/2020
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card elevation={5} className={classes.root}>
                            <CardContent>
                                <Typography className={classes.pos} >
                                    {/* Distance: {props.route.getTotalDistance()} */}
                                    Distance: 3.63km
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card elevation={5} className={classes.root}>
                            <CardContent>
                                <Typography className={classes.pos} >
                                    {/* Time: {props.route.getTime()} */}
                                    Time: 42 min
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card elevation={5} className={classes.root}>
                            <CardContent>
                                <Typography className={classes.pos} >
                                    Description:
                                </Typography>
                                <Typography className={classes.pos} >
                                    {props.route.getDescription()}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* <Grid item xs={12}>
                        <Card elevation={5} className={classes.root}>
                            <CardContent>
                                <Typography className={classes.pos} >
                                    Coments:
                                </Typography>
                                {
                                    Array.isArray(props.route.getComments()) && //is empty??
                                    props.route.getComments().map((comment) =>
                                        (
                                            <Typography className={classes.pos} >
                                                {comment}
                                            </Typography>
                                        )
                                    )
                                }
                            </CardContent>
                        </Card>
                    </Grid> */}
                </Grid>
            </Grid>
        </Grid>
    );
}