"use client";
import {
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { getDoctors } from "../../_components/apis";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";

const BookDoctor = () => {
  const route = useRouter();
  const searchParams = useSearchParams();
  const value = searchParams.get("id");
  const [loading, setLoading] = useState(true)

  const handleBookAppointment = (id, category, doctorId) => {
    route.push(`/bookappointment/book-doctor/make-appointment?id=${encodeURIComponent(id)}&category=${encodeURIComponent(category)}&doctorId=${encodeURIComponent(doctorId)}`);
  };
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await getDoctors(setDoctors, value);
      setLoading(false)
    };
    fetchData();
  }, []);
  return (
    <Box sx={{ width: "80%", margin: "auto" }}>
      <Typography
        sx={{
          fontSize: "38px",
          textAlign: "center",
          mt: 4,
          mb: 4,
          fontWeight: 600,
        }}
      >
        Book Doctor
      </Typography>
      <Grid container spacing={2}>
        {doctors.map((doctor) => (
          <Grid item key={doctor.id} xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <img
                  src={doctor.profilePic}
                  alt="Service"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    marginTop: "10px",
                  }}
                />
                <Typography variant="h6" component="h2" gutterBottom>
                  {doctor.name}
                </Typography>
                <Typography sx={{ fontSize: "15px" }}>
                  Specialization: {doctor.specialization}
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  Experience: {doctor.totalExperience}
                </Typography>

                <Button
                  sx={{
                    mt: 2,
                    width : "100%",
                    border: "1px solid white",
                    borderRadius: "4px",
                    color: "white",
                    backgroundColor: "black",
                    fontSize: "18px",
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "black",
                    },
                  }}
                  onClick={() => handleBookAppointment(doctor.id, doctor.specialization, doctor.id)}
                >
                  Book Appointment
                </Button>
              </CardContent>
            </Card>

          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          mt: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ml: 5,
        }}
      >
        {loading && <CircularProgress sx={{ color: "black" }} />}
      </Box>
    </Box>
  );
};

export default BookDoctor;
