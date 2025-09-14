'use client';
import React from 'react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
const PortfolioCard = ({ item }) => {
    // بقیه کد کامپوننت...

    const imgRef = useRef(null);

    useEffect(() => {
        const img = imgRef.current;
        if (img) {
            const handleLoad = () => {
                const imgHeight = img.offsetHeight;
                const duration = imgHeight * 5; // 5ms برای هر پیکسل
                img.style.transitionDuration = `${duration}ms`;
            };

            if (img.complete) {
                handleLoad();
            } else {
                img.addEventListener('load', handleLoad);
            }

            return () => img.removeEventListener('load', handleLoad);
        }
    }, [item.image]); // dependency برای تغییر تصویر
    return (
        <div className="w-full sm:w-1/2 lg:w-1/3 px-10 mb-10">
            <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 rounded-2xl border border-gray-300 shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500">

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden group cursor-pointer ">
                    <Link
                        href={item.href}
                        target="_blank"
                        title={item.title}
                        className="block w-full h-full"
                    >
                        <div className="absolute inset-0">
                            <img
                                ref={imgRef}
                                src={item.image}
                                alt={item.alt}
                                className="absolute top-0 left-0 w-full h-auto rounded-none transition-transform ease-linear transform translate-y-0 group-hover:-translate-y-[calc(100%-240px)]"
                                style={{
                                    minHeight: 'calc(100% + 80px)',
                                    transitionDuration: '2500ms' // زمان متوسط
                                }}

                            />
                        </div>
                    </Link>
                </div>

                {/* Content */}
                <div className="p-4 text-[#243954]">
                    <h2 className="text-lg font-semibold mb-2 text-right">
                        {item.title}
                    </h2>
                    <div className="text-sm ">
                        <span>سال: {item.year}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;
