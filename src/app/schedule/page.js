import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '../utilities/_components/Drawer';
import ScheduleMain from './_components/ScheduleMain';

function page() {
    return (
        <Box sx={{ display: "flex", width: "100%", gap: 1, height: "100vh" }}>
            <Box sx={{ width: "25%", flex: 1, overflowY: 'auto' }}>
                <Drawer />
            </Box>
            <Box sx={{ width: "75%", overflowY: "auto" }}>
                <ScheduleMain />
            </Box>
        </Box>
    )
}

export default page
