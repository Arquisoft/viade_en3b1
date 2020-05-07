import React, { Component } from 'react';
import EditableMap from '../../../map/EditableMap';
import { Button, Typography, Grid } from '@material-ui/core';
import { toast } from 'react-toastify';
import { WarnToast, InfoToast } from '../../../ui/utils/ToastContent';

export class MapForm extends Component {

    constructor() {
        super();
        this.points = React.createRef();
    }

    next = (e) => {
        e.preventDefault();
        if (this.points.current.getTrackPoints() === 'undefined' || this.points.current.getTrackPoints().length === 0) {
            toast.warn(<WarnToast text={"Please, select at least one track point to continue."} />);
            return;
        }
        this.props.handleMapPoints(this.points.current.getTrackPoints());
        this.props.handleNext();
    }

    back = (e) => {
        e.preventDefault();
        this.props.handleBack();
    }

    openNotif = (text) => {
        toast.info(<InfoToast text={text} />);
    };

    closeNotif = () => {
        this.setState({ open: false });
    };

    render() {

        return (
            <React.Fragment>

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
                            id="btn-next"
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

export default MapForm;