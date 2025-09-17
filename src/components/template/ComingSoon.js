'use client'
import React, { useState, useEffect } from 'react';

const ComingSoon = () => {
  // تاریخ مقصد میلادی رو اینجا وارد کن
  const targetDate = new Date('2025-10-15T23:59:59'); // مثال: 15 اکتبر 2025

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const timeDifference = targetDate.getTime() - now.getTime();
      
      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #243954 0%, #1a2847 50%, #0f1a2e 100%)`
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white bg-opacity-5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white bg-opacity-3 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white bg-opacity-10 rounded-full blur-lg"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Top decorative line */}
        <div className="w-96 h-px bg-gradient-to-r from-transparent via-white to-transparent mb-16 opacity-50 mx-auto"></div>
        
        {/* Coming Soon Title */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-16 tracking-wider">
          COMING SOON
        </h1>
        
        {/* Bottom decorative line */}
        <div className="w-96 h-px bg-gradient-to-r from-transparent via-white to-transparent mb-16 opacity-50 mx-auto"></div>
        
        
        
        {/* Countdown Timer */}
        <div className="flex justify-center space-x-4 md:space-x-8 mb-16">
          {/* Days */}
          <div className="flex flex-col items-center">
            <div 
              className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-white text-3xl md:text-4xl font-bold rounded-lg shadow-2xl"
              style={{ backgroundColor: '#FFAC30' }}
            >
              {formatNumber(timeLeft.days)}
            </div>
            <span className="text-white text-sm md:text-base mt-2 tracking-wider font-light">
              DAYS
            </span>
          </div>
          
          {/* Hours */}
          <div className="flex flex-col items-center">
            <div 
              className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-white text-3xl md:text-4xl font-bold rounded-lg shadow-2xl"
              style={{ backgroundColor: '#FFAC30' }}
            >
              {formatNumber(timeLeft.hours)}
            </div>
            <span className="text-white text-sm md:text-base mt-2 tracking-wider font-light">
              HOURS
            </span>
          </div>
          
          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div 
              className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-white text-3xl md:text-4xl font-bold rounded-lg shadow-2xl"
              style={{ backgroundColor: '#FFAC30' }}
            >
              {formatNumber(timeLeft.minutes)}
            </div>
            <span className="text-white text-sm md:text-base mt-2 tracking-wider font-light">
              MINUTES
            </span>
          </div>
          
          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div 
              className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-white text-3xl md:text-4xl font-bold rounded-lg shadow-2xl"
              style={{ backgroundColor: '#FFAC30' }}
            >
              {formatNumber(timeLeft.seconds)}
            </div>
            <span className="text-white text-sm md:text-base mt-2 tracking-wider font-light">
              SECONDS
            </span>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default ComingSoon;