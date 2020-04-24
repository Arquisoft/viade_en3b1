import React, { Component } from 'react';
import { Button, withStyles } from '@material-ui/core';
import { DropzoneDialog } from 'material-ui-dropzone';
import { ImportRouteForm } from '../../containers/importrouteform/ImportRouteForm';
import {Redirect, Link, withRouter} from 'react-router-dom';

export class ImportRoute extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

    handleOpen() {
        this.setState({
            open: true,
        });
    }

    handleSave(files) {
        this.setState({
            open: false,
        });
        this.props.history.push({
            pathname: '/import-route',
            routes: files
          })
    }

    render() {

        const { classes } = this.props;

        return (
            <div>
                <Button color="primary" variant='contained' className={classes.btn} onClick={() => this.handleOpen()}>
                    Import Route
                </Button>
                <DropzoneDialog
                    open={this.state.open}
                    acceptedFiles={['.gpx', '.json', '.jsonld']}
                    showPreviews={true}
                    showPreviewsInDropzone={false}
                    maxFileSize={5000000}
                    filesLimit={10}
                    clearOnUnmount={true}
                    onSave={(files) => this.handleSave(files)}
                    onClose={this.handleClose.bind(this)}
                    submitButtonText={"import"}
                    cancelButtonText={"cancel"}
                    dialogTitle={"Import routes"}
                    dropzoneText={"Drag and drop any GPX or JSON route files"}
                />
            </div>
        );
    }
}

const useStyles = (theme) => ({
    btn: {
        marginRight: theme.spacing(2),
    },
});

export default withRouter(withStyles(useStyles)(ImportRoute));
