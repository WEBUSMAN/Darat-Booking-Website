"use client";
import React, { useState } from "react";
import { Typography, Box, TextField, Button, Select, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { loginUserAsync } from "../../../../lib/redux/slices/authSlice"
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import api from "../../../../lib/services/api";
import VisibilityIcon from '@mui/icons-material/Visibility';
const Login = () => {
    const router = useRouter();
    const clickhandle = () => {
        router.push("/signup")
    }
    // const dispatch = useDispatch();

    const handleForgetPassword = () => {
        router.push("/forgetpassword");
    };

    const [showPassword, setShowPassword] = useState(true);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const validationSchema = Yup.object({
        username: Yup.string()
            .matches(
                /^([0-9]+|[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                "Invalid email or phone number format"
            )
            .required("Username is required"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                "Password must be correct"
            ),
    });

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            role: "",
        },
        validationSchema,
        onSubmit: (data, { resetForm }) => {
            api.post("auth/login", data)
                .then(response => {
                    if (response.data) {

                        if (data.role === "Admin") {
                            localStorage.setItem("token",response.data.access_token);
                            router.push("/adminpanel");
                        }
                        else {
                            if (data.role === "Patient") {
                                localStorage.setItem("token",response.data.access_token);
                                router.push("/home");
                            }
                        }

                        resetForm();
                        toast.success("Login successful!");
                    } else {
                        router.push("/signup");
                        toast.error("Error: Failed to Login. Please try again later.");
                    }
                })
                .catch(error => {
                    console.error("An error occurred:", error.message);
                });
        },
    });

    // const formik = useFormik({
    //     initialValues: {
    //         email: "",
    //         password: "",
    //     },
    //     validationSchema,
    //     onSubmit: async (data, { resetForm }) => {
    //         try {
    //             await dispatch(loginUserAsync(data));
    //             router.push('/');
    //             resetForm();
    //         } catch (error) {
    //             console.error("An error occurred:", error.message);
    //         }
    //     },
    // });


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
                Log In
            </Typography>
            <Typography>New to this site?
                <span onClick={clickhandle} style={{ cursor: "pointer", textDecoration: "underline" }}> Sign Up</span>
            </Typography>
            <Box sx={{ mt: 4, width: "300px" }}>
                <Typography sx={{ textAlign: "start" }}>Username</Typography>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        name="username"
                        variant="standard"
                        fullWidth
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                    />
                    {formik.touched.username && formik.errors.username ? (
                        <Typography color="error">{formik.errors.username}</Typography>
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
                <Typography sx={{ textAlign: "start" }}>Role</Typography>
                <Box sx={{ mb: 2 }}>
                    <Select
                        textAlign="start"
                        name="role"
                        variant="standard"
                        fullWidth
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.role}
                    >
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="Patient">Patient</MenuItem>
                    </Select>
                    {formik.touched.role && formik.errors.role ? (
                        <Typography color="error">{formik.errors.role}</Typography>
                    ) : null}
                </Box>
            </Box>
            <Box sx={{ cursor: "pointer" }} onClick={handleForgetPassword}>
                <Typography sx={{ textAlign: "start", textDecoration: "underline" }}>Forget Password?</Typography>
            </Box>
            <Button
                onClick={formik.handleSubmit}
                sx={{
                    width: "303px",
                    borderRadius: "10px",
                    backgroundColor: "black",
                    color: "white",
                    mt: 2,
                    height: "54px",
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
                Login
            </Button>

            <ToastContainer />
        </Box>
    );
};

export default Login;