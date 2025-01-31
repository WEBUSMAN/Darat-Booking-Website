"use client"
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useRouter } from 'next/navigation';

function Navbar() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(() => {
        const storedIndex = localStorage.getItem("activeTab");
        return storedIndex ? parseInt(storedIndex) : 0;
    });

    const handleTabClick = (path, index) => {
        router.push(path);
        localStorage.setItem('activeTab', index.toString());
        setActiveTab(index);
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 2 }}>
            <Tabs value={activeTab}>
                <Tab label="Home" onClick={() => handleTabClick('/', 0)} sx={{ backgroundColor: activeTab === 0 ? '#f0f0f0' : 'inherit' }} />
                <Tab label="About" onClick={() => handleTabClick('/about', 1)} sx={{ backgroundColor: activeTab === 1 ? '#f0f0f0' : 'inherit' }} />
                <Tab label="Services" onClick={() => handleTabClick('/service', 2)} sx={{ backgroundColor: activeTab === 2 ? '#f0f0f0' : 'inherit' }} />
                <Tab label="Book Appointment" onClick={() => handleTabClick('/bookappointment', 3)} sx={{ backgroundColor: activeTab === 3 ? '#f0f0f0' : 'inherit' }} />
                <Tab label="Pharmacy" onClick={() => handleTabClick('/pharmacy', 4)} sx={{ backgroundColor: activeTab === 4 ? '#f0f0f0' : 'inherit' }} />
                <Tab label="Contact" onClick={() => handleTabClick('/contact', 5)} sx={{ backgroundColor: activeTab === 5 ? '#f0f0f0' : 'inherit' }} />
                <Tab label="Cart" onClick={() => handleTabClick('/cart', 6)} sx={{ backgroundColor: activeTab === 6 ? '#f0f0f0' : 'inherit' }} />
            </Tabs>
        </Box>
    );
}

export default Navbar;