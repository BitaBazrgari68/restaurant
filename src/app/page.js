'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Heroimage from '@/components/Heroimage';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Start from '@/components/Start';
import Software from '@/components/Software';



export default function Home() {

  return (
    <>
      <div className="min-h-screen bg-services" dir="rtl">
        <Header />
        <Heroimage />
        <Software />
        <Services />
    
        <Start />
        <Footer />
        
      </div>
    </>

  );
}
