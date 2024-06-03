import React from 'react'
import PatientsPage from './_components/Patients'
import Box from '@mui/material/Box';
import Drawer from '../utilities/_components/Drawer';

function page() {
    return (
        <Box sx={{ display: "flex", width: "100%", gap: 1, height: "100vh" }}>
            <Box sx={{ width: "25%", flex: 1, overflowY: 'auto' }}>
                <Drawer />
            </Box>
            <Box sx={{ width: "75%", overflowY: "auto" }}>
                <PatientsPage />
            </Box>
        </Box>
    )
}

export default page
