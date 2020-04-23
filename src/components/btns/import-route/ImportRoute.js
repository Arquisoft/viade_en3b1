import React, { Component } from 'react';
import { Button, withStyles } from '@material-ui/core';
import { DropzoneDialog } from 'material-ui-dropzone';
import { ImportRouteForm } from '../../containers/importrouteform/ImportRouteForm';

export class ImportRoute extends Component {

    constructor() {
        super();
        this.state = {
            open: false
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
        //Saving files to state for further use and closing Modal.
        this.setState({
            open: false
        });
        console.log("CHECK")
        return (<ImportRouteForm files={files}/>);
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

export default withStyles(useStyles)(ImportRoute);
