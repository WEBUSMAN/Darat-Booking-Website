"use client";
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Footer() {
    const router = useRouter();
    const handleSignup = () => {
        router.push('/signup')
    };

    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/', '_blank');
    };

    const handleWhatsAppClick = () => {
        window.open('https://web.whatsapp.com/', '_blank');
    };

    const handleSnapchatClick = () => {
        window.open('https://www.snapchat.com/', '_blank');
    };

    const handleTikTokClick = () => {
        window.open('https://www.tiktok.com/', '_blank');
    };

    return (
        <Box sx={{ margin: "auto", mb: 6, mt: 8, width: "60%" }}>
            <Typography sx={{ fontSize: "40px", fontWeight: 500, lineHeight: 2, textAlign: "center" }}>Join the Club</Typography>
            <Typography sx={{ width: "50%", margin: "auto", mb: 2, textAlign: "center" }}>Join our email list and get access to specials deals exclusive to our subscribers.</Typography>
            <Typography>Enter your email here * </Typography>
            <Box sx={{ display: "flex" }}>
                <TextField
                    name="email"
                    fullWidth
                />
                <Button
                    onClick={handleSignup}
                    sx={{
                        backgroundColor: "black",
                        width: "20%",
                        border: "1px solid white",
                        borderRadius: "4px",
                        color: "white",
                        fontSize: "18px",
                        textTransform: "capitalize",
                        "&:hover": {
                            backgroundColor: "black",
                        },
                        "&:active": {
                            backgroundColor: "black",
                        },
                    }}
                >
                    Sign Up
                </Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 15, mb: 5 }}>
                <IconButton color="inherit" onClick={handleInstagramClick}>
                    <InstagramIcon />
                </IconButton>
                <IconButton color="inherit" onClick={handleWhatsAppClick}>
                    <WhatsAppIcon />
                </IconButton>
                <IconButton color="inherit" onClick={handleSnapchatClick}>
                    <Image src="/sc.png" alt='sc_logo' width={20} height={20} />
                </IconButton>
                <IconButton color="inherit" onClick={handleTikTokClick}>
                    <Image src="/tiktok.jpg" alt='sc_logo' width={26} height={26} />
                </IconButton>
            </Box>
            <Typography>©2023 by Dr. Wafa Clinics. </Typography>
        </Box>
    );
}

export default Footer;
