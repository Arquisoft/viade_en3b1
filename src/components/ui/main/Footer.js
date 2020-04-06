import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'

export default function Footer() {

    const classes = useStyles();

    return (
        <div>
            <Grid
                container
                className={classes.root}
                id='footer'
                >
                    <Typography 
                        color='secondary'
                        variant='h3'>
                        Footer
                    </Typography>
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({

    root: {
        // height: '60em',
        minHeight: '35vmin',
        backgroundColor: theme.palette.primary.dark,
        // backgroundColor: '#000000',
    },
}));