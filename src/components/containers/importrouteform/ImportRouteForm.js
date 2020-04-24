import React, { Component } from 'react';
import NavBar from '../../ui/main/NavBar';
import Footer from '../../ui/main/Footer';
import { withStyles, Typography, Paper, Grid, Button } from '@material-ui/core';
import Route from '../../../entities/Route';
import TrackPoint from '../../../entities/TrackPoint';
import ImportRouteCard from '../../ui/ImportRouteCard';

export class ImportRouteForm extends Component {

    constructor(props) {
        super(props);
        // console.log(this.props.location.routes);
        this.state = {
            // routes: this.props.location.routes,
            routes: [new Route("San Silvestre", "Esto es una ruta de prueba", [new TrackPoint(43, 5, 10), new TrackPoint(47, 8, 10)], null, null, null, null, null),
            new Route("Recorrido por Oviedo", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", [new TrackPoint(41, 5, 10), new TrackPoint(43, 8, 10)], null, null, null, null, null)]

        }
    }

    render() {
        const { classes } = this.props;
        const { routes } = this.state;
        return (
            <div>
                <NavBar />

                <Grid container className={classes.background}>
                    <Grid
                        item
                        xs={false}
                        sm={12}
                        md={12}
                        className={classes.image}>

                        <main className={classes.layout}>
                            <Paper className={classes.paper}>

                                <Typography component="h1" variant="h4" align="center">
                                    Please, review your routes
                                </Typography>

                                {routes.map((each) => (
                                    <ImportRouteCard route={each} />
                                ))}

                                <div className={classes.btnArea} >
                                    <Button className={classes.btn} color="primary" variant="contained">Accept</Button>
                                </div>
                            </Paper>
                        </main>

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
        )
    }
}

const useStyles = (theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    btn: {
        // marginRight: theme.spacing(50),
        marginTop: theme.spacing(5),
    },
    btnArea: {
        textAlign: 'center'
    },
    image: {
        backgroundImage: `url(https://source.unsplash.com/collection/9992041/1600x900)`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '90vh',
    },
});

export default withStyles(useStyles)(ImportRouteForm);
