'use client';
import React, { useState } from 'react';

export default function RestaurantSoftwarePage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'گرفتن سفارش‌ها',
      content: {
        title: 'گرفتن سفارش‌ها',
        description: 'سیستم هوشمند دریافت و مدیریت سفارشات',
        features: [
          'ثبت سفارش از طریق اپلیکیشن موبایل',
          'سفارش‌گیری حضوری با تبلت',
          'مدیریت صف انتظار',
          'اطلاع‌رسانی خودکار به آشپزخانه'
        ],
        image: '/images/order-taking.jpg'
      }
    },
    {
      title: 'آماده سازی و سرو',
      content: {
        title: 'آماده سازی و سرو',
        description: 'مدیریت فرآیند تولید و سرویس غذا',
        features: [
          'نمایش سفارشات در آشپزخانه',
          'زمان‌بندی تولید غذا',
          'مدیریت اولویت سفارشات',
          'اطلاع‌رسانی آماده بودن غذا'
        ],
        image: '/images/preparation.jpg'
      }
    },
    {
      title: 'پرداخت و نظرسنجی',
      content: {
        title: 'پرداخت و نظرسنجی',
        description: 'سیستم پرداخت یکپارچه و جمع‌آوری بازخورد',
        features: [
          'پرداخت نقدی و کارتی',
          'پرداخت آنلاین',
          'صدور فیش و فاکتور',
          'نظرسنجی خودکار از مشتریان'
        ],
        image: '/images/payment.jpg'
      }
    },
    {
      title: 'مدیریت و رشد',
      content: {
        title: 'مدیریت و رشد',
        description: 'ابزارهای تحلیل و بهبود عملکرد',
        features: [
          'گزارش‌گیری مالی و فروش',
          'تحلیل رفتار مشتریان',
          'مدیریت موجودی انبار',
          'برنامه‌ریزی برای رشد کسب‌وکار'
        ],
        image: '/images/management.jpg'
      }
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ماپرا چیست و چگونه رستوران شما را متحول می‌کند؟
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            پلتفرم ابری و یکپارچه؛ همه ابزارهای مورد نیاز شما در یک نرم افزار با دسترسی از هرجا...
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[500px]">
            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {tabs[activeTab].content.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {tabs[activeTab].content.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {tabs[activeTab].content.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 space-x-reverse">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                    بیشتر بدانید
                  </button>
                </div>
              </div>
            </div>

            {/* Image/Visual Side */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 lg:p-12 flex items-center justify-center">
              <div className="w-full max-w-md">
                {/* Visual representation based on active tab */}
                {activeTab === 0 && (
                  <div className="space-y-6">
                    {/* Order Taking Visual */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="flex items-center space-x-4 space-x-reverse mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">سفارش جدید</h4>
                          <p className="text-sm text-gray-600">میز شماره 5</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-700">چلو کباب</span>
                          <span className="text-gray-900 font-medium">1x</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">نوشابه</span>
                          <span className="text-gray-900 font-medium">2x</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600">سفارش ثبت شد</p>
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="space-y-6">
                    {/* Preparation Visual */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4 text-center">آشپزخانه</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-orange-100 rounded-lg p-4 text-center">
                          <div className="w-8 h-8 bg-orange-500 rounded-full mx-auto mb-2"></div>
                          <p className="text-xs text-gray-700">در حال آماده‌سازی</p>
                        </div>
                        <div className="bg-green-100 rounded-lg p-4 text-center">
                          <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2"></div>
                          <p className="text-xs text-gray-700">آماده سرو</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-4">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-700">زمان تخمینی: 15 دقیقه</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="space-y-6">
                    {/* Payment Visual */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">صورتحساب</h4>
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">چلو کباب</span>
                          <span className="text-gray-900">120,000 تومان</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">نوشابه (2x)</span>
                          <span className="text-gray-900">20,000 تومان</span>
                        </div>
                        <div className="border-t pt-2">
                          <div className="flex justify-between font-bold">
                            <span>مجموع</span>
                            <span>140,000 تومان</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <button className="bg-blue-500 text-white p-2 rounded text-sm">کارت</button>
                        <button className="bg-green-500 text-white p-2 rounded text-sm">نقدی</button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 3 && (
                  <div className="space-y-6">
                    {/* Management Visual */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">داشبورد مدیریت</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">فروش امروز</span>
                          <span className="text-green-600 font-bold">2,500,000 تومان</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">تعداد سفارش</span>
                          <span className="text-blue-600 font-bold">45</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">میانگین سفارش</span>
                          <span className="text-purple-600 font-bold">55,000 تومان</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2 text-center">75% از هدف ماهانه</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}