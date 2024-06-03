import React from 'react';
import Contact from './_components/Contact';
import Header from '../home/_components/Header';
import Navbar from '../home/_components/Navbar';
import Footer from '../home/_components/Footer';

function page() {
  return (
    <div>
      <Header />
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}

export default page;
