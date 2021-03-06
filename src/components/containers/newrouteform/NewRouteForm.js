import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import DataForm from '../stepper/dataform/DataForm';
import ReviewForm from '../stepper/reviewform/ReviewForm';
import MapForm from '../stepper/mapform/MapForm';
import NavBar from '../../ui/main/NavBar';
import SuccessForm from '../stepper/success/SuccessForm';
import { withStyles } from '@material-ui/styles';
import Route from '../../../entities/Route';
import { uploadRoute } from '../../../handler/RouteHandler';
import { Grid } from '@material-ui/core';
import cache from '../../../cache/RoutesCache';
import imageSignal from '../../../assets/img/logo/signal.svg';
import Footer from '../../ui/main/Footer';
import { toast } from 'react-toastify';
import { ErrorToast, SuccessToast } from '../../ui/utils/ToastContent';

export class NewRouteForm extends Component {

    constructor() {

        super();
        this.route = null;

        this.state = {
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
    // Download and Upload methods
    // ###########################

    handleDownload = () => {
        const fileData = this.route.toJsonLD();
        const blob = new Blob([fileData], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = this.route.getName() + ".json";
        link.href = url;
        link.click();
    }

    upload(route) {
        cache.clear();
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

        this.route = new Route(name, description, points, comments, media, date, null);
        this.route.calculateElevation();
        // console.log(this.route);
        // console.log("ROUTE");
        // console.log(this.route.toJsonLD());
        let statusPromise = this.upload(this.route);
        statusPromise.then((status) => this.checkSuccessCode(status));
    }

    checkSuccessCode(code) {
        switch (code) {
            case -1: // error
                toast.error(<ErrorToast text={"There was an error during this operation."} />);
                break;
            case 0: // success
                toast.success(<SuccessToast text={"Your route was successfully saved."} />);
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

        return (
            <React.Fragment>
                <NavBar />

                {/* Route Banner & Form */}

                <Grid container className={classes.background}>
                    <Grid
                        // id='background-image-create-route'
                        item
                        xs={false}
                        sm={12}
                        md={12}
                        className={classes.image}>

                        <main className={classes.layout}>
                            <Paper className={classes.paper}>
                                <img alt="NewRouteForm logo" src={imageSignal} className={classes.avatar} />

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


            </React.Fragment>
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
        marginLeft: '45%',
        marginRight: '45%',
        height: '3.5rem',
        width: '3.5rem',
    },
    icon: {
        width: 65,
        height: 65,
    },
    grid: {
        marginLeft: theme.spacing(2),
    },
    background: {
        // minHeight: '50vmax',
        // height: 'auto',
        // width: 'auto'
    },
    image: {
        backgroundImage: `url(https://source.unsplash.com/collection/9847024/1600x900)`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // height: '90vh',
        minHeight: '90vh',
    },
});

export default withStyles(useStyles)(NewRouteForm);