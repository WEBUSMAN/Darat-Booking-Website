import React from 'react';
import ServiceHeroSec from './_components/ServiceHeroSec';
import ServicesProvide from './_components/ServicesProvide';
import AppointmentBook from '../utilities/_components/AppointmentBook';
import OurTeam from './_components/OurTeam';
import Header from '../home/_components/Header';
import Footer from '../home/_components/Footer';
import Navbar from '../home/_components/Navbar';
import GetService from './_components/GetService';

function page() {
  return (
    <div>
      <Header />
      <Navbar />
      <GetService />
      <AppointmentBook />
       {/* <ServiceHeroSec />
      <ServicesProvide /> */}
      <OurTeam /> 
      <Footer />
    </div>
  );
}

export default page;
