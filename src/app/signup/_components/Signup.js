"use client";
import React from "react";
import { useState } from "react";
import { Typography, Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import api from "../../../../lib/services/api";
import VisibilityIcon from '@mui/icons-material/Visibility';

const Signup = () => {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(true);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const clickhandle = () => {
        router.push("/login")
    }
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        contactNumber: Yup.string()
            .matches(/^[\d+_]+$/, "Contact number must contain only digits, '+' or '_'")
            .required("Contact number is required"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
            ),
        // medicalHistory: Yup.array().of(Yup.string()), // Medical history field should be an array of strings
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            contactNumber: "",
            password: "",
            // medicalHistory: [],
        },
        validationSchema,
        onSubmit: (data, { resetForm }) => {
            console.log("Form data:", data);
            api.post("patient", data)
                .then(response => {
                    console.log(response.data);
                    localStorage.setItem('userEmail', data.email);
                    router.push('/otp')
                    resetForm();
                    toast.success("Sign up successful!");
                })
                .catch(error => {
                    console.error("An error occurred:", error.message);
                    toast.error("Error: Failed to sign up. Please try again later.");
                });
        },

    });

    // const handleFacebookSignUp = () => {
    //     window.open('https://www.facebook.com/', '_blank');
    // };
    // const handleGoogleSignUp = () => {
    //     window.open('https://www.google.com/', '_blank');
    // };


    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "90vh",
                textAlign: "center",
            }}
        >
            <Typography sx={{ fontSize: "64px", fontWeight: 500, mb: 2 }}>
                Sign Up
            </Typography>
            <Typography>Already a member? <span onClick={clickhandle} style={{ cursor: "pointer", textDecoration: "underline" }}>Log In</span> </Typography>
            {/* 
            <Button
                variant="outlined"
                sx={{
                    width: "303px",
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid #ddd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    padding: "8px",
                    mt: 5,
                    textTransform: "capitalize",
                    "&:hover": {
                        backgroundColor: "white",
                    },
                    "&:active": {
                        backgroundColor: "white",
                    },
                }}
                onClick={handleGoogleSignUp}
            >
                <img
                    src="google-logo.jpg"
                    alt="Google Logo"
                    height="24"
                    width="24"
                />
                Sign up with Google
            </Button>

            <Button
                variant="outlined"
                sx={{
                    width: "303px",
                    backgroundColor: "#1878F2",
                    color: "black",
                    border: "1px solid #ddd",
                    padding: "8px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    mt: 2,
                    textTransform: "capitalize",
                    "&:hover": {
                        backgroundColor: "#1878F2",
                    },
                    "&:active": {
                        backgroundColor: "#1878F2",
                    },
                }}
                onClick={handleFacebookSignUp}
            >
                <img
                    src="facebook.logo.webp"
                    alt="Facebook Logo"
                    height="24"
                    width="24"
                />
                Sign up with Facebook
            </Button> */}

            <Box sx={{ mt: 4, width: "300px" }}>

                <Typography sx={{ textAlign: "start" }}>Name</Typography>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        name="name"
                        variant="standard"
                        fullWidth
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.email && formik.errors.name ? (
                        <Typography color="error">{formik.errors.name}</Typography>
                    ) : null}
                </Box>

                <Typography sx={{ textAlign: "start" }}>Email</Typography>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        name="email"
                        variant="standard"
                        fullWidth
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <Typography color="error">{formik.errors.email}</Typography>
                    ) : null}
                </Box>

                <Typography sx={{ textAlign: "start" }}>Contact Number</Typography>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        name="contactNumber"
                        variant="standard"
                        fullWidth
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.contactNumber}
                    />
                    {formik.touched.email && formik.errors.contactNumber ? (
                        <Typography color="error">{formik.errors.contactNumber}</Typography>
                    ) : null}
                </Box>

                <Typography sx={{ textAlign: "start" }}>Password</Typography>
                <Box sx={{ mb: 2, position: "relative" }}>
                    <TextField
                        name="password"
                        variant="standard"
                        fullWidth
                        type={showPassword ? "password" : "text"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    <VisibilityIcon
                        sx={{
                            position: "absolute",
                            right: "5px",
                            top: "35%",
                            transform: "translateY(-50%)",
                            border: "none",
                            cursor: "pointer",
                            color: "gray"

                        }}
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? "Hide" : "Show"}
                    </VisibilityIcon>
                    {formik.touched.password && formik.errors.password ? (
                        <Typography color="error">{formik.errors.password}</Typography>
                    ) : null}
                </Box>

                {/* <Typography sx={{ textAlign: "start" }}>Medical History</Typography>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        name="medicalHistory"
                        variant="standard"
                        fullWidth
                        onChange={(e) => {
                            const updatedMedicalHistory = [...formik.values.medicalHistory, e.target.value];
                            formik.setFieldValue("medicalHistory", updatedMedicalHistory);
                        }}
                        onBlur={formik.handleBlur}
                        value={formik.values.medicalHistory}
                    />
                    {formik.touched.medicalHistory && formik.errors.medicalHistory ? (
                        <Typography color="error">{formik.errors.medicalHistory}</Typography>
                    ) : null}
                </Box> */}

            </Box>

            <Box>
                {/* <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Divider flexItem sx={{ flexGrow: 1, borderColor: 'black' }} />
                    <Typography sx={{ mx: 1 }}>or</Typography>
                    <Divider flexItem sx={{ flexGrow: 1, borderColor: 'black' }} />
                </Box> */}

                <Button
                    onClick={formik.handleSubmit}
                    sx={{
                        width: "303px",
                        border: "1px solid black",
                        borderRadius: "4px",
                        color: "black",
                        mt: 4,
                        fontSize: "18px",
                        textTransform: "capitalize",
                        "&:hover": {
                            backgroundColor: "white",
                        },
                        "&:active": {
                            backgroundColor: "white",
                        },
                    }}
                >
                    Sign up
                </Button>
            </Box>
            <ToastContainer />
        </Box>
    );
};

export default Signup;
