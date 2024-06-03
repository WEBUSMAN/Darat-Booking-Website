import React from 'react';
import Services from './_components/Services';
import Header from "../home/_components/Header"
import Navbar from '../home/_components/Navbar';
import Footer from '../home/_components/Footer';

function page() {
  return (
    <div>
      <Header />
      <Navbar />
      <Services />
      <Footer />
    </div>
  );
}

export default page;
