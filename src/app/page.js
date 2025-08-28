'use client';
import React, { useState, useEffect } from 'react';

import { ArrowLeft, Play, Star, Users, TrendingUp, Shield, Smartphone, Cloud, BarChart3, Clock, CheckCircle2, Menu, X } from 'lucide-react';

import Path from '@/components/Path';
import Header from '@/components/Header';
import Heroimage from '@/components/Heroimage';
import Footer from '@/components/Footer';
import Tab from '@/components/Tab';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Start from '@/components/Start';


export default function Home() {

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50" dir="rtl">
        <Header />
        <Heroimage />
        <Path />
        <Tab />
        <Services />
        <Stats />
        <Start />
        <Footer />
      </div>
    </>

  );
}
