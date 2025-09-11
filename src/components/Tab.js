'use client'
import React, { useState } from 'react';

const Tab = () => {
    // state برای نگهداری tab فعال
    const [activeTab, setActiveTab] = useState('order');

    // تابع برای تغییر tab
    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        
            <div className="whyMupra">
                <h2> نرم افزار مدیریت رستوران چیست و چگونه رستوران شما را متحول می کند؟   </h2>
                <p>پلتفرم ابری و یکپارچه؛ همه ابزارهای مورد نیاز شما در یک نرم افزار، با دسترسی از هرجا...</p>
                
                <div className="mupraSwitch relative z-30 flex gap-4 mb-6">
                    <button 
                        className={`px-4 py-2 rounded-lg border transition-all duration-300 cursor-pointer relative z-40 ${
                            activeTab === 'order' 
                                ? 'bg-blue-500 text-white border-blue-500 active' 
                                : 'bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300'
                        }`} 
                        onClick={() => handleTabChange('order')}
                        type="button"
                    >
                        گرفتن سفارش ها
                    </button>
                    <button 
                        className={`px-4 py-2 rounded-lg border transition-all duration-300 cursor-pointer relative z-40 ${
                            activeTab === 'preparing' 
                                ? 'bg-blue-500 text-white border-blue-500 active' 
                                : 'bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300'
                        }`} 
                        onClick={() => handleTabChange('preparing')}
                        type="button"
                    >
                        آماده سازی و سرو
                    </button>
                    <button 
                        className={`px-4 py-2 rounded-lg border transition-all duration-300 cursor-pointer relative z-40 ${
                            activeTab === 'payAndSurvey' 
                                ? 'bg-blue-500 text-white border-blue-500 active' 
                                : 'bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300'
                        }`} 
                        onClick={() => handleTabChange('payAndSurvey')}
                        type="button"
                    >
                        پرداخت و نظرسنجی
                    </button>
                    <button 
                        className={`px-4 py-2 rounded-lg border transition-all duration-300 cursor-pointer relative z-40 ${
                            activeTab === 'managment' 
                                ? 'bg-blue-500 text-white border-blue-500 active' 
                                : 'bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300'
                        }`} 
                        onClick={() => handleTabChange('managment')}
                        type="button"
                    >
                        مدیریت و رشد
                    </button>
                </div>

                <div className="images w-fit h-fit relative">
                    
                    <picture className={`order   transition-opacity duration-500 pointer-events-none ${activeTab === 'order' ? 'opacity-100 z-10' : 'opacity-30 z-0'}`}>
                        <source srcSet="/payment.webp" type="image/webp" />
                        <img src="/payment.png" width="auto" height="auto" alt="پرداخت" className="pointer-events-none" />
                    </picture>
                    <picture className={`order  transition-opacity duration-500 pointer-events-none ${activeTab === 'order' ? 'opacity-100 z-10' : 'opacity-30 z-0'}`}>
                        <source srcSet="/manWithFood.webp" type="image/webp" />
                        <img src="/manWithFood.png" width="auto" height="auto" alt="مرد با غذا" className="pointer-events-none" />
                    </picture>

                    
                    <picture className={`preparing  transition-opacity duration-500 pointer-events-none ${activeTab === 'preparing' ? 'opacity-100 z-10' : 'opacity-30 z-0'}`}>
                        <source srcSet="/kds.webp" type="image/webp" />
                        <img src="/kds.png" width="auto" height="auto" alt="سیستم آشپزخانه" className="pointer-events-none" />
                    </picture>
                    <picture className={`preparing  transition-opacity duration-500 pointer-events-none ${activeTab === 'preparing' ? 'opacity-100 z-10' : 'opacity-30 z-0'}`}>
                        <source srcSet="/storage.webp" type="image/webp" />
                        <img src="/storage.png" width="auto" height="auto" alt="انبارداری" className="pointer-events-none" />
                    </picture>
                    <picture className={`preparing  transition-opacity duration-500 pointer-events-none ${activeTab === 'preparing' ? 'opacity-100 z-10' : 'opacity-30 z-0'}`}>
                        <source srcSet="/delivery.webp" type="image/webp" />
                        <img src="/delivery.png" width="auto" height="auto" alt="تحویل" className="pointer-events-none" />
                    </picture>

                  
                    <picture className={`payAndSurvey  transition-opacity duration-500 pointer-events-none ${activeTab === 'payAndSurvey' ? 'opacity-100 z-10' : 'opacity-30 z-0'}`}>
                        <source srcSet="/manWithPhone.webp" type="image/webp" />
                        <img src="/manWithPhone.png" width="auto" height="auto" alt="مرد با تلفن" className="pointer-events-none" />
                    </picture>
                    <picture className={`payAndSurvey  transition-opacity duration-500 pointer-events-none ${activeTab === 'payAndSurvey' ? 'opacity-100 z-10' : 'opacity-30 z-0'}`}>
                        <source srcSet="/dine.webp" type="image/webp" />
                        <img src="/dine.png" width="auto" height="auto" alt="غذا خوردن" className="pointer-events-none" />
                    </picture>

                    
                    <picture className={`managment  transition-opacity duration-500 pointer-events-none ${activeTab === 'managment' ? 'opacity-100 z-10' : 'opacity-30 z-0'}`}>
                        <source srcSet="/manage.webp" type="image/webp" />
                        <img src="/manage.png" width="auto" height="auto" alt="مدیریت" className="pointer-events-none" />
                    </picture>
                    <picture className={`managment  transition-opacity duration-500 pointer-events-none ${activeTab === 'managment' ? 'opacity-100 z-10' : 'opacity-30 z-0'}`}>
                        <source srcSet="/manager.webp" type="image/webp" />
                        <img src="/manager.png" width="auto" height="auto" alt="مدیر" className="pointer-events-none" />
                    </picture>

                    <div className="content w-fit h-fit block">
                        
                        <div className={`order desc desc1 desktop ${activeTab === 'order' ? 'active' : 'hidden'}`}>
                            <div className="ripple"></div>
                            <div className="items">
                                <h5 className="title">مدیریت یکپارچه سفارش ها</h5>
                                <ul>
                                    <li>سفارش های داخل سالن</li>
                                    <li>سفارش های تلفنی</li>
                                    <li>سفارش آنلاین سرمیز از طریق QR کد</li>
                                    <li>سفارش از کیوسک سفارشگیر</li>
                                    <li>سفارش های آنلاین بیرون بر</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`order desc desc2 ${activeTab === 'order' ? 'active' : 'hidden'}`}>
                            <div className="ripple"></div>
                            <div className="items">
                                <h5 className="title">فراخوانی آنلاین مهماندار</h5>
                            </div>
                        </div>
                        <div className={`order desc desc3 ${activeTab === 'order' ? 'active' : 'hidden'}`}>
                            <div className="ripple"></div>
                            <div className="items">
                                <h5 className="title">مدیریت رزروها</h5>
                            </div>
                        </div>
                        <div className={`order desc desc4 desktop ${activeTab === 'order' ? 'active' : 'hidden'}`}>
                            <div className="ripple"></div>
                            <div className="items">
                                <h5 className="title">دریافت سفارش های ماشینی و آنلاین</h5>
                            </div>
                        </div>

                        
                        <div className={`preparing desc desc1 desktop ${activeTab === 'preparing' ? 'active' : 'hidden'}`}>
                            <div className="ripple"></div>
                            <div className="items">
                                <h5 className="title">هماهنگی کامل آشپزخانه و صندوق (KDS)</h5>
                                <ul>
                                    <li>مشاهده سفارش ها در لحظه</li>
                                    <li>اطلاع آنلاین صندوق از سفارش های آماده شده</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`preparing desc desc2 ${activeTab === 'preparing' ? 'active' : 'hidden'}`}>
                            <div className="ripple"></div>
                            <div className="items">
                                <h5 className="title">اعزام پیک های بیرون بر</h5>
                            </div>
                        </div>
                        <div className={`preparing desc desc3 ${activeTab === 'preparing' ? 'active' : 'hidden'}`}>
                            <div className="ripple"></div>
                            <div className="items">
                                <h5 className="title">یکپارچه با انبار ها</h5>
                            </div>
                        </div>

                      
                        <div className={`payAndSurvey desc desc1 ${activeTab === 'payAndSurvey' ? 'active' : 'hidden'}`}>
                            <div className="ripple"></div>
                            <div className="items">
                                <h5 className="title">پرداخت آنلاین سرمیز با QR کد</h5>
                            </div>
                        </div>
                        <div className={`payAndSurvey desc desc2 desktop ${activeTab === 'payAndSurvey' ? 'active' : 'hidden'}`}>
                            <div className="ripple"></div>
                            <div className="items">
                                <h5 className="title">پرداخت دُنگی دوستان</h5>
                            </div>
                        </div>
                        <div className={`payAndSurvey desc desc3 desktop ${activeTab === 'payAndSurvey' ? 'active' : 'hidden'}`}>
                            <div className="ripple"></div>
                            <div className="items">
                                <h5 className="title">مدیریت پرداخت ها (آنلاین، کارتی، اعتباری، دُنگی، نقدی و ترکیبی)</h5>
                            </div>
                        </div>
                        <div className={`payAndSurvey desc desc4 ${activeTab === 'payAndSurvey' ? 'active' : 'hidden'}`}>
                            <div className="ripple"></div>
                            <div className="items">
                                <h5 className="title">نظرسنجی آنلاین و هوشمند</h5>
                            </div>
                        </div>

                       
                        <div className={`managment desc desc1 ${activeTab === 'managment' ? 'active' : 'hidden'}`}>
                            <div className="ripple"></div>
                            <div className="items">
                                <h5 className="title">مکانیزه کردن فرایندها</h5>
                            </div>
                        </div>
                        <div className={`managment desc desc2 ${activeTab === 'managment' ? 'active' : 'hidden'}`}>
                            <div className="ripple"></div>
                            <div className="items">
                                <h5 className="title">مدیریت مالی و تصمیم های افزایش سودآوری</h5>
                            </div>
                        </div>
                        <div className={`managment desc desc3 desktop ${activeTab === 'managment' ? 'active' : 'hidden'}`}>
                            <div className="ripple"></div>
                            <div className="items">
                                <h5 className="title">مارکتینگ و بازگشت مشتریان</h5>
                            </div>
                        </div>
                        <div className={`managment desc desc4 ${activeTab === 'managment' ? 'active' : 'hidden'}`}>
                            <div className="ripple"></div>
                            <div className="items">
                                <h5 className="title">کاست کنترل و مهندسی منو</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default Tab;