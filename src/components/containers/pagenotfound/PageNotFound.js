import React from 'react';
import "typeface-roboto";
import { Link, Typography } from '@material-ui/core';

const PageNotFound = () => {
    
    return (
        <div style={{marginLeft:'5vh', marginTop:'5vh'}}>
            <Typography className="opps-warning-text" variant="h4">Sorry, this is not the webpage you are looking for</Typography>
            <p>Go back to <Link style={{ color: "#94E8B4" }} href={"#/"}>Home</Link></p>
        </div>
    );
};

export default PageNotFound;
