'use client';

import React, { useState } from 'react';
import logo from '../../../public/images/logo.png'
import Image from 'next/image'
import { MapPin, Phone, Globe, Shield, Search, Code } from 'lucide-react'
const Signin = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        password: '',
        confirmPassword: '',
        terms: false
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // پاک کردن خطا وقتی کاربر شروع به تایپ می‌کند
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'نام الزامی است';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'نام خانوادگی الزامی است';
        }


        if (!formData.phone.trim()) {
            newErrors.phone = 'شماره موبایل الزامی است';
        } else if (!/^09\d{9}$/.test(formData.phone)) {
            newErrors.phone = 'شماره موبایل باید با 09 شروع شود و 11 رقم باشد';
        }

        if (!formData.password) {
            newErrors.password = 'رمز عبور الزامی است';
        } else if (formData.password.length < 8) {
            newErrors.password = 'رمز عبور باید حداقل 8 کاراکتر باشد';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'رمز عبور و تکرار آن یکسان نیستند';
        }

        if (!formData.terms) {
            newErrors.terms = 'پذیرش قوانین الزامی است';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setIsLoading(true);

        try {
            // شبیه‌سازی درخواست API
            await new Promise(resolve => setTimeout(resolve, 1500));

            console.log('اطلاعات ثبت نام:', formData);
            alert('ثبت نام با موفقیت انجام شد!');

            // ریست فرم
            setFormData({
                firstName: '',
                lastName: '',
                phone: '',
                password: '',
                confirmPassword: '',
                terms: false
            });
            setErrors({});

        } catch (error) {
            alert('خطا در ثبت نام. لطفاً دوباره تلاش کنید.');
        } finally {
            setIsLoading(false);
        }
    };

    return (<>

        <div className=" bg-gradient-to-br from-blue-50 to-indigo-100 flex py-4 px-24 " dir="rtl">

            {/* کانتینر اصلی */}
            <div className=" flex-1 ">
                {/* کارت فرم */}
                <div className="bg-white/90 rounded-br-2xl rounded-tr-2xl  backdrop-blur-sm  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.25)] p-8 relative overflow-hidden">
                    {/* هدر */}
                    <div className="text-center mb-8 relative z-10">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">ثبت نام</h1>
                    </div>
                    {/* فیلدهای فرم */}
                    <div className="space-y-4 relative z-10">
                        {/* نام و نام خانوادگی */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                                    نام
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-right ${errors.firstName ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="نام شما"
                                    required
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 text-xs mt-1 text-right">{errors.firstName}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                                    نام خانوادگی
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-right ${errors.lastName ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="نام خانوادگی"
                                    required
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 text-xs mt-1 text-right">{errors.lastName}</p>
                                )}
                            </div>
                        </div>
                        {/* شماره موبایل */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                                شماره موبایل
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-right ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="09123456789"
                                required
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-xs mt-1 text-right">{errors.phone}</p>
                            )}
                        </div>
                        {/* رمز عبور */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                                رمز عبور
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-right ${errors.password ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="حداقل 8 کاراکتر"
                                required
                            />
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1 text-right">{errors.password}</p>
                            )}
                        </div>
                        {/* تکرار رمز عبور */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                                تکرار رمز عبور
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-right ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="رمز عبور را مجدداً وارد کنید"
                                required
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-xs mt-1 text-right">{errors.confirmPassword}</p>
                            )}
                        </div>
                        {/* چک باکس قوانین */}
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                name="terms"
                                checked={formData.terms}
                                onChange={handleInputChange}
                                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                required
                            />
                            <label className="text-sm text-gray-600 text-right flex-1">
                                <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                                    قوانین و شرایط
                                </a> را مطالعه کرده و می‌پذیرم
                            </label>
                        </div>
                        {errors.terms && (
                            <p className="text-red-500 text-xs text-right">{errors.terms}</p>
                        )}
                        {/* دکمه ثبت نام */}
                        <button
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className={`bg-primary text-secondary px-8 text-xl flex items-center justify-center gap-2 relative before:absolute before:inset-1 before:rounded-lg before:border-dashed before:border-1 before:border-[#FFAC30]/30 before:pointer-events-none w-full font-medium py-3 rounded-lg transition-all duration-200 hover:shadow-lg ${isLoading
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                                }`}
                        >
                            {isLoading ? 'در حال ثبت نام...' : 'ثبت نام'}
                        </button>
                        {/* لینک ورود */}
                        <div className="text-center mt-6">
                            <p className="text-sm text-gray-600">
                                قبلاً ثبت نام کرده‌اید؟{' '}
                                <a href="/login" className="text-blue-600 hover:text-blue-800 font-medium underline">
                                    وارد شوید
                                </a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center min-h-screen flex-1 bg-primary rounded-tl-2xl rounded-bl-2xl backdrop-blur-sm  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.25)]'>
                <Image
                    src={logo}
                    width={250}
                    height={250}
                    alt="dataTrada"
                   
                />
                <h1 className='text-2xl font-semibold text-secondary'>
                    هلدینگ دیتا ترادا
                </h1>

                <ul className='text-white list-none p-5 space-y-3'>
                    <li className='flex items-center space-x-3 space-x-reverse'>
                        <Globe className="w-5 h-5 text-blue-400" />
                        <span>طراحی و تولید سایت</span>
                    </li>
                    <li className='flex items-center space-x-3 space-x-reverse'>
                        <Search className="w-5 h-5 text-green-400" />
                        <span>سئو</span>
                    </li>
                    <li className='flex items-center space-x-3 space-x-reverse'>
                        <Shield className="w-5 h-5 text-red-400" />
                        <span>امنیت</span>
                    </li>
                    <li className='flex items-center space-x-3 space-x-reverse'>
                        <Code className="w-5 h-5 text-purple-400" />
                        <span>تولید نرم افزار</span>
                    </li>
                </ul>

                <div className='flex gap-5 text-white space-y-2'>
                    <div className='flex items-center space-x-2 space-x-reverse'>
                        <span>05136043703</span>
                        <Phone className="w-4 h-4 text-green-400" />
                        
                    </div>
                    <div className='flex items-center space-x-2 space-x-reverse'>
                        <span>09154064900</span>
                        <Phone className="w-4 h-4 text-green-400" />
                        
                    </div>
                </div>

                <div className='flex items-start space-x-2 space-x-reverse text-white mt-4'>
                    <MapPin className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                    <p className='text-right'>
                        آدرس : مشهد، بلوار وکیل آباد ، خیابان عدل ، عدل 12
                    </p>
                </div>
            </div>
        </div>
    </>
    );
};

export default Signin;