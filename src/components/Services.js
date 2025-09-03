import React from 'react';
import { Users, Shield, Smartphone, Cloud, BarChart3, Clock } from 'lucide-react';
const Services = () => {
    return (
        <div>
            <section className="pb-20  ">
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 ">
                        <h2 className="text-4xl font-semibold drop-shadow-[2px_2px_3px_rgba(0,0,0,0.3)] text-secondary mb-4">
                            چرا ترادا را انتخاب کنید؟
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            امکانات پیشرفته و یکپارچه برای مدیریت هوشمند
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Smartphone className="w-8 h-8" />,
                                title: "منو دیجیتال هوشمند",
                                description: "سفارش‌گیری بدون تماس با QR کد و پرداخت آنلاین"
                            },
                            {
                                icon: <Cloud className="w-8 h-8" />,
                                title: "مدیریت ابری",
                                description: "دسترسی از هرجا و هر زمان به اطلاعات کسب‌وکار"
                            },
                            {
                                icon: <BarChart3 className="w-8 h-8" />,
                                title: "تحلیل فروش پیشرفته",
                                description: "گزارش‌های دقیق و تحلیل روند فروش و سودآوری"
                            },
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: "باشگاه مشتریان",
                                description: "افزایش وفاداری مشتریان با پیام‌های هوشمند"
                            },
                            {
                                icon: <Shield className="w-8 h-8" />,
                                title: "امنیت بالا",
                                description: "حفاظت کامل از اطلاعات با رمزگذاری پیشرفته"
                            },
                            {
                                icon: <Clock className="w-8 h-8" />,
                                title: "پشتیبانی ۲۴/۷",
                                description: "دریافت کمک فنی در تمامی ساعات شبانه‌روز"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="group p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#243954] to-slate-500 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform duration-300 relative before:absolute before:inset-1 before:rounded-2xl before:border-dashed before:border-1 before:border-[#FFAC30]/30 before:pointer-events-none">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold  text-secondary mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
