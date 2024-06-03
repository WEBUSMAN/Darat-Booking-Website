import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import ClearIcon from "@mui/icons-material/Clear";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { addtocart } from "./apiCalls";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { RemoveCircle, AddCircle } from "@mui/icons-material";
import TextField from '@mui/material/TextField';

const useStyles = makeStyles({
  highlightedSize: {
    borderBottom: "2px solid black",
  },
  disabledSize: {
    pointerEvents: "none",
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
});

const ProCard = ({ product, customerID }) => {
  const router = useRouter();

  const handleAddtoCart = () => {
    if (localStorage.getItem("token")) {
      addtocart({
        customer_id: customerID,
        variant_id: product.variantId[0].id,
        quantity: 1,
        category_id: product.categoryId,
      });
    } else {
        router.push("/login");
    }
  };

  const STYLE = useStyles();
  const [showAddToCart, setShowAddToCart] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1)

  const handleVariantClick = (index) => {
    setSelectedVariant(index === selectedVariant ? null : index);
  };

  const clearSelection = () => {
    setSelectedVariant(null);
  };

  const handleMouseEnter = () => {
    setShowAddToCart(true);
  };

  const handleMouseLeave = () => {
    if (selectedVariant === null) {
      setShowAddToCart(false);
    }
  };

  const renderStock = () => {
    if (selectedVariant !== null) {
      return (
        <Typography color={COLORS.gray_900} fontSize={FONTSIZE.stock}>
          In Stock - {cardData.variants[selectedVariant].stock} left!
        </Typography>
      );
    }
    return null;
  };

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const handleSubtractQuantity = (id) => {
    setQuantity(quantity - 1);
  };
  

  return (
    <Card
      sx={{
        height: 540,
        cursor: "pointer",
        borderRadius: "12px",
        transform: showAddToCart ? "translateY(-2%)" : "translateY(0)",
        transition: "transform 0.2s ease",
        // mb: 3
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card Image */}
      <CardMedia
        component="img"
        src={product.attachment}
        height="70%"
        alt={product.name}
        sx={{
          flex: "1",
          "@media (min-width: 600px)": {
            maxWidth: "80%",
          },
          "@media (min-width: 800px)": {
            maxWidth: "100%",
          },
          "@media (min-width: 1280px)": {
            maxWidth: "100%",
          },
        }}
      />
      <CardContent
        sx={{
          position: "relative",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          transform: showAddToCart ? "translateY(-30%)" : "translateY(-10%)",
          transition: "transform 0.7s ease",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{
            "&:hover": {
              color: `#333`,
            },
          }}
        >
          {product.name}
        </Typography>

        <Box sx={{ display: "flex" }}>
          <Typography component="p" fontWeight={300} fontSize={18}>
            <s> {product.variantId[0].price + "ریال"}</s>
          </Typography>
          <Typography
            variant="body1"
            component="p"
            fontWeight={350}
            fontSize={21}
            ml={1}
          >
            {product.variantId[0].price -
              (product.variantId[0].price / 100) *
                product.discounts[0].discount.value +
              "ریال"}
          </Typography>
          <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: "30px", marginTop: '5px', animation: "slide-in-bottom 0.5s ease-in-out" }}>
  <Button variant="contained" style={{ backgroundColor: "#2C3E50", color: "#FFFFFF", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }} disabled={quantity === 1} onClick={() => handleSubtractQuantity()}><RemoveCircle /></Button>
  <Typography style={{ width: '40px', textAlign: 'center', color: '#333', fontSize: '1.5rem', fontWeight: 'bold' }}>
    {quantity}
  </Typography>
  <Button variant="contained" style={{ backgroundColor: "#3498DB", color: "#FFFFFF", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }} onClick={() => handleAddQuantity()}><AddCircle /></Button>
</Box>
          </Box>

        <Box style={{ display: "flex" }}>
          {product.variantId &&
            product.variantId.map((variant, index) => (
              <div key={index}>
                {/* Sizes */}
                <Typography
                  key={index}
                  className={`${
                    selectedVariant === index ? STYLE.highlightedSize : ""
                  }
                                          ${
                                            selectedVariant === index
                                              ? STYLE.disabledSize
                                              : ""
                                          }`}
                  variant="body1"
                  component="p"
                  fontWeight={600}
                  fontSize={14}
                  mb="4px"
                  onClick={() => handleVariantClick(index)}
                  sx={{
                    color: "#242424",
                    cursor: "pointer",
                    "&:hover": {
                      color: `#777777`,
                    },
                  }}
                >
                  {variant.size}
                </Typography>
              </div>
            ))}
        </Box>

        {/* Stock */}
        {selectedVariant !== null && (
          <Typography color="#242424" fontSize={15}>
            In Stock - {product.variantId[selectedVariant].stock} left!
          </Typography>
        )}

        {/* Clear selection */}
        {selectedVariant !== null && (
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              opacity: "1",
              fontSize: "12px",
            }}
            onClick={clearSelection}
            color="#9e9e9e"
            mt="2px"
          >
            <ClearIcon style={{ fontSize: "12px" }} />
            <Typography fontSize={12}>Clear</Typography>
          </Box>
        )}

        {/* Add to Cart Button */}
        <Box mt={1}>
          <ThemeProvider theme={theme}>
            <Button
              onClick={handleAddtoCart}
              variant="contained"
              fullWidth
              color="primary"
              disableElevation
              sx={{
                borderRadius: "35px",
                textTransform: "none",
                visibility: showAddToCart ? "visible" : "hidden",
                "&:hover": {
                  backgroundColor: `#333`,
                },
              }}
            >
              Add to cart
            </Button>
          </ThemeProvider>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProCard;
