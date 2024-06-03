import React from 'react';
import Header from '@/app/home/_components/Header';
import Navbar from '@/app/home/_components/Navbar';
import Footer from '@/app/home/_components/Footer';
import { Suspense } from 'react';
import ServiceDoctor from './_components/ServiceDoctor';


function page() {
    return (
        <div>
            <Header />
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
                <ServiceDoctor />
            </Suspense>
            <Footer />
        </div>
    );
}

export default page;
