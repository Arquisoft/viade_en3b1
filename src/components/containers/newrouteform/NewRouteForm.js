import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import DataForm from '../stepper/dataform/DataForm';
import ReviewForm from '../stepper/reviewform/ReviewForm';
import MapForm from '../stepper/mapform/MapForm';
import NavBar from '../../graphic interface/NavBar';
import Avatar from '@material-ui/core/Avatar';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import SuccessForm from '../stepper/success/SuccessForm';
import { withStyles } from '@material-ui/styles';
import Route from '../../../entities/Route';
import { uploadRoute } from '../../../parser/RouteHandler';
import MuiAlert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import { Snackbar, IconButton } from '@material-ui/core';
import cache from '../../../cache/RoutesChache';

export class NewRouteForm extends Component {

    constructor() {

        super();
        this.route = null;

        this.state = {
            open: false,
            message: '',
            vertical: 'top',
            horizontal: 'center',
            severity: '', // success, error, warning, info
            // ----  route ----
            activeStep: 0,
            name: '',
            description: '',
            date: new Date(),
            photos: [],
            videos: [],
            points: []
        };
    }

    handleNext = () => {
        const { activeStep } = this.state;
        this.setState({ activeStep: activeStep + 1 });
    };

    handleBack = () => {
        const { activeStep } = this.state;
        this.setState({ activeStep: activeStep - 1 });
    };

    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
    }

    handleDateChange = (newDate) => {
        this.setState({ date: newDate });
    }

    handleMediaChange = (selectorFiles: FileList, code) => { // this is not an error, is TypeScript
        switch (code) {
            case 0: // photos
                this.setState({ photos: selectorFiles });
                break;
            case 1: // videos
                this.setState({ videos: selectorFiles });
                break;
            default:
                alert('Invalid media code!! ' + code);
                break;
        }
    }

    handleMapPoints = (newPoints) => {
        this.setState({ points: newPoints });
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


    // ###########################
    // Download and Upload methods
    // ###########################

    handleDownload = () => {
        const fileData = this.route.getJsonLD();
        const blob = new Blob([fileData], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.download = this.route.getName() + ".json";
		link.href = url;
		link.click();
    }

    upload(route) {
        cache.addRouteToCache(route);
        return new Promise((resolve) => {
            uploadRoute(route, (response) => resolve(response));
        });
    }

    createRoute = () => {
        const { name, description, date, photos, videos, points } = this.state;
        let comments = null;
        let media = [];

        Array.from(photos).forEach((p) => media.push(p));
        Array.from(videos).forEach((p) => media.push(p));

        this.route = new Route(name, description, points, comments, media, date);

        let statusPromise = this.upload(this.route);
        statusPromise.then((status) => this.checkSuccessCode(status));
    }

    checkSuccessCode(code) {
        switch (code) {
            case -1: // error
                this.openNotif("There was an error during this operation", 'error');
                break;
            case 0: // success
                this.openNotif("Your route was successfully saved", 'success');
                break;
            default:
                throw new Error('Unknown Success Code ' + code);
        }
    }

    render() {

        const { activeStep } = this.state;
        const { name, description, date, photos, videos, points } = this.state;
        const values = { activeStep, name, description, date, photos, videos, points };

        const { classes } = this.props;

        const { open, message, severity } = this.state;
        const { vertical, horizontal } = this.state;

        return (
            <MuiThemeProvider>
                <React.Fragment>
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

                    <main className={classes.layout}>
                        <Paper className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <FilterHdrIcon fontSize="large" />
                            </Avatar>

                            <Typography component="h1" variant="h4" align="center">
                                Create your own route
                            </Typography>

                            <Stepper activeStep={activeStep} className={classes.stepper}>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>

                            <React.Fragment>
                                {getStepContent(activeStep,
                                    values,
                                    this.handleNext,
                                    this.handleBack,
                                    this.handleChange,
                                    this.handleDateChange,
                                    this.handleMediaChange,
                                    this.handleMapPoints,
                                    this.handleDownload,
                                    this.createRoute
                                )}
                            </React.Fragment>
                        </Paper>
                    </main>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const steps = ['Basic data', 'Map', 'Review your route'];

function getStepContent(step,
    values,
    handleNext,
    handleBack,
    handleChange,
    handleDateChange,
    handleMediaChange,
    handleMapPoints,
    handleDownload,
    createRoute) {
    switch (step) {
        case 0:
            return <DataForm
                handleNext={handleNext}
                handleChange={handleChange}
                handleDateChange={handleDateChange}
                handleMediaChange={handleMediaChange}
                values={values}
            />;
        case 1:
            return <MapForm
                handleNext={handleNext}
                handleBack={handleBack}
                handleMapPoints={handleMapPoints}
                values={values}
            />;
        case 2:
            return <ReviewForm
                handleNext={handleNext}
                handleBack={handleBack}
                values={values}
                createRoute={createRoute}
            />;
        case 3:
            return <SuccessForm
                handleDownload={handleDownload}
            />;
        default:
            throw new Error('Unknown step ' + step);
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
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    avatar: {
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: theme.palette.warning.main,
    },
    icon: {
        width: 65,
        height: 65,
    },
    grid: {
        marginLeft: theme.spacing(2),
    }
});

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default withStyles(useStyles)(NewRouteForm);