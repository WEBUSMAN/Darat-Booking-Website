import React from 'react';
import Drawer from '../utilities/_components/Drawer';
import Box from '@mui/material/Box';
import DoctorsPage from './_components/DoctorsPage';

function Page() {
    return (
        <Box sx={{ display: "flex", width: "100%", gap: 2, height: "100vh" }}>
            <Box sx={{ width: "25%", flex: 1, overflowY: 'auto' }}>
                <Drawer />
            </Box>
            <Box sx={{ width: "75%", overflowY: "auto" }}>
                <DoctorsPage />
            </Box>
        </Box>
    );
}

export default Page;
