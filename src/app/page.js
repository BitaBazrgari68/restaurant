'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Heroimage from '@/components/Heroimage';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Start from '@/components/Start';
import Software from '@/components/Software';



export default function Home() {

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50" dir="rtl">
        <Header />
        <Heroimage />
        <Software />
        <Services />
        <Stats />
        <Start />
        <Footer />
        
      </div>
    </>

  );
}
