import React from 'react';
import { ArrowLeft, Play, Star, Users, TrendingUp, Shield, Smartphone, Cloud, BarChart3, Clock, CheckCircle2, Menu, X } from 'lucide-react';
const Start = () => {
    return (
        <div>
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        آماده شروع هستید؟
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        همین الان شروع کنید و تفاوت را در کسب‌وکارتان مشاهده کنید
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <button className="bg-gradient-to-r from-[#101828] to-slate-700 text-white px-8 py-4 rounded-2xl  text-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                            <span> شما هم به ترادا بپیوندید .... </span>
                            <ArrowLeft size={20} />
                        </button>
                        <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-[#101828] hover:text-blue-600 transition-all duration-300">
                            مشاوره رایگان
                        </button>
                    </div>

                    <div className="flex justify-center items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-green-500" />
                            <span>بدون نیاز به کارت اعتباری</span>
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
