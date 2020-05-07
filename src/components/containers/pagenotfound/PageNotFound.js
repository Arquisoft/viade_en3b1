import React from 'react';
import svgIcon from '../../../assets/img/icons/404.svg';
import { Link, Box } from '@material-ui/core';

const PageNotFound = () => {
    
    return (
        <div style={{marginLeft:'5vh', marginTop:'5vh', textAlign: 'center'}}>
            <img alt="404 logo" src={svgIcon} />
            <Box fontSize="h5.fontSize" fontWeight="fontWeightBold">Go back to <Link style={{ color: "#27DEBF" }} href={"#/"}>Home</Link></Box>
        </div>
    );
};

export default PageNotFound;
