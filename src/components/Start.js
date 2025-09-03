import React from 'react';
import { ArrowLeft, Play, Star, Users, TrendingUp, Shield, Smartphone, Cloud, BarChart3, Clock, CheckCircle2, Menu, X } from 'lucide-react';
const Start = () => {
    return (
        <div>
            <section className="py-20 bg-white  rounded-tr-[15vw] overflow-hidden z-10 shadow-[inset_0px_25px_50px_-25px_rgba(0,52,119,0.27)] mb-14">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl lg:text-4xl font-semibold  text-secondary mb-6 drop-shadow-[2px_2px_3px_rgba(0,0,0,0.3)] ">
                        آماده شروع هستید؟
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        همین الان شروع کنید و تفاوت را در کسب‌وکارتان مشاهده کنید
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <button className="bg-primary text-secondary px-8 py-4 rounded-2xl  text-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 relative before:absolute before:inset-1 before:rounded-2xl before:border-dashed before:border-1 before:border-[#FFAC30]/30 before:pointer-events-none">
                            <span> شما هم به ترادا بپیوندید .... </span>
                            <ArrowLeft size={20} />
                        </button>
                        <button className="border-2 border-[#FFAC30] text-[#243954] px-8 py-4 rounded-2xl font-bold text-lg hover:border-[#243954] hover:text-[#FFAC30] transition-all duration-300">
                            مشاوره رایگان
                        </button>
                    </div>

                    <div className="flex justify-center items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-green-500" />
                            <span>  پشتیبانی 24 ساعته  </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-green-500" />
                            <span>راه‌اندازی در کمتر از ۵ دقیقه</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Start;
