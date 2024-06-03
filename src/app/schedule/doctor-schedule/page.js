import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '../../utilities/_components/Drawer';
import DoctorSchedules from './_components/DoctorSchedules';
import { Suspense } from "react";

function page() {
  return (
    <Box sx={{ display: "flex", width: "100%", gap: 1, height: "100vh" }}>
      <Box sx={{ width: "25%", flex: 1, overflowY: 'auto' }}>
        <Drawer />
      </Box>
      <Box sx={{ width: "75%", overflowY: "auto" }}>
        <Suspense fallback={<div>Loading...</div>}>
          <DoctorSchedules />
        </Suspense>
      </Box>
    </Box>
  )
}

export default page
