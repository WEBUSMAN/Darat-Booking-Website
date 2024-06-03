import React from 'react';
import Pharmacy from './_components/Pharmacy';
import FilterComp from './_components/FilterComp';
import Box from '@mui/material/Box';
import Header from '../home/_components/Header';
import Navbar from '../home/_components/Navbar';
import Footer from '../home/_components/Footer';
import Products from './_components/Products';

function page() {
  return (
    <>
      <Header />
      <Navbar />
      {/* <Box sx={{ width: "100%", display: "flex", gap: 2, mt: 5 }}> */}
        {/* <Box sx={{ width: "10%" }}><FilterComp /></Box> */}
        {/* <Box sx={{ width: "90%" }}><Pharmacy /></Box> */}
        {/* <Box sx={{ width: "90%" }}> */}
          <Products />
        {/* </Box> */}
      {/* </Box> */}
      <Footer />
    </>

  );
}

export default page;
