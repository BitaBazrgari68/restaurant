
"use client"


import React, { useState, useEffect } from 'react';

import { ArrowLeft, Play, Star, Users, TrendingUp, Shield, Smartphone, Cloud, BarChart3, Clock, CheckCircle2, Menu, X } from 'lucide-react';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
    };

    return (
        <>
            <header className="relative z-50 bg-white/90 backdrop-blur-md border-b border-blue-100/50 sticky top-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-lg">م</span>
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-l from-blue-600 to-purple-600 bg-clip-text text-transparent">ماپرا</span>
                        </div>

                        <nav className="hidden md:flex items-center gap-8">
                            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">خانه</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">امکانات</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">قیمت‌گذاری</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">درباره ما</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">تماس</a>
                        </nav>

                        <div className="flex items-center gap-4">
                            <button className="hidden md:block px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors font-medium">
                                ورود
                            </button>
                            <button className="bg-gradient-to-l from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl hover:shadow-lg transition-all duration-300 font-medium">
                                شروع رایگان
                            </button>
                            <button
                                className="md:hidden p-2"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4 border-t border-gray-100">
                            <nav className="flex flex-col space-y-4">
                                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">خانه</a>
                                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">امکانات</a>
                                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">قیمت‌گذاری</a>
                                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">درباره ما</a>
                                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">تماس</a>
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        </>
    )
}
