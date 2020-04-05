import React from 'react'
import { Grid, CssBaseline, makeStyles, Typography } from '@material-ui/core';

export default function MyRouteBanner() {
    const classes = useStyles();

    return (
        <div>
            {/* https://source.unsplash.com/user/pablocanalsuarez/likes/1600x900 */}
            {/* https://source.unsplash.com/collection/9828433/1600x900 */}
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={12}
                    md={12}
                    className={classes.image}>
                    <Grid container spacing={0}>
                        
                        <Typography className={classes.text}>Your routes,</Typography>
                        <Typography className={classes.text2}>your rules.</Typography>

                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}

const useStyles = makeStyles((theme) => ({

    root: {
        maxHeight: '60vh',
    },
    image: {
        backgroundImage: `url(https://source.unsplash.com/collection/9828433/1600x900)`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    text: {
        marginLeft: '4vh',
        fontSize: '20vh',
        color: '#ffffff'
    },
    text2: {
        marginLeft: '7vh',
        fontSize: '15vh',
        color: '#ffffff'
    }
}));

