"use client";
import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation'; 

function Header() {
    const router = useRouter(); 

    const handleSignup = () => {
        router.push("/login");
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "90%", margin: "auto" }}>
            <Box>
                <Image src="/logo.webp" alt="logo_img" width={300} height={100} />
            </Box>
            <Box sx={{ display: 'flex', gap: 1, mt: 5, cursor: "pointer" }} onClick={handleSignup}>
                <Avatar sx={{ width: 26, height: 26 }}></Avatar>
                <Typography >Log In</Typography>
            </Box>
        </Box>
    );
}

export default Header;
