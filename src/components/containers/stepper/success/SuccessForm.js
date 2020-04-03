import React, { Component } from 'react';
import { Grid, IconButton, Tooltip } from '@material-ui/core';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';

export class SuccessForm extends Component {

    download = (e) => {
        e.preventDefault();
        this.props.handleDownload();
    }

    render() {
        return (
            <React.Fragment>
                <Grid container>
                    <Grid item xs={12} sm={2}>
                        <DirectionsWalkIcon fontSize="large" style={{
                            fill: "orange", width: 65,
                            height: 65
                        }} />
                    </Grid>
                    <Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h5" gutterBottom>
                                Route created
                        </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1">
                                Your new track was succesfully created and saved
                        </Typography>
                        </Grid>
                    </Grid>
                    <Tooltip title="Download" arrow>
                        <IconButton
                            variant="contained"
                            color="primary"
                            style={{
                                marginLeft: 'auto',
                                // marginRight: '2vh'
                            }}
                            onClick={this.download}
                        >
                            <GetAppIcon fontSize="large" style={{ fill: "orange" }} />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </React.Fragment>
        );
    }
}

export default SuccessForm;