"use client"
import { Box } from "@mui/material";

import Cart from "./_components/Cart";
import Header from "../home/_components/Header";
import Navbar from "../home/_components/Navbar";
import Footer from "../home/_components/Footer";

const page = () => {

  return (
    <Box>
      <Header/>
      <Navbar/>
      <Cart />
      <Footer/>
    </Box>
  );
};

export default page;
