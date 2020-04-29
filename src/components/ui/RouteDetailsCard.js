import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DetailsMap from '../map/DetailsMap.js';
import ElevationChart from '../elevation-chart/ElevationChart.js';
import { Box, Tooltip, Fab, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import MyCarousel from './MyCarousel.js';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import svgIconCamera from '../../assets/img/logo/camera.svg';
import svgIconMap from '../../assets/img/logo/map.svg';
import svgIconMountain from '../../assets/img/logo/mountain.svg';
import svgIconArrows from '../../assets/img/logo/arrows.svg';
import svgIconCameraRetro from '../../assets/img/logo/camera-retro.svg';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RoutesCache from '../../cache/RoutesCache';
import { deleteRoute } from '../../handler/RouteHandler.js';
import { withRouter } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(-15),
        // marginLeft: theme.spacing(10),
        // marginRight: theme.spacing(10),
    },
    maplogo: {
        height: '2rem',
        width: '2rem',
        marginRight: theme.spacing(1),
    },
    mapTitle: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(15),
    },
    map: {
        height: '20rem',
        maxWidth: '40rem',
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(15),
    },
    chart: {
        // height: '20rem',
        maxWidth: '40rem',
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(15),
    },
    elevationlogo: {
        height: '2rem',
        width: '2rem',
        marginRight: theme.spacing(1),
    },
    elevationTitle: {
        marginTop: theme.spacing(8),
        marginLeft: theme.spacing(15),
    },
    title: {
        marginLeft: theme.spacing(15),
    },
    cameralogo: {
        height: '2rem',
        width: '2rem',
        marginRight: theme.spacing(1),
    },
    carouselTitle: {
        marginTop: theme.spacing(17),
    },
    carousel: {
        height: '23rem',
        width: '33rem',
        marginTop: theme.spacing(2),
    },
    data: {
        width: '33rem',
        marginTop: theme.spacing(2),
    },
    datalogo: {
        height: '2rem',
        width: '2rem',
        marginRight: theme.spacing(1),
    },
    dataTitle: {
        marginTop: theme.spacing(3),
    },
    backBtn: {
        margin: theme.spacing(3),
    },
    deleteBtn: {
        margin: theme.spacing(3),
        backgroundColor: '#000000',
        color: theme.palette.secondary.light,
    },
    cameraRetrologo: {
        height: '10rem',
        width: '10rem',
    },
    defaultGallery: {
        marginTop: theme.spacing(6),
    }
}));

function RouteDetailsCard(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    if (props.route === null) {
        return null;
    }
    const { route } = props;

    var name = route.getName();
    var author = route.getAuthor() || "you";
    var date = route.getDate().toLocaleDateString() || "--";
    var description = route.getDescription() || "--";
    var distance = route.getDistance() || "--";

    if(distance !== "--") {
        if(distance > 1000) {
            var km = distance / 1000;
            distance = km.toFixed(1) + " km";
        } else {
            var m = distance;
            distance = distance.toFixed(0) + " m";
        }
    }

    var media = route.getMedia();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function handleDelete() {
        RoutesCache.clear();
        await deleteRoute(route);
        props.history.push('/dashboard');
    }

    return (
        <div>
            <div style={{ alignItems: 'left' }}>
                <Tooltip title="Back" aria-label="back" className={classes.backBtn}>
                    <Fab size="small" href={"#/dashboard"}>
                        <ArrowBackIcon />
                    </Fab>
                </Tooltip>
            </div>

            <div style={{ alignItems: 'right' }}>
                <Tooltip title="Delete route" aria-label="back" >
                    <Fab size="small" className={classes.deleteBtn} onClick={handleClickOpen}>
                        <DeleteForeverIcon />
                    </Fab>
                </Tooltip>
            </div>


            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`Delete route ${name}?`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        The route will be permanently deleted from your Solid POD.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => handleDelete()} color="primary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>


            <Grid
                container
                className={classes.root}
                spacing={3}

            >
                <Grid item xs sm={6}>

                    {/* ##### ROUTE NAME ##### */}
                    <Grid item className={classes.title}>
                        <Box fontStyle="italic" fontSize="h3.fontSize" fontWeight="fontWeightBold">
                            {name}
                        </Box>
                        <Typography color="textSecondary" variant="h6">
                            by {author}
                        </Typography>
                    </Grid>

                    {/* ##### MAP ##### */}
                    <Grid item >
                        <Grid className={classes.mapTitle} container item>
                            <img src={svgIconMap} alt="Map logo" className={classes.maplogo} />
                            <Box fontSize="h5.fontSize" fontWeight="fontWeightBold">
                                Map
                            </Box>
                        </Grid>

                        <Card variant="outlined" className={classes.map}>
                            <DetailsMap route={route} />
                        </Card>
                    </Grid>

                    {/* ##### ELEVATION CHART ##### */}
                    <Grid item >
                        <Grid className={classes.elevationTitle} container item>
                            <img src={svgIconMountain} alt="Elevation logo" className={classes.elevationlogo} />
                            <Box fontSize="h5.fontSize" fontWeight="fontWeightBold">
                                Elevation
                            </Box>
                        </Grid>

                        <Grid item className={classes.chart} >
                            <ElevationChart trackpoints={route.getTrackPoints()} />
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item xs sm={4}>

                    {/* ##### IMAGE GALLERY ##### */}
                    <Grid item >
                        <Grid className={classes.carouselTitle} container item>
                            <img src={svgIconCamera} alt="Camera logo" className={classes.cameralogo} />
                            <Box fontSize="h5.fontSize" fontWeight="fontWeightBold">
                                Gallery
                            </Box>
                        </Grid>

                        <Card elevation={0} className={classes.carousel}>
                            {(media.length !== 0) ? (
                                <MyCarousel photos={media} />
                            ) : (
                                    <div style={{ textAlign: 'center' }} className={classes.defaultGallery}>
                                        <img src={svgIconCameraRetro} alt="Camera retro logo" className={classes.cameraRetrologo} />
                                        <Typography variant="h6">You don't have any photos or videos</Typography>
                                    </div>
                                )}
                        </Card>
                    </Grid>

                    {/* ##### DATA PANEL ##### */}
                    <Grid item >
                        <Grid className={classes.dataTitle} container item>
                            <img src={svgIconArrows} alt="Map logo" className={classes.datalogo} />
                            <Box fontSize="h5.fontSize" fontWeight="fontWeightBold">
                                Info
                            </Box>
                        </Grid>

                        <Card variant="outlined" className={classes.data} >
                            <CardContent>
                                <Grid container spacing={3}>

                                    <Grid item container spacing={3}>
                                        <Grid item >
                                            <Box fontSize="h6.fontSize" fontWeight="fontWeightBold">
                                                Date
                                            </Box>
                                            <Box fontSize="fontSize" fontWeight="fontWeightRegular">
                                                {date}
                                            </Box>
                                        </Grid>

                                        <Grid item >
                                            <Box fontSize="h6.fontSize" fontWeight="fontWeightBold">
                                                Distance
                                            </Box>
                                            <Box fontSize="fontSize" fontWeight="fontWeightRegular">
                                                {distance}
                                            </Box>
                                        </Grid>
                                    </Grid>

                                    <Grid item>
                                        <Grid item >
                                            <Box fontSize="h6.fontSize" fontWeight="fontWeightBold">
                                                Description
                                            </Box>
                                            <Box fontSize="fontSize" fontWeight="fontWeightRegular">
                                                {description}
                                            </Box>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>



            </Grid>
        </div>
    );
}

export default withRouter(RouteDetailsCard);