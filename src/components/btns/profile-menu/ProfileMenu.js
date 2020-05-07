import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { MenuItem, Menu, Link, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import { Value } from '@solid/react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import { GetUserProfileImage } from '../../../handler/UserDataHandler';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { LogOut } from '../../../handler/SessionHandler';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import InfoIcon from '@material-ui/icons/Info';

const ProfileMenu = () => {

    const [url, setUrl] = useState("");

    GetUserProfileImage().then((path) => {
        setUrl(path);
    });

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
                className={classes.button}
            >

                <Avatar alt="Profile photo" src={url} className={classes.profile} /> <ArrowDropDownIcon />
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem divider disableRipple >
                    <ListItemIcon>
                        <Avatar alt="Profile photo" src={url} className={classes.profileBig} />
                    </ListItemIcon>
                    <ListItemText primary={<Value src="user.name" />} />
                </StyledMenuItem>

                <Link underline='none' href={'#/profile'}>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Your profile" />
                    </StyledMenuItem>
                </Link>

                <Link underline='none' href={'#/profile/friends'}>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                    </StyledMenuItem>
                </Link>

                <Link underline='none' href={'#/profile/groups'}>
                    <StyledMenuItem divider>
                        <ListItemIcon>
                            <SupervisedUserCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                    </StyledMenuItem>
                </Link>

                <Link underline='none' href={'#/help'}>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <ContactSupportIcon />
                        </ListItemIcon>
                        <ListItemText primary="Need help?" />
                    </StyledMenuItem>
                </Link>

                <Link underline='none' href={'#/about'}>
                    <StyledMenuItem divider>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="About us" />
                    </StyledMenuItem>
                </Link>

                <Link underline='none' onClick={() => LogOut()}>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sign out" />
                    </StyledMenuItem>
                </Link>
            </StyledMenu>
        </div>
    );
};

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.secondary.main,
        },
    },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(2),
    },
    profile: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    profileBig: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    }
}));

export default ProfileMenu;