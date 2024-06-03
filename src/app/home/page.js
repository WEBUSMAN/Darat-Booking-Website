"use client";
import React, { useEffect } from 'react';
import HeroSection from './_components/HeroSection';
import AppointmentBook from '../utilities/_components/AppointmentBook';
import PharmacyProducts from './_components/PharmacyProducts';
import Header from './_components/Header';
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';
import { useRouter } from 'next/navigation';
function Home() {
    return (
        <div>
            <Header />
            <Navbar />
            <HeroSection />
            <AppointmentBook />
            <PharmacyProducts />
            <Footer />
        </div>
    );
}

export default Home;
