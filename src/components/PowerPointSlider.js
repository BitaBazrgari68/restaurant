'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import Image from 'next/image'


export default function PowerPointSlider() {

  const totalSlides = 15;
  const slides = [
  '/slides/Slide1.PNG',
  '/slides/Slide2.PNG', 
  '/slides/Slide3.PNG',
  '/slides/Slide4.PNG',
  '/slides/Slide5.PNG',
  '/slides/Slide6.PNG',
  '/slides/Slide7.PNG',
  '/slides/Slide8.PNG',
  '/slides/Slide9.PNG',
  '/slides/Slide10.PNG',
  '/slides/Slide11.PNG',
  '/slides/Slide12.PNG',
  '/slides/Slide13.PNG',
  '/slides/Slide14.PNG',
  '/slides/Slide15.PNG'];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);


  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white pb-10">
      
      {/* هدر */}
      <div className="my-8 flex flex-col items-center justify-center">
        <h3 className="text-2xl font-semibold text-[#243954] mb-2">
          معرفی نرم افزار
        </h3>
        <div className="w-12 h-1 bg-[#FFAC30] rounded-full"></div>
      </div>

      {/* اسلایدر اصلی */}
      <div className="relative bg-gray-100 rounded-lg overflow-hidden">
        <div className="aspect-video flex items-center justify-center bg-white">
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="max-w-full max-h-full object-contain"
            onError={() => {
              console.log(`Error loading slide: ${slides[currentSlide]}`);
            }}
          />
        </div>

        {/* دکمه‌های کنترل */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronRight size={24} />
        </button>

        {/* شماره اسلاید */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* تامبنیل‌ها */}
      <div className="mt-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-20 h-12 border-2 rounded overflow-hidden ${currentSlide === index ? 'border-blue-500' : 'border-gray-300'
                }`}
            >
              <img
                src={slide}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* کنترل‌های اضافی */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => setCurrentSlide(0)}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          اولین اسلاید
        </button>

        <button
          onClick={() => setCurrentSlide(slides.length - 1)}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          آخرین اسلاید
        </button>
      </div>



      {/* Event listener برای کیبورد */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === ' ') {
              e.preventDefault();
              setIsAutoPlay(!isAutoPlay);
            }
          });
        `
      }} />
    </div>
  );
}