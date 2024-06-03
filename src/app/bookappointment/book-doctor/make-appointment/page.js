import React from 'react'
import BookAppointment from './_components/BookAppointment'
import { Box } from '@mui/material'
import Header from '@/app/home/_components/Header'
import Navbar from '@/app/home/_components/Navbar'
import Footer from '@/app/home/_components/Footer'
import { Suspense } from 'react';

const page = () => {
  return (
    <Box>
      <Header />
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <BookAppointment />
      </Suspense>
      <Footer />
    </Box>
  )
}

export default page