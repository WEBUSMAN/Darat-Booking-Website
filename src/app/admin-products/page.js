"use client";
import React from 'react'
import Drawer from '../utilities/_components/Drawer';
import Box from '@mui/material/Box';
import Products from './_components/Products';
function page() {

    return (

        <Box sx={{ display: "flex", width: "100%", gap: 1, height: "100vh" }}>
            <Box sx={{ width: "25%", flex: 1, overflowY: 'auto' }}>
                <Drawer />
            </Box>
            <Box sx={{ width: "75%", overflowY: "auto" }}>
                <Products />
            </Box>
        </Box>
    )
}

export default page
