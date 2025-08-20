'use client';
import React, { useState, useEffect } from 'react';

import { ArrowLeft, Play, Star, Users, TrendingUp, Shield, Smartphone, Cloud, BarChart3, Clock, CheckCircle2, Menu, X } from 'lucide-react';

import Path from '@/components/Path';
import Header from '@/components/Header';
import Heroimage from '@/components/Heroimage';
import Footer from '@/components/Footer';
import Tab from '@/components/Tab';


export default function Home() {

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50" dir="rtl">
        {<Header />}
        {< Heroimage />}
        {/* Features Section */}
        {<Path />}
        {< Tab/>}

        <section className="pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                چرا ماپرا را انتخاب کنید؟
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                امکانات پیشرفته و یکپارچه برای مدیریت هوشمند رستوران، کافی شاپ و فست فود
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
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-bl from-blue-600 to-purple-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
              {[
                { number: "۵۰۰+", label: "رستوران فعال" },
                { number: "۳۰۰%", label: "افزایش کارایی" },
                { number: "۲۴/۷", label: "پشتیبانی" },
                { number: "۹۹.۹%", label: "آپتایم سرور" }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-4xl lg:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              آماده شروع هستید؟
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              همین الان شروع کنید و تفاوت را در کسب‌وکارتان مشاهده کنید
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-gradient-to-l from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                <span>شروع رایگان ۳۰ روزه</span>
                <ArrowLeft size={20} />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
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

        <Footer />


      </div>
    </>

  );
}
