import React from 'react';
export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-800 mb-4">
                        امکانات اختصاصی نرم‌افزار تولید و فروش بتن
                    </h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* ستون اول - امکانات اصلی */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg font-bold ml-3">
                                ۱
                            </div>
                            امکانات تعاریف و ثبت اطلاعات
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">تعریف انواع پمپها و میکسرها به تفکیک (شرکت، همکار و متفرقه) و تعیین جایگاه آنها در درخت حسابها</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">تعریف انواع بتن، مقاومت بتن و سیمان</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">تعریف مشتریان و تأمین کنندگان مواد اولیه</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">تعریف شرکتهای همکار</span>
                            </li>
                        </ul>
                    </div>

                    {/* ستون دوم - مدیریت بارنامه */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white text-lg font-bold ml-3">
                                ۲
                            </div>
                            مدیریت بارنامه بتن
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">ثبت بارنامه بتن (کارت اطلاعات پیمانه) با جزئیات کامل</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">تخصیص شماره مسلسل بصورت خودکار به هر بارنامه</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">درج زمان و تاریخ صدور بارنامه</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">درج نام مشتری به همراه مقصد و تحویل گیرنده در بارنامه</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">درج مشخصات بتن اعم از نوع بتن، نوع سیمان، مقاومت، دمای آب، اسلامپ و وزن مخصوص</span>
                            </li>
                        </ul>
                    </div>

                    {/* طراحی و قابلیت‌های پیشرفته */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white text-lg font-bold ml-3">
                                ۳
                            </div>
                            طراحی و قابلیت‌های پیشرفته
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">طراحی بارنامه بتن طبق استاندارهای کشوری</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">طراحی آرم شرکت و نشان استاندارد در بارنامه</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">فراخوانی وزن مستقیماً از باسکول</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">تکمیل هوشمند اطلاعات بارنامه</span>
                            </li>
                        </ul>
                    </div>

                    {/* محاسبات مالی */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white text-lg font-bold ml-3">
                                ۴
                            </div>
                            محاسبات مالی
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">محاسبه مبلغ بتن بر اساس نوع، مقدار و فی</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">محاسبه مبلغ کرایه و هزینه‌های حمل</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">محاسبه مبلغ پمپاژ و تخلیه</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">تبدیل خودکار بارنامه به فاکتور</span>
                            </li>
                        </ul>
                    </div>

                    {/* فاکتورسازی */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white text-lg font-bold ml-3">
                                ۵
                            </div>
                            مدیریت فاکتور
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">تنظیم چیدمان آیتم‌های فاکتور</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">درج آیتم‌ها به تفکیک تاریخ و بارنامه</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">محاسبه خودکار ارزش افزوده</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">ایجاد سند حسابداری خودکار</span>
                            </li>
                        </ul>
                    </div>

                    {/* امکانات حسابداری */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white text-lg font-bold ml-3">
                                ۶
                            </div>
                            امکانات حسابداری
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">Export و Import بارنامه‌ها</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">کنترل موجودی در لحظه</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">تعیین اعتبار مشتریان</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">ثبت دریافت نقدی و اسناد</span>
                            </li>
                        </ul>
                    </div>

                    {/* گزارشات */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                            <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center text-white text-lg font-bold ml-3">
                                📊
                            </div>
                            گزارشات جامع
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">صورت ریز فروش بتن به مشتریان</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">گزارش کارکرد پمپ‌ها و میکسرها</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">گزارش برنامه‌ریزی روزانه</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">جمع‌بندی فروش به تفکیک نوع بتن</span>
                            </li>
                        </ul>
                    </div>

                    {/* آزمایشگاه */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 ">
                        <h2 className="text-3xl font-bold mb-6 text-right">مدیریت آزمایشگاه و کیفیت</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-white rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                    <span className="leading-relaxed">تعریف الگوهای نمونه‌برداری برای هر کارخانه</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-white rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                    <span className="leading-relaxed">نمونه‌برداری خودکار از بارنامه‌های بتن</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-white rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                    <span className="leading-relaxed">پیوست عکس پروژه‌ها برای ثبت آزمایش</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-white rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                    <span className="leading-relaxed">تولید خودکار لیبل آزمونه‌ها</span>
                                </li>
                            </ul>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-white rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                    <span className="leading-relaxed">داشبورد هشدارهای روزانه</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-white rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                    <span className="leading-relaxed">ارسال پیامک به مشتری برای دریافت شیت</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-white rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                    <span className="leading-relaxed">ذخیره شیت در فرمت‌های مختلف</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-white rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                    <span className="leading-relaxed">یادآوری سرسید شکست آزمونه‌ها</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* سیستم پیام‌رسان */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                            <div className="w-8 h-8 bg-yellow-600 rounded-lg flex items-center justify-center text-white text-lg font-bold ml-3">
                                📱
                            </div>
                            سیستم پیام‌رسان SMS
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">یادآوری برنامه روزانه بتن‌ریزی</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">ارسال مانده حساب مشتریان</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">اعلام شروع و پایان بتن‌ریزی</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">جمع‌بندی ورود مواد به کارخانه</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">اعلام فروش روزانه به مدیریت</span>
                            </li>
                        </ul>
                    </div>

                    {/* سیستم پلاک‌خوان */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white text-lg font-bold ml-3">
                                🚛
                            </div>
                            سیستم پلاک‌خوان هوشمند
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">خواندن پلاک و استخراج اطلاعات در ۵ ثانیه</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">تفکیک خودکار انواع خودرو</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">خواندن تمام انواع پلاک‌ها</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">هشدار ورود خودروی غیرمجاز</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                                <span className="text-slate-700 leading-relaxed">نوبت‌دهی هوشمند میکسرها</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}