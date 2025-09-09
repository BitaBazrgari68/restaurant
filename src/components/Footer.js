import Image from 'next/image';
import React from 'react';

import logo from '../../public/images/logo.png'
import enamad from '../../public/images/enamad.png'
const Footer = () => {
    return (
        <footer className="bg-primary text-white py-12 footer relative mt-20">
            <div className="hidden md:block socialmedia">
                <i className="common-icon common-icon-socialmediaicon"></i>
                <div>
                    <span className="t1">برای اطلاع از تخفیف ها و جدیدترین خبر ها</span>
                    <span className="t2 text-secondary ">ترادا  را در شبکه های اجتماعی دنبال کنید...</span>
                </div>
                <ul>
                    <li>
                        <a href="https://www.aparat.com/mupra" title="آپارات" target="_blank" rel="nofollow" className="aparat">
                            <i className="common-icon common-icon-social-aparat">

                            </i>
                            آپارات
                        </a>
                    </li>
                    <li>
                        <a href="/" target="_blank" rel="nofollow" title="یوتیوب" className="youtube">
                            <i className="common-icon common-icon-social-youtube">

                            </i>
                            یوتیوب
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/data_trada" target="_blank" rel="nofollow" title="ایسنتاگرام" className="instagram">
                            <i className="common-icon common-icon-social-instagram"></i>
                            ایسنتاگرام</a>
                    </li>
                    <li>
                        <a href="/" target="_blank" rel="nofollow" title="توییتر" className="twitter">
                            <i className="common-icon common-icon-Twitter"></i>
                            توییتر</a>
                    </li>
                    <li>
                        <a href="/" target="_blank" rel="nofollow" title="لینکدین" className="linkedin">
                            <i className="common-icon common-icon-social-linkedin"></i>
                            لینکدین</a>
                    </li>
                </ul>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                <div className="grid md:grid-cols-5 gap-8 ">
                    <div className='mx-auto'>
                        <div className="flex items-center gap-3 mb-4">
                            <div className=" rounded-xl flex items-center justify-center">
                                <Image
                                    src={logo}
                                    width={170}
                                    height={130}
                                    alt="Picture of the author"
                                />
                            </div>

                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            نرم افزارهای هوشمند ترادا
                        </p>
                    </div>

                    <div className='mx-auto'>
                        <h3 className="font-bold text-lg drop-shadow-[2px_2px_3px_rgba(0,0,0,0.3)] mb-4 text-secondary">محصولات</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">نرم افزارها</a></li>
                            <li><a href="#" className="hover:text-white transition-colors"> سئو</a></li>
                            <li><a href="#" className="hover:text-white transition-colors"> طراحی سایت</a></li>
                            <li><a href="#" className="hover:text-white transition-colors"> امنیت</a></li>
                        </ul>
                    </div>

                    <div className='mx-auto'>
                        <h3 className="font-bold text-lg drop-shadow-[2px_2px_3px_rgba(0,0,0,0.3)] mb-4 text-secondary">شرکت</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">درباره ما</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">تماس با ما</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">وبلاگ</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">کریر</a></li>
                        </ul>
                    </div>

                    <div className='mx-auto'>
                        <h3 className="font-bold text-lg drop-shadow-[2px_2px_3px_rgba(0,0,0,0.3)] mb-4 text-secondary">پشتیبانی</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">مرکز راهنمایی</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">پشتیبانی آنلاین</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">آموزش</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">وضعیت سرویس</a></li>
                        </ul>
                    </div>
                    <div className='mx-auto'>
                        <Image
                            src={enamad}
                            width={170}
                            height={130}
                            alt="Picture of the author"
                        />
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
                    <p>&copy; ۲۰۲۵ ترادا . تمامی حقوق محفوظ است . </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
