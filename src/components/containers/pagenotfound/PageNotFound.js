import React from 'react';
import "typeface-roboto";
import { Link, Typography } from '@material-ui/core';

const PageNotFound = () => {
    
    return (
        <div style={{marginLeft:'5vh', marginTop:'5vh'}}>
            <Typography variant="h4">Sorry, there's nothing to see here</Typography>
            <p>Go back to <Link href={"#/"}>Home</Link></p>
        </div>
    );
};

export default PageNotFound;
