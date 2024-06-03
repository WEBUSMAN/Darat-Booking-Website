import React from 'react';
import BookDoctor from './_components/BookDoctor';
import Header from '@/app/home/_components/Header';
import Navbar from '@/app/home/_components/Navbar';
import Footer from '@/app/home/_components/Footer';
import { Suspense } from 'react';

function page() {
  return (
    <div>
      <Header />
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <BookDoctor />
      </Suspense>
      <Footer />
    </div>
  );
}

export default page;