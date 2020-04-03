import React from 'react';
import Button from '@material-ui/core/Button';
import { MenuItem, Paper, Popper, Grow, MenuList, ListItemIcon, Typography } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import EditLocationIcon from '@material-ui/icons/EditLocation';

const MisRutas = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <div>
            <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                color="inherit"
            >
                My Routes
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper >
                            <MenuList >

                                <MenuItem onClick={() => window.location.href='#/myroutes'}>
                                    <ListItemIcon>
                                        <ListIcon />
                                    </ListItemIcon>
                                    <Typography>See routes</Typography>
                                </MenuItem>

                                <MenuItem onClick={() =>  window.location.href='#/newRoute'}>
                                    <ListItemIcon>
                                        <EditLocationIcon />
                                    </ListItemIcon>
                                    <Typography>Create new</Typography>
                                </MenuItem>

                            </MenuList>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
};

export default MisRutas;