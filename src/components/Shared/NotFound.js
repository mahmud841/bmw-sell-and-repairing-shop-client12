import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '50vh' }}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h2">You Entered Wrong URL </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => history.push('/')}
            >Go Back Dear </Button>
        </div>
    );
};

export default NotFound;