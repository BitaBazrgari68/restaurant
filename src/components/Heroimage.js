'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Users, DollarSign, TrendingUp, CheckCircle } from 'lucide-react';
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
        <div className="min-h-screen relative overflow-hidden bgHero ">
            <div className="absolute inset-0 bg-[#243954]/50 "></div> 
        
            <div className="container mx-auto px-4 py-12 grid lg:grid-cols-2 gap-10 items-center min-h-screen z-10 ">
                {/* Left Side - Mobile Mockup */}
                <div className="flex justify-center order-2 lg:order-1  ">
                    <div className="relative ">
                        {/* Phone Frame */}
                        <div className="relative w-80 h-[600px] bg-primary rounded-[3rem] p-3 shadow-2xl ">
                            {/* Phone Screen */}
                            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative ">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-primary rounded-b-2xl z-20"></div>

                                {/* Screen Content */}
                                <div className="h-full flex flex-col pt-8">
                                    {/* Header */}
                                    <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border-b">
                                        <div className="flex justify-between items-center">
                                            <h2 className="text-lg font-bold text-gray-800">ترادا</h2>
                                            <div className="flex gap-2">
                                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tab Navigation */}
                                    <div className="px-4 py-3 bg-gray-50 border-b">
                                        <div className="flex gap-2 text-sm">
                                            <span className="bg-green-500 text-white px-3 py-1 rounded-full">همه فروش ها</span>
                                            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">هزینه</span>
                                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">موجودی کل</span>
                                        </div>
                                    </div>

                                    {/* Slider Content */}
                                    <div className="flex-1 relative overflow-hidden">
                                        {slides.map((slide, index) => (
                                            <div
                                                key={slide.id}
                                                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${index === currentSlide ? 'translate-x-0' :
                                                    index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                                                    }`}
                                            >
                                                <div className="h-full p-4">
                                                    <h3 className="text-lg font-bold text-gray-800 mb-4 text-right">{slide.title}</h3>
                                                    <div className="space-y-3">
                                                        {slide.data.map((item, itemIndex) => (
                                                            <div key={itemIndex} className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                                                                <div className="flex justify-between items-center">
                                                                    <div className="text-right flex-1">
                                                                        <p className="text-sm text-gray-600 mb-1">{item.label}</p>
                                                                        <p className="text-lg font-bold text-gray-800">{item.amount}</p>
                                                                    </div>
                                                                    <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                                                                        {item.count}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Bottom indicators */}
                                    <div className="p-4 bg-gray-50 border-t">
                                        <div className="flex justify-center gap-2">
                                            {slides.map((_, index) => (
                                                <div
                                                    key={index}
                                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-blue-500 w-6' : 'bg-gray-300'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Phone Buttons */}
                            <div className="absolute right-0 top-32 w-1 h-12 bg-gray-700 rounded-r"></div>
                            <div className="absolute right-0 top-48 w-1 h-8 bg-gray-700 rounded-r"></div>
                            <div className="absolute right-0 top-60 w-1 h-8 bg-gray-700 rounded-r"></div>
                        </div>


                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="text-center lg:text-right space-y-8 order-1 lg:order-2 z-20">
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
                        <div className="bg-white/60  rounded-xl p-6 border border-white/20">
                            <Users className="w-8 h-8 text-green-400 mb-3 mx-auto lg:mr-0" />
                            <h3 className="font-bold text-black/50 mb-2">۳۰۰٪ افزایش کارایی</h3>
                            <p className="text-black/50 text-sm">همه ابزارها فقط در یک پنل</p>
                        </div>

                        <div className="bg-white/60  rounded-xl p-6 border border-white/20">
                            <TrendingUp className="w-8 h-8 text-blue-400 mb-3 mx-auto lg:mr-0" />
                            <h3 className="font-bold text-black/50 mb-2">مدیریت هوشمند</h3>
                            <p className="text-black/50 text-sm">دسترسی از هرجا و هر زمان</p>
                        </div>

                        <div className="bg-white/60  rounded-xl p-6 border border-white/20">
                            <DollarSign className="w-8 h-8 text-yellow-400 mb-3 mx-auto lg:mr-0" />
                            <h3 className="font-bold text-black/50 mb-2">کاهش هزینه</h3>
                            <p className="text-black/50 text-sm">تا ۷۷٪ کاهش هزینه بازاریابی</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Heroimage;
