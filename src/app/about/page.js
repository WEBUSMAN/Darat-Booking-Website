import React from 'react';
import About from './_components/About';
import AppointmentBook from '../utilities/_components/AppointmentBook';
import Header from '../home/_components/Header';
import Navbar from '../home/_components/Navbar';
import Footer from '../home/_components/Footer';

function page() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <AppointmentBook />
      <Footer />
    </div>
  );
}

export default page;
