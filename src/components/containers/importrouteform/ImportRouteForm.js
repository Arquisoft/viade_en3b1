import React, { Component } from 'react';
import NavBar from '../../ui/main/NavBar';
import { withStyles } from '@material-ui/core';

export class ImportRouteForm extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.location.routes);
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <NavBar />
                <h1>CHECK</h1>
            </div>
        )
    }
}

const useStyles = (theme) => ({
    btn: {
        marginRight: theme.spacing(2),
    },
});

export default withStyles(useStyles)(ImportRouteForm);
