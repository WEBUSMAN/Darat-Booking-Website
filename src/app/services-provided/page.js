"use client";
import React from 'react'
import ServicesProvided from './_components/ServicesProvided'
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import Drawer from '../utilities/_components/Drawer';
import Box from '@mui/material/Box';
function page() {

    return (

        <Box sx={{ display: "flex", width: "100%", gap: 1, height: "100vh" }}>
            <Box sx={{ width: "25%", flex: 1, overflowY: 'auto' }}>
                <Drawer />
            </Box>
            <Box sx={{ width: "75%", overflowY: "auto" }}>
                <ServicesProvided />
            </Box>
        </Box>
    )
}

export default page
