import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Header() {
    return (
        <React.Fragment>
            <Typography component="div">
                <Box textAlign="center">
                    <h1>React - Juros Compostos</h1>
                </Box>
            </Typography>
        </React.Fragment>
    )
}
