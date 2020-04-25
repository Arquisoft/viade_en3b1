import React from 'react'
import { Card, CardContent, IconButton, CardMedia, Typography, makeStyles, CardActions, Collapse, Box } from '@material-ui/core';
import MapSnapshot from '../map/MapSnapshot';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

function ImportRouteCard(props) {
    const classes = useStyles();
    const { route } = props;

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <Card elevation={4} className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography className={classes.title} component="h5" variant="h5">
                            {route.getName()}
                        </Typography>
                    </CardContent>

                    <CardActions disableSpacing>
                        <IconButton
                            data-testid="btn-expand-test"
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent >
                            {(route.getDescription()) ? (
                                <div>
                                    <Box fontSize="h6.fontSize" fontWeight="fontWeightBold">
                                        Description:
                                    </Box>
                                    <Box fontWeight="fontWeightRegular">
                                        {route.getDescription()}
                                    </Box>
                                </div>
                            ) : (
                                    <Box fontWeight="fontWeightRegular">
                                        No description provided.
                                    </Box>
                                )}
                        </CardContent>
                    </Collapse>
                </div>
                <CardMedia
                    className={classes.cover}
                >
                    <MapSnapshot route={route}></MapSnapshot>
                </CardMedia>
            </Card>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: theme.spacing(5)
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: theme.spacing(50)
    },
    content: {
        flex: '1 0 auto',
    },
    title: {
        martinTop: theme.spacing(5)
    },
    cover: {
        width: theme.spacing(30),
        marinLeft: 'auto',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

export default ImportRouteCard;