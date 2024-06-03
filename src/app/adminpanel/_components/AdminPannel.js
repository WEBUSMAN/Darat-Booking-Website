import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';

function AdminPanel() {
    return (
        <Container>
            <Box mt={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to the Admin Panel
                </Typography>
                <Typography variant="body1" paragraph>
                    This is the dashboard for managing your application as an administrator.
                </Typography>
            </Box>
        </Container>
    );
}

export default AdminPanel;
