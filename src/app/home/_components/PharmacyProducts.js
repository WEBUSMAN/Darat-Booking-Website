import React from 'react';
import Products from '@/app/utilities/_components/Products';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function PharmacyProducts() {

    const cardData = [
        {
            imageSrc: "/product1.png",
            primaryText: "La Roche Posa Hyaluronic Acid B5",
            secondaryText1: "$241.00ریال",
            secondaryText2: "$219.00ریال",
        },
        {
            imageSrc: "/product2.png",
            primaryText: "Cosmo White Eye Contour",
            secondaryText1: "$195.50ریال",
            secondaryText2: "$159.00ریال",
        },
        {
            imageSrc: "/product3.png",
            primaryText: "La Roche Posa Hyaluronic Acid B5",
            secondaryText1: "$132.25ریال",
            secondaryText2: "$109.00ریال",
        },
        {
            imageSrc: "/product4.png",
            primaryText: "La Roche Posa Hyaluronic Acid B5",
            secondaryText1: "$111.55ریال",
            secondaryText2: "$99.00ریال",
        },
        {
            imageSrc: "/product5.png",
            primaryText: "La Roche Posa Hyaluronic Acid B5",
            secondaryText1: "$241.00ریال",
            secondaryText2: "$219.00ریال",
        },
    ];

    return (
        <div>
            <Products heading="Explore our Pharmacy" description="Discover convenience and quality at our in-house pharmacy" cardData={cardData} />
            <Box sx={{
                display: "flex",
                justifyContent: "center",
            }}>
                <Button
                    sx={{
                        backgroundColor: "black",
                        width: "12%",
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
                    Shop Now
                </Button>
            </Box>
        </div>
    );
}

export default PharmacyProducts;
