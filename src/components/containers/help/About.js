import React from 'react';
import NavBar from '../../ui/main/NavBar';
import Footer from '../../ui/main/Footer';
import { Container, Typography, makeStyles, Grid, Box, Link } from '@material-ui/core';
import svgIconMap from '../../../assets/img/icons/AboutMap.svg';
import svgIconInterop from '../../../assets/img/icons/AboutInterop.svg';
import svgIconMe from '../../../assets/img/icons/AboutMe.svg';
import svgIconViaDe from '../../../assets/img/icons/AboutViaDe.svg';
import svgIconData from '../../../assets/img/icons/AboutData.svg';

export default function About() {

    const classes = useStyles();

    return (
        <div>
            <NavBar />

            <Grid
                item
                xs={false}
                sm={12}
                md={12}
                className={classes.image}>
                <Typography align="center" className={classes.text}>ViaDe En3B1</Typography>
            </Grid>
            <Container
                component="main"
                className={classes.main}
                maxWidth="md"
            >
                <Grid container spacing={10}>
                    <Grid item xs={6}>
                        <img alt="map about" src={svgIconViaDe} style={{ height: '27rem', width: '27rem' }} />
                    </Grid>
                    <Grid item xs={6} className={classes.point}>
                        <Box fontSize="h4.fontSize" fontWeight="fontWeightBold">What is ViaDe?</Box>
                        <Box fontSize="h6.fontSize" fontWeight="fontWeightRegular">It is the first routes management system based on SOLID technology. It has been developed as part of the <Link style={{ color: "#27DEBF" }} target="_blank" href={"https://arquisoft.github.io/"}>Software Architecture</Link> course at UniOvi.</Box>
                    </Grid>
                </Grid>

                <Grid container spacing={10}>
                    <Grid item xs={6} className={classes.point}>
                        <Box fontSize="h4.fontSize" fontWeight="fontWeightBold">Do you need to get somewhere?</Box>
                        <Box fontSize="h6.fontSize" fontWeight="fontWeightRegular">With ViaDe, you can create or import any route you want so you can store them and check on them at any moment. You can learn more <Link style={{ color: "#27DEBF" }} href={"#/help"}>here</Link>.</Box>
                    </Grid>
                    <Grid item xs={5}>
                        <img alt="map about" src={svgIconMap} style={{ height: '27rem', width: '27rem' }} />
                    </Grid>
                </Grid>

                <Grid container spacing={10}>
                    <Grid item xs={6}>
                        <img alt="map about" src={svgIconData} style={{ height: '27rem', width: '27rem' }} />
                    </Grid>
                    <Grid item xs={6} className={classes.point}>
                        <Box fontSize="h4.fontSize" fontWeight="fontWeightBold">Your data? Easy.</Box>
                        <Box fontSize="h6.fontSize" fontWeight="fontWeightRegular">All your routes are stored in your personal Pod. Also, we don't keep any personal information, so you can be calm about your data.</Box>
                    </Grid>
                </Grid>

                <Grid container spacing={10}>
                    <Grid item xs={6} className={classes.point}>
                        <Box fontSize="h4.fontSize" fontWeight="fontWeightBold">Interoperability</Box>
                        <Box fontSize="h6.fontSize" fontWeight="fontWeightRegular">ViaDe En3B1 is interoperable with other ViaDe apps. This means that you can check your routes in other applications, as well as creating new ones. You can try it, it's awesome!</Box>
                    </Grid>
                    <Grid item xs={5}>
                        <img alt="map about" src={svgIconInterop} style={{ height: '27rem', width: '27rem' }} />
                    </Grid>
                </Grid>

                <Grid container spacing={10}>
                    <Grid item xs={6}>
                        <img alt="map about" src={svgIconMe} style={{ height: '27rem', width: '27rem' }} />
                    </Grid>
                    <Grid item xs={6} className={classes.point}>
                        <Box fontSize="h4.fontSize" fontWeight="fontWeightBold">Hi! I'm Pablo.</Box>
                        <Box fontSize="h6.fontSize" fontWeight="fontWeightRegular">I am the developer behind ViaDe En3B1.</Box>
                        <Box fontSize="h6.fontSize" fontWeight="fontWeightRegular">At the moment, I am a Software Engineering student at UniOvi. When I'm not programming, I enjoy photography, running and movies.</Box>
                        <Box fontSize="h6.fontSize" fontWeight="fontWeightRegular">You can contact me on <Link target="_blank" style={{ color: "#27DEBF" }} href={"https://www.linkedin.com/in/pablocanalsuarez/"}>LinkedIn</Link>, <Link style={{ color: "#27DEBF" }} target="_blank" href={"https://github.com/PabloCanalSuarez"}>GitHub</Link> or by <Link style={{ color: "#27DEBF" }} href={"mailto:uo264903@uniovi.es"}>Email</Link>.</Box>
                    </Grid>
                </Grid>


            </Container>
            <Footer />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
    },
    text: {
        fontSize: '12vw',
        color: '#000000'
        // color: '#ffffff'
    },
    image: {
        // backgroundImage: `url(https://source.unsplash.com/collection/9847024/1600x900)`,
        backgroundRepeat: 'no-repeat',
        // backgroundColor: '#4EFFBB',
        backgroundColor: '#27DEBF',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '20vw',
        // minHeight: '90vh',
    },
    point: {
        marginTop: theme.spacing(15)
    }
}));