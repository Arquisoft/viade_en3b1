import React from 'react';
import FaqQuestions from './FaqQuestions';
import NavBar from '../../ui/main/NavBar';
import Footer from '../../ui/main/Footer';
import { Container, makeStyles } from '@material-ui/core';
import svgIcon from '../../../assets/img/icons/HelpSupport.svg';

export default function Help() {

    const classes = useStyles();

    return (
        <div>
            <NavBar />
            <Container
                component="main"
                className={classes.main}
                maxWidth="md"
            >
                <img alt="Help Support" src={svgIcon} />
                <FaqQuestions />
            </Container>
            <Footer />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(8),
    },
}));