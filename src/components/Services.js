import React from 'react';
import { Users, Cloud, BarChart3, Clock, LayoutTemplate, Network, Settings, SearchCheck, ChartArea, Palette, Search, Shield, Megaphone, HardDrive } from 'lucide-react';
import Link from 'next/link';
import WebDesign from './template/WebDesign';

const Services = () => {
    return (
        <div>
            
            <section className="pb-20  ">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 ">
                        <h2 className="text-4xl font-semibold drop-shadow-[2px_2px_3px_rgba(0,0,0,0.3)] text-secondary mb-4">
                            خدمات دیتا ترادا
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            امکانات پیشرفته و یکپارچه برای مدیریت هوشمند
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Palette className="w-8 h-8" />,
                                title: "طراحی سایت",
                                description: "طراحی و توسعه وب‌سایت‌های مدرن و ریسپانسیو"
                            },
                            {
                                icon: <Search className="w-8 h-8" />,
                                title: "سئو",
                                description: "بهینه‌سازی موتورهای جستجو و افزایش رتبه سایت"
                            },
                            {
                                icon: <Shield className="w-8 h-8" />,
                                title: "امنیت",
                                description: "محافظت از سیستم‌ها و داده‌ها در برابر تهدیدات سایبری"
                            },
                            {
                                icon: <Megaphone className="w-8 h-8" />,
                                title: "دیجیتال مارکتینگ",
                                description: "تبلیغات آنلاین و بازاریابی دیجیتال در شبکه‌های اجتماعی"
                            },
                            {
                                icon: <HardDrive className="w-8 h-8" />,
                                title: "سخت‌افزار",
                                description: " فروش و پشتیبانی انواع تجهیزات و قطعات سخت‌افزاری "
                            },
                            {
                                icon: <Clock className="w-8 h-8" />,
                                title: "پشتیبانی ۲۴/۷",
                                description: "دریافت کمک فنی در تمامی ساعات شبانه‌روز"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="group p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                <Link href='/WebDesign'>
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#243954] to-slate-500 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform duration-300 relative before:absolute before:inset-1 before:rounded-2xl before:border-dashed before:border-1 before:border-[#FFAC30]/30 before:pointer-events-none">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold  text-secondary mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
