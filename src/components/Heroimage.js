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



    return (

        <div className="min-h-screen relative overflow-hidden bgHero">

            <div className="absolute inset-x-0 top-0 bottom-32 bg-[#243954]/50 "></div>

            <div className="container mx-auto px-8 py-12 grid lg:grid-cols-2 gap-5 items-center min-h-screen z-10 ">


                {/* Right Side - Content */}
                <div className="text-center lg:text-right space-y-8 order-1 lg:order-1 z-20 pr-5 ">
                    {/* Badge */}
                    <div className="relative before:absolute before:inset-1 before:rounded-full before:border-dashed before:border-1 before:border-[#FFAC30]/50 before:pointer-events-none inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                        <Star className="w-5 h-5 fill-yellow-400 text-secondary" />
                        <span className="text-sm font-medium">  انتخاب مطمئن </span>
                    </div>

                    {/* Main Title */}
                    <div className="space-y-4">
                        <h1 className="text-5xl font-semibold text-white leading-tight">
                            نرم افزارهای یکپارچه ابری ترادا
                        </h1>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center ">
                        <button className="bg-primary text-secondary relative before:absolute before:inset-1 before:rounded-full before:border-dashed before:border-1 before:border-[#FFAC30]/30 before:pointer-events-none px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105 ">
                            مشاوره رایگان
                        </button>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                        <div className="bg-[#FFAC30]  rounded-xl p-5 border border-[#243954]/20">
                            <Users className="w-8 h-8 text-green-400 mb-3 mx-auto lg:mr-0" />
                            <h3 className="font-bold text-black/50 mb-2">۳۰۰٪ افزایش کارایی</h3>
                            <p className="text-black/50 text-sm">همه ابزارها فقط در یک پنل</p>
                        </div>

                        {/* <div className="bg-white/60  rounded-xl p-6 border border-white/20">
                            <TrendingUp className="w-8 h-8 text-blue-400 mb-3 mx-auto lg:mr-0" />
                            <h3 className="font-bold text-black/50 mb-2">مدیریت هوشمند</h3>
                            <p className="text-black/50 text-sm">دسترسی از هرجا و هر زمان</p>
                        </div> */}
                        <div className="bg-[#FFAC30]  rounded-xl p-5 border border-[#243954]/20">
                            <TrendingUp className="w-8 h-8 text-blue-400 mb-3 mx-auto lg:mr-0" />
                            <h3 className="font-bold text-black/50 mb-2">مدیریت هوشمند</h3>
                            <p className="text-black/50 text-sm">دسترسی از هرجا و هر زمان</p>
                        </div>

                        <div className="bg-[#FFAC30]  rounded-xl p-5 border border-[#243954]/20">
                            <DollarSign className="w-8 h-8 text-red-500 mb-3 mx-auto lg:mr-0" />
                            <h3 className="font-bold text-black/50 mb-2">کاهش هزینه</h3>
                            <p className="text-black/50 text-sm">تا ۷۷٪ کاهش هزینه </p>
                        </div>
                    </div>
                </div>
                {/* Left Side - Mobile Mockup */}
                <div className="hidden md:flex md:justify-center order-2 lg:order-2  ">
                    <div style={{ transform: 'scale(1.5)', transformOrigin: 'center' }} >
                        <img
                            src="/images/phone-image.png"
                            alt="با دیتاترادا آشنا شوید"
                            style={{ width: '500px', height:'400px'}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Heroimage;
