import React from 'react';
import Button from '@material-ui/core/Button';
import { MenuItem, Menu, Paper, Popper, Grow, MenuList, Typography, Link } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const MisRutas = () => {

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
            >
                Activity
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link underline='none' href={'#/dashboard'}>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <ListIcon />
                        </ListItemIcon>
                        <ListItemText primary="My routes" />
                    </StyledMenuItem>
                </Link>
                <Link underline='none' href={'#/create-route'}>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <EditLocationIcon />
                        </ListItemIcon>
                        <ListItemText primary="Create route" />
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


export default MisRutas;