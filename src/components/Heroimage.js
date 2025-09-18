'use client'
import React from 'react';
import Image from 'next/image';

import { useState, useEffect } from 'react';
import { Star, Users, DollarSign, TrendingUp, } from 'lucide-react';

const Heroimage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "گزارش فروش",
            data: [
                { label: "پیتزا مخصوص بزرگ", amount: "۲۲۰,۰۰۰,۰۰۰", count: "۱۵" },
                { label: "پیتزا مخصوص متوسط", amount: "۲۲۰,۰۰۰,۰۰۰", count: "۸" },
                { label: "پیتزا گوشت و قارچ بزرگ", amount: "۲۲۰,۰۰۰,۰۰۰", count: "۵" },
                { label: "پیتزا سبزیجات بزرگ", amount: "۲۲۰,۰۰۰,۰۰۰", count: "۸" }
            ]
        },
        {
            id: 2,
            title: "آمار فروش ماهانه",
            data: [
                { label: "فروش امروز", amount: "۸۵۰,۰۰۰,۰۰۰", count: "۳۶" },
                { label: "فروش هفته", amount: "۵,۲۰۰,۰۰۰,۰۰۰", count: "۲۴۸" },
                { label: "فروش ماه", amount: "۲۲,۵۰۰,۰۰۰,۰۰۰", count: "۱۰۵۲" },
                { label: "فروش سال", amount: "۱۸۵,۰۰۰,۰۰۰,۰۰۰", count: "۱۲۶۸۰" }
            ]
        },
        {
            id: 3,
            title: "محبوب‌ترین محصولات",
            data: [
                { label: "کافه لاته", amount: "۴۵,۰۰۰", count: "۱۲۵" },
                { label: "کاپوچینو", amount: "۴۰,۰۰۰", count: "۹۸" },
                { label: "اسپرسو", amount: "۲۵,۰۰۰", count: "۱۵۶" },
                { label: "آمریکانو", amount: "۳۵,۰۰۰", count: "۷۳" }
            ]
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    // Function to get responsive scale based on screen width
    const getPhoneScale = () => {
        if (typeof window !== 'undefined') {
            const width = window.innerWidth;
            if (width >= 2560) return 2.2; // 4K screens
            if (width >= 1920) return 1.8; // Large monitors
            if (width >= 1600) return 1.6; // Standard large screens
            if (width >= 1200) return 1.5; // Desktop default
            if (width >= 1024) return 1.3; // Small desktop/large tablet
            return 1; // Mobile/tablet
        }
        return 1.5; // Default fallback
    };

    return (
        <div className="min-h-screen relative overflow-hidden bgHero">
            <div className="container mx-auto px-8 py-12 grid lg:grid-cols-2 gap-5 items-center min-h-screen z-10 ">
                {/* Right Side - Content */}
                <div className="text-right space-y-6 order-1 z-20 pr-5 max-w-4xl">
                    {/* Badge */}
                    <div className="relative before:absolute before:inset-1 before:rounded-full before:border-dashed before:border-1 before:border-[#FFAC30]/50 before:pointer-events-none inline-flex items-center gap-2 bg-[#243954] backdrop-blur-sm rounded-full px-6 py-3 text-secondary">
                        <Star className="w-5 h-5 fill-yellow-400 text-secondary" />
                        <span className="text-sm font-medium [text-shadow:0px_2px_4px_rgba(36,57,84,1)]">انتخاب مطمئن</span>
                    </div>

                    {/* Main Title */}
                    <div className="space-y-4">
                        <h1 className="text-5xl font-semibold text-secondary leading-tight [text-shadow:0px_2px_4px_rgba(36,57,84,1)]">
                            مجموعه خدمات دیتاترادا
                        </h1>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center ">
                        <button className="bg-primary text-secondary relative before:absolute before:inset-1 before:rounded-full before:border-dashed before:border-1 before:border-[#FFAC30]/30 before:pointer-events-none px-12 py-4 rounded-full text-xl font-semibold [text-shadow:0px_2px_4px_rgba(36,57,84,1)] hover:shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105">
                            مشاوره رایگان
                        </button>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl relative z-10">
                        <div className="bg-[#FFAC30] rounded-xl p-5 border border-[#243954]/20 shadowHero relative z-10">
                            <Users className="w-8 h-8 text-green-400 mb-3 mr-0" />
                            <h3 className="font-bold text-black/50 mb-2">۳۰۰٪ افزایش کارایی</h3>
                            <p className="text-black/50 text-sm">همه ابزارها فقط در یک پنل</p>
                        </div>

                        <div className="bg-[#FFAC30] rounded-xl p-5 border border-[#243954]/20 shadowHero relative z-10">
                            <TrendingUp className="w-8 h-8 text-blue-400 mb-3 mr-0" />
                            <h3 className="font-bold text-black/50 mb-2">مدیریت هوشمند</h3>
                            <p className="text-black/50 text-sm">دسترسی از هرجا و هر زمان</p>
                        </div>

                        <div className="bg-[#FFAC30] rounded-xl p-5 border border-[#243954]/20 shadowHero relative z-10">
                            <DollarSign className="w-8 h-8 text-red-500 mb-3 mr-0" />
                            <h3 className="font-bold text-black/50 mb-2">کاهش هزینه</h3>
                            <p className="text-black/50 text-sm">تا ۷۷٪ کاهش هزینه</p>
                        </div>
                    </div>
                </div>

                {/* Left Side - Mobile Mockup */}
                <div className="hidden md:flex md:justify-center order-2 lg:order-2">
                    <div
                        className="phone-responsive-container"
                        style={{
                            transform: `scale(${getPhoneScale()})`,
                            transformOrigin: 'center',
                            transition: 'transform 0.3s ease'
                        }}
                    >
                        <img
                            src="/images/phone-image.png"
                            alt="با دیتاترادا آشنا شوید"
                            style={{ width: '500px', height: '400px' }}
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (min-width: 2560px) {
                    .phone-responsive-container {
                        transform: scale(2.2) !important;
                    }
                }
                
                @media (min-width: 1920px) and (max-width: 2559px) {
                    .phone-responsive-container {
                        transform: scale(1.8) !important;
                    }
                }
                
                @media (min-width: 1600px) and (max-width: 1919px) {
                    .phone-responsive-container {
                        transform: scale(1.6) !important;
                    }
                }
                
                @media (min-width: 1200px) and (max-width: 1599px) {
                    .phone-responsive-container {
                        transform: scale(1.5) !important;
                    }
                }
                
                @media (min-width: 1024px) and (max-width: 1199px) {
                    .phone-responsive-container {
                        transform: scale(1.3) !important;
                    }
                }
                
                @media (max-width: 1023px) {
                    .phone-responsive-container {
                        transform: scale(1) !important;
                    }
                }
            `}</style>
        </div>
    );
}

export default Heroimage;