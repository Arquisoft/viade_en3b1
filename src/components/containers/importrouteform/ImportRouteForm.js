import React, { Component } from 'react';
import NavBar from '../../ui/main/NavBar';
import Footer from '../../ui/main/Footer';
import { withStyles, Typography, Paper, Grid, Button, Snackbar, IconButton } from '@material-ui/core';
import ImportRouteCard from '../../ui/ImportRouteCard';
import { parseGpxToRoutes } from '../../../parser/ParserGpxToRoute';
import ParserJsonLdToRoute from '../../../parser/ParserJsonLdToRoute';
import RoutesCache from '../../../cache/RoutesCache';
import { uploadRoute } from '../../../handler/RouteHandler';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';

export class ImportRouteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            message: '',
            vertical: 'top',
            horizontal: 'center',
            severity: '', // success, error, warning, info
            // --- files ---
            files: this.props.location.routes,
            routes: []
        };
    }

    componentDidMount() {
        if (!this.state.files) {
            this.props.history.push('/404');
            return;
        }
        this.handleFiles();
    }

    handleFiles() {
        let re = /(?:\.([^.]+))?$/;

        this.state.files.forEach((file) => {

            const fileReader = new FileReader();

            fileReader.onerror = () => alert("ERROR IMPORTING ROUTE");
            fileReader.onabort = () => alert("ABORT IMPORTING ROUTE");
            fileReader.onload = async () => {
                const content = fileReader.result;
                try {
                    let ext = re.exec(file.name)[0];
                    if (ext === '.gpx') {
                        this.handleGPX(content);
                    } else if (ext === '.jsonld' || ext === '.json') {
                        await this.handleJSON(content);
                    }
                } catch (error) {
                    alert(error);
                }
            };
            fileReader.readAsText(file);
        });
    }

    handleGPX(file) {
        let routesList = [];
        parseGpxToRoutes(file, function (routeArray) {
            routeArray.forEach((route) => {
                routesList.push(route);
            });
        });

        routesList.forEach((r) => {
            this.state.routes.push(r);
        });

        const { routes } = this.state;
        this.setState({ routes: routes.slice() });
    }

    async handleJSON(file) {
        let parser = new ParserJsonLdToRoute();
        let route = await parser.parseImport(file);
        this.state.routes.push(route);
        const { routes } = this.state;
        this.setState({ routes: routes.slice() });
    }

    async upload() {
        const { routes } = this.state;
        let success = [];
        routes.forEach((r) => {
            this.uploadRoute(r).then((code) => {
                success.push(code); 
            });
        });
        if(success.includes(-1)) {
            this.openNotif("There was an error uploading your routes", 'error');
        } else {
            this.openNotif("Your route was successfully saved", 'success');
        }
        await new Promise((r) => setTimeout(r, 1000));
        this.props.history.push('/dashboard');
    }

    uploadRoute(route) {
        RoutesCache.clear();
        RoutesCache.addRouteToCache(route);
        return new Promise((resolve) => {
            uploadRoute(route, (response) => resolve(response));
        });
    }

    // ###########################
    //        Notification
    // ###########################

    openNotif = (text, newSeverity) => {
        this.setState({
            open: true,
            message: text,
            severity: newSeverity
        });
    };

    closeNotif = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { routes } = this.state;

        const { open, message, severity } = this.state;
        const { vertical, horizontal } = this.state;

        return (
            <div>
                <NavBar />

                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    action={
                        <React.Fragment>
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                onClick={this.closeNotif}
                            >
                                <CloseIcon />
                            </IconButton>
                        </React.Fragment>
                    }
                >
                    <Alert onClose={this.closeNotif} severity={severity}>
                        {message}
                    </Alert>
                </Snackbar>

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

                                {routes.map((each, index) => (
                                    <div key={index}>
                                        <ImportRouteCard route={each} />
                                    </div>
                                ))}

                                <div className={classes.btnArea} >
                                    <Button data-testid="btn-test-accept" onClick={() => this.upload()} className={classes.btn} color="primary" variant="contained">Accept</Button>
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
            </div >
        );
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
        // backgroundImage: `url(https://source.unsplash.com/collection/9847024/1600x900)`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '90vh',
    },
});

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default withStyles(useStyles)(ImportRouteForm);
