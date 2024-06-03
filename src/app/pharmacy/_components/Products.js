"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import ProCard from "./ProCard";

import { fetchItems, getCustomerDetailsByToken } from "./apiCalls";
import { ToastContainer } from "react-toastify";
export default function ProductData() {
  const [products, setProducts] = useState([]);
  const [customerID, setCustomerID] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems(setProducts);
    getCustomerDetailsByToken(setCustomerID);
  }, []);

  return (
    <Box>
      <Container maxWidth="lg">
        <Box mt={4} mb={10}>
          <Typography variant="h4" align="center" gutterBottom>
            Products
          </Typography>
          <Grid container spacing={3} mt={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                {/* Product Card */}
                <ProCard product={product} customerID={customerID}/>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <ToastContainer />
    </Box>
  );
}
