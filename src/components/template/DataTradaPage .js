import React from 'react';
import { Globe, Search, Shield, Code, Phone, MapPin, Mail, ExternalLink, Star, Award, Clock, Users, Instagram, Linkedin, MessageCircle, Send }from 'lucide-react';
import Image from 'next/image';
import logo from '../../../public/images/logo.png'
const DataTradaPage = () => {
    const services = [
        { icon: Globe, text: 'طراحی و تولید سایت', color: 'text-amber-400' },
        { icon: Search, text: 'سئو', color: 'text-amber-300' },
        { icon: Shield, text: 'امنیت', color: 'text-amber-500' },
        { icon: Code, text: 'تولید نرم افزار', color: 'text-amber-400' }
    ];

    const features = [
        { icon: Clock, text: 'بیش از 12  سال تجربه در زمینه IT' },
        { icon: Users, text: 'پشتیبانی 24 ساعته' },
        { icon: Award, text: 'ضمانت کیفیت محصولات' },
        { icon: Star, text: 'تیم متخصص و حرفه‌ای' }
    ];

    // Structured Data for Local Business
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "هلدینگ دیتا ترادا",
        "description": "ارائه دهنده خدمات طراحی سایت، سئو، امنیت سایبری و تولید نرم افزار",
        "url": "https://datatrada.com",
        "telephone": ["05136043703", "09154064900"],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "بلوار وکیل آباد، خیابان عدل، عدل 12",
            "addressLocality": "مشهد",
            "addressRegion": "خراسان رضوی",
            "addressCountry": "ایران"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "36.2605",
            "longitude": "59.6168"
        },
        "openingHours": "Mo-Sa 08:00-20:00",
        "priceRange": "$$",
        "areaServed": "مشهد",
        "serviceType": [
            "طراحی و تولید سایت",
            "بهینه سازی سئو",
            "امنیت سایبری",
            "تولید نرم افزار"
        ],
        "sameAs": [
            "https://instagram.com/datatrada",
            "https://linkedin.com/company/datatrada"
        ]
    };

    return (
        <>
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <div className="min-h-screen  relative overflow-hidden" dir="rtl">
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-slate-600/30 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-400/10 rounded-full blur-2xl"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 py-8">
                    <div className="grid lg:grid-cols-2 gap-8 min-h-screen">

                        {/* Main Information Panel */}
                        <div className='flex flex-col justify-center items-center bg-[#243954]/95 rounded-3xl backdrop-blur-lg shadow-2xl border border-amber-500/20 p-8 hover:shadow-amber-500/10 transition-all duration-500'>
                            <div className="flex flex-col items-center justify-center space-y-8 max-w-sm mx-auto">

                                {/* Logo */}
                                <div className="relative group">
                                    <div className="w-52 h-52 bg-gradient-to-br from-[#243954] to-slate-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-[#FFAC30]/50 group-hover:scale-105 transition-transform duration-300">
                                        <div className="text-6xl font-bold text-[#FFAC30]" aria-label="لوگو دیتا ترادا">
                                            <Image
                                                src={logo}
                                                width={170}
                                                height={130}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                </div>

                                <h1 className='text-4xl font-bold text-white text-center'>
                                    <span className="bg-gradient-to-r from-[#FFAC30] to-amber-300 bg-clip-text text-transparent">
                                        هلدینگ دیتا ترادا
                                    </span>
                                </h1>

                                {/* Services List */}
                                <ul className='text-white list-none space-y-4 w-full' role="list">
                                    {services.map((service, index) => (
                                        <li key={index} className='flex gap-4 items-center hover:bg-amber-500/10 p-4 rounded-xl transition-all duration-300 cursor-pointer group border border-transparent hover:border-amber-500/30' role="listitem">
                                            <service.icon className={`w-6 h-6 ${service.color} group-hover:scale-110 transition-transform flex-shrink-0`} aria-hidden="true" />
                                            <span className="group-hover:text-[#FFAC30] transition-colors text-lg">{service.text}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Contact Info */}
                                <div className='flex flex-col gap-4 text-white w-full' itemScope itemType="https://schema.org/ContactPoint">
                                    <div className='flex gap-4 items-center justify-center bg-[#FFAC30]/10 p-4 rounded-xl hover:bg-[#FFAC30]/20 transition-all duration-300 border border-[#FFAC30]/20'>
                                        <Phone className="w-5 h-5 text-[#FFAC30] flex-shrink-0" aria-hidden="true" />
                                        <span dir="ltr" itemProp="telephone" className="text-lg">05136043703</span>
                                    </div>
                                    <div className='flex gap-4 items-center justify-center bg-[#FFAC30]/10 p-4 rounded-xl hover:bg-[#FFAC30]/20 transition-all duration-300 border border-[#FFAC30]/20'>
                                        <Phone className="w-5 h-5 text-[#FFAC30] flex-shrink-0" aria-hidden="true" />
                                        <span dir="ltr" itemProp="telephone" className="text-lg">09154064900</span>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className='flex gap-4 items-start text-white bg-[#FFAC30]/10 p-5 rounded-xl w-full border border-[#FFAC30]/20' itemScope itemType="https://schema.org/PostalAddress">
                                    <MapPin className="w-5 h-5 text-[#FFAC30] mt-1 flex-shrink-0" aria-hidden="true" />
                                    <p className='text-right leading-relaxed'>
                                        آدرس: <span itemProp="addressLocality" className="text-[#FFAC30]">مشهد</span>، <span itemProp="streetAddress">بلوار وکیل آباد، خیابان عدل، عدل 12</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Information Panel */}
                        <div className="flex flex-col space-y-6">

                            {/* Welcome Section */}
                            <section className="bg-[#243954]/95 rounded-3xl backdrop-blur-lg shadow-2xl border border-amber-500/20 p-8 hover:shadow-amber-500/10 transition-all duration-500">
                                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                                    <span className="bg-gradient-to-r from-[#FFAC30] to-amber-300 bg-clip-text text-transparent">
                                        به دیتا ترادا خوش آمدید
                                    </span>
                                </h2>
                                <p className="text-gray-200 text-justify leading-relaxed mb-8 text-lg">
                                    ما در هلدینگ دیتا ترادا با بیش از 12 سال تجربه در زمینه فناوری اطلاعات، آماده ارائه بهترین خدمات در زمینه طراحی وب‌سایت، بهینه‌سازی سئو، امنیت سایبری و تولید نرم‌افزار هستیم.
                                </p>

                                {/* Features */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3 text-white bg-[#FFAC30]/10 p-4 rounded-xl hover:bg-[#FFAC30]/20 transition-all duration-300 border border-[#FFAC30]/20">
                                            <feature.icon className="w-5 h-5 text-[#FFAC30] flex-shrink-0" aria-hidden="true" />
                                            <span className="text-sm">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Services Detail */}
                            <section className="bg-[#243954]/95 rounded-3xl backdrop-blur-lg shadow-2xl border border-amber-500/20 p-8 hover:shadow-amber-500/10 transition-all duration-500">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Code className="w-7 h-7 text-[#FFAC30]" aria-hidden="true" />
                                    <span className="bg-gradient-to-r from-[#FFAC30] to-amber-300 bg-clip-text text-transparent">
                                        خدمات ما
                                    </span>
                                </h3>
                                <div className="space-y-4 text-gray-200" itemScope itemType="https://schema.org/Service">
                                    <article className="hover:bg-[#FFAC30]/10 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-[#FFAC30]/30">
                                        <h4 className="font-semibold text-[#FFAC30] mb-2 text-lg">طراحی و تولید سایت</h4>
                                        <p className="leading-relaxed">طراحی سایت‌های مدرن و ریسپانسیو با جدیدترین تکنولوژی‌ها</p>
                                    </article>
                                    <article className="hover:bg-[#FFAC30]/10 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-[#FFAC30]/30">
                                        <h4 className="font-semibold text-[#FFAC30] mb-2 text-lg">بهینه‌سازی سئو</h4>
                                        <p className="leading-relaxed">افزایش رتبه سایت در موتورهای جستجو و جذب ترافیک بیشتر</p>
                                    </article>
                                    <article className="hover:bg-[#FFAC30]/10 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-[#FFAC30]/30">
                                        <h4 className="font-semibold text-[#FFAC30] mb-2 text-lg">امنیت سایبری</h4>
                                        <p className="leading-relaxed">محافظت کامل از سیستم‌ها و داده‌های شما</p>
                                    </article>
                                    <article className="hover:bg-[#FFAC30]/10 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-[#FFAC30]/30">
                                        <h4 className="font-semibold text-[#FFAC30] mb-2 text-lg">تولید نرم‌افزار</h4>
                                        <p className="leading-relaxed">توسعه نرم‌افزارهای تحت وب و دسکتاپ سفارشی</p>
                                    </article>
                                </div>
                            </section>

                            {/* Contact CTA */}
                            <section className="bg-[#FFAC30] rounded-3xl backdrop-blur-lg shadow-2xl border border-[#FFAC30]/30 p-8 text-center hover:shadow-amber-500/20 transition-all duration-500">
                                <h3 className="text-2xl font-bold mb-4">
                                    <span className="text-[#243954]">
                                        ما را در شبکه‌های اجتماعی دنبال کنید
                                    </span>
                                </h3>
                                <p className="text-gray-200 mb-8 text-lg">برای اطلاع از آخرین اخبار و خدمات ما</p>
                                <div className="flex justify-center gap-6">
                                    <a href="https://www.instagram.com/data_trada" target='_blank' className="group bg-gradient-to-r from-[#cf30ff] to-amber-500 border border-white p-4 rounded-full hover:shadow-lg hover:shadow-amber-500/30 hover:scale-110 transition-all duration-300" aria-label="اینستاگرام دیتا ترادا">
                                        <Instagram className="w-8 h-8 text-white group-hover:rotate-12 transition-transform" />
                                    </a>
                                    <a href="#" className="group bg-gradient-to-r from-[#243954] to-slate-700 border border-white p-4 rounded-full hover:shadow-lg hover:shadow-amber-500/20 hover:scale-110 transition-all duration-300" aria-label="لینکدین دیتا ترادا">
                                        <Linkedin className="w-8 h-8 text-[#FFAC30] group-hover:rotate-12 transition-transform" />
                                    </a>
                                    <a href="#" className="group bg-gradient-to-r from-green-500 to-green-600 border border-white p-4 rounded-full hover:shadow-lg hover:shadow-green-500/30 hover:scale-110 transition-all duration-300" aria-label="واتساپ دیتا ترادا">
                                        <MessageCircle className="w-8 h-8 text-white group-hover:rotate-12 transition-transform" />
                                    </a>
                                    <a href="#" className="group bg-gradient-to-r from-blue-500 to-blue-600 p-4 border border-white rounded-full hover:shadow-lg hover:shadow-blue-500/30 hover:scale-110 transition-all duration-300" aria-label="تلگرام دیتا ترادا">
                                        <Send className="w-8 h-8 text-white group-hover:rotate-12 transition-transform" />
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="mt-16 text-center">
                        <div className="bg-[#243954]/80 rounded-2xl p-6 border border-[#FFAC30]/20">
                            <p className="text-gray-300 text-lg">
                                © 2024 هلدینگ <span className="text-[#FFAC30] font-bold">دیتا ترادا</span> - تمامی حقوق محفوظ است
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default DataTradaPage;