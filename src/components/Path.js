'use client'
import React from 'react';
import Image from 'next/image'


const Path = () => {
    return (
        <>
            <div className="path">
                <div className="pathinfo">
                    <svg width="1430" height="2322" viewBox="0 0 1430 2322" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1452 24.773C1409 70.4397 1297.5 148.073 1195.5 93.273C1068 24.773 951 -35.727 826 39.273C701 114.273 646.5 214.273 707 404.273C767.5 594.273 769.5 742.273 613 667.273C456.5 592.273 429 469.773 255.5 480.273C82 490.773 15.5001 779.773 5.50015 867.773C-4.49985 955.773 57.5002 1218.77 481.5 1030.77C905.5 842.773 1145 986.273 1237 1132.77C1329 1279.27 1214.27 1485.07 1101.5 1550.27C964 1629.77 707 1631.27 707 1631.27C471.5 1620.35 48.6 1677.8 113 1995C193.5 2391.5 629.5 2002 629.5 2280" stroke="#B9C6D8" strokeWidth="8" strokeLinecap="round" strokeDasharray="0.1 30"></path>
                        <circle cx="630" cy="2311" r="11" fill="#B9C6D8"></circle>
                    </svg>
                    <ul>
                        <li className="blue">
                            <div className="picture">
                                <Image
                                    src="/images/image1.jpg"
                                    alt='image1'
                                    width={360}
                                    height={398}
                                    loading='lazy'
                                    className='rounded-2xl z-10 w-[360] h-[398]'
                                />
                            </div>
                            <p className="title">
                                <b>میزهات</b>
                                هیچوقت خالی نمی‌مونن...
                            </p>
                        </li>
                        <li className="green">
                            <div className="picture">
                                <Image
                                    src="/images/image1.jpg"
                                    alt='image1'
                                    width={360}
                                    height={398}
                                    loading='lazy'
                                    className='rounded-2xl z-10 w-[360] h-[398]'
                                />
                            </div>
                            <p className="title">
                                <b>رزرو آنلاین</b>
                                میز ها، بازی ها، دورهمی ها
                            </p>
                        </li>
                        <li className="yellow">
                            <div className="picture">
                                <Image
                                    src="/images/image1.jpg"
                                    alt='image1'
                                    width={360}
                                    height={398}
                                    loading='lazy'
                                    className='rounded-2xl z-10 w-[360] h-[398]'
                                />
                            </div>
                            <p className="title">
                                <b>تحلیل</b>
                                فروش و مشتریات رو داشته باش...
                            </p>
                        </li>
                        <li className="lastblue">
                            <div className="picture">
                                <Image
                                    src="/images/image1.jpg"
                                    alt='image1'
                                    width={360}
                                    height={398}
                                    loading='lazy'
                                    className='rounded-2xl z-10 w-[360] h-[398]'
                                />
                            </div>
                            <p className="title">
                                <b>با جدیدترین فناوری ها</b>
                                کارایی و سودآوری رو افزایش بده...
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    );
}

export default Path;
