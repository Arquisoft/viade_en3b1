import React, { Component } from 'react';
import EditableMap from '../../../map/EditableMap';
import { Button, Typography, Grid, Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';

export class MapForm extends Component {

    constructor() {
        super();
        this.points = React.createRef();
        this.state = {
            open: false,
            message: "",
            severity: '',
            vertical: 'top',
            horizontal: 'center',
        };
    }

    next = (e) => {
        e.preventDefault();
        if (this.points.current.getTrackPoints() === 'undefined' || this.points.current.getTrackPoints().length === 0) {
            this.openNotif("You must select at least one track point!!", 'warning');
            return;
        }
        this.props.handleNext();
        this.props.handleMapPoints(this.points.current.getTrackPoints());
    }

    back = (e) => {
        e.preventDefault();
        this.props.handleBack();
    }

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
        const { open, message, severity } = this.state;
        const { vertical, horizontal } = this.state;

        return (
            <React.Fragment>
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

                <Typography variant="h6" gutterBottom>
                    Click on the map to add trackpoints to your route
                </Typography>

                <form onSubmit={this.next}>
                    <EditableMap ref={this.points} openNotif={this.openNotif} />

                    <Grid container spacing={3} style={{ marginTop: 12 }}>
                        <Button
                            variant="contained"
                            color="default"
                            style={{
                                marginTop: 12,
                                marginLeft: '1vh'
                            }}
                            type="submit"
                            onClick={this.back}
                        >
                            Back
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            style={{
                                marginTop: 12,
                                marginLeft: 'auto'
                            }}
                            type="submit"
                        >
                            Next
                        </Button>
                    </Grid>
                </form>
            </React.Fragment>
        );
    }
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default MapForm;

