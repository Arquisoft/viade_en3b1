import React from 'react';
import { Card, CardContent, IconButton, CardMedia, Typography, makeStyles, CardActions, Collapse, Link } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';

function GroupCard(props) {
    const classes = useStyles();
    const { group } = props;
    const members = group.getMembers();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    function getName(webid) {
        var username = webid;
        username = username.replace('https://', '');
        username = username.replace('.solid.community/profile/card#me', '');
        username = username.replace('.inrupt.net/profile/card#me', '');
        return username;
    }


    return (
        <div>
            <Card elevation={4} className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography className={classes.title} component="h5" variant="h5">
                            {group.getName()}
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
                            {members.map((each, index) => (
                                <div key={index}>
                                    <Link href={each} target="_blank">{getName(each)}</Link>
                                </div>
                            ))}
                        </CardContent>
                    </Collapse>
                </div>
                <CardMedia
                    className={classes.cover}
                >
                    <PeopleRoundedIcon style={{fontSize: '5rem', fill: '#7c4dff'}} />
                </CardMedia>
            </Card>
        </div>
    );
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
        marginLeft: theme.spacing(12),
        marginTop: theme.spacing(3)
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

export default GroupCard;