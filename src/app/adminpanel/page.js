import React from 'react';
import Drawer from '../utilities/_components/Drawer';
import DoctorsPage from '../doctors/_components/DoctorsPage';
import Box from '@mui/material/Box';
import AdminPanel from './_components/AdminPannel';

function Page() {
    return (
        <Box sx={{ display: "flex", width: "100%", gap: 2, height: "100vh" }}>
            <Box sx={{ width: "25%", flex: 1, overflowY: 'auto' }}>
                <Drawer />
            </Box>
            <Box sx={{ width: "75%", overflowY: "auto" }}>
                <AdminPanel />
            </Box>
        </Box>
    );
}

export default Page;
