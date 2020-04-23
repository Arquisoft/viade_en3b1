import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DetailsMap from '../map/DetailsMap.js';
import ElevationChart from '../elevation-chart/ElevationChart.js';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(10),
        // marginLeft: theme.spacing(10),
        // marginRight: theme.spacing(10),
    },
    map: {
        height: '20rem',
        maxWidth: '40rem',
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(10),
    },
    chart: {
        // height: '15rem',
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(10),
    },
    title: {
        marginLeft: theme.spacing(10),
    }
}));

export default function RouteDetailsCard(props) {
    const classes = useStyles();

    if (props.route === null) {
        return null;
    }
    const { route } = props;

    var name = route.getName();
    var author = route.getAuthor() || "Author";

    return (
        <Grid
            container
            className={classes.root}
            spacing={5}

        >
            <Grid item xs sm={6}>
                <Grid item className={classes.title}>
                    <Box fontStyle="italic" fontSize="h4.fontSize" fontWeight="fontWeightBold">
                        {name}
                    </Box>
                    <Typography color="textSecondary" variant="h6">
                        by {author}
                    </Typography>
                </Grid>

                <Grid item >
                    <Card elevation variant="outlined" className={classes.map}>
                        <DetailsMap route={route} />
                    </Card>
                </Grid>

                <Grid item className={classes.map} >
                    {/* <Card elevation className={classes.map}> */}
                        <ElevationChart trackpoints={route.getTrackPoints()} />
                    {/* </Card> */}
                </Grid>
            </Grid>

            <Grid item xs sm={4}>
                <Grid item >
                    <Card elevation variant="outlined" >
                        <h1>CHECK</h1>
                    </Card>
                </Grid>
            </Grid>



        </Grid>
    );
}